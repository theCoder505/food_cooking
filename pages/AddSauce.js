import { useContext, useEffect, useState } from "react";
import Layout from "@/components/Layout";
import AppContext from "../context/AppContext";
import MainModal from "@/components/Modal";
import "react-tagsinput/react-tagsinput.css";
import TagsInput from "react-tagsinput";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { createSauce } from "@/context/recipe/sauceSlice";
import { imageUpload } from "@/context/user/userSlice";
const AddSauce = () => {
  const router = useRouter();
  const {
    setSauceData,
    setDrink,
    setShow,
    drink,
    show,
    setShowIng,
    showIng,
    setShowDir,
    showDir,
    showSources,
    setShowSources,
    ...contextRest
  } = useContext(AppContext);

  const { sauceData } = contextRest;
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState(null);
  const handleChangeTag = (value) => {
    setSauceData((v) => ({
      ...v,
      ["tag"]: value,
    }));
    console.log("taggggggg", drink);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSauceData((v) => ({
      ...v,
      [name]: value,
    }));

    console.log("handleChange ", sauceData);
  };
  let userId;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    let item = localStorage.getItem("user");
    item = JSON.parse(item);
    userId = item.id;
  }
  const fileUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setImagePreview(URL.createObjectURL(i));
      // setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const [drink1, setDrink1] = useState({
    steps: [{ description: '', image_url: null }]
  });

  const [stepImages, setStepImages] = useState(Array(drink1.steps.length).fill(null));

  const handleChangeSteps = (e, stepIndex) => {
    const { value, name } = e.target;
    const updatedSteps = [...drink1.steps];
    updatedSteps[stepIndex][name] = value;
    setSauceData({ ...sauceData, steps: updatedSteps });
  };

  const handleAddImage = (stepIndex, e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const updatedStepImages = [...stepImages];
      updatedStepImages[stepIndex] = URL.createObjectURL(selectedFile);
      setStepImages(updatedStepImages);

      const updatedSteps = [...drink1.steps];
      updatedSteps[stepIndex].image_url = selectedFile;
      setSauceData({ ...sauceData, steps: updatedSteps });
    }
  };

  const addStep = () => {
    const newStep = { description: '', image_url: null };
    setDrink1({ ...sauceData, steps: [...drink1.steps, newStep] });
  };
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sauceData.title == "") {
      // setErrors(true);
      toast.error("title missing...");
    } else if (sauceData.direction == "") {
      toast.error("direction missing...");
    } else if (sauceData.ingredients == "") {
      toast.error("ingredients missing...");
    } else if (sauceData.substitues == "") {
      toast.error("substitute missing...");
    } else if (sauceData.sources == "") {
      toast.error("sources missing..");
    } else if (sauceData.recipe_sauce_type == "") {
      toast.error("drink type missing..");
    } else {

      try {
        let updatedMediaUrl = '';

        if (image && image.type.startsWith('image')) {
          const mediaImage = await dispatch(imageUpload({ image: image }));

          if (mediaImage?.data?.status) {
            updatedMediaUrl = `${process.env.NEXT_PUBLIC_AUTH_URL}/${mediaImage?.data?.result?.url}`;
          }
        }

        const stepImages = await Promise.all(sauceData.steps.map(async (step) => {
          if (step.image_url instanceof File && step.image_url.type.startsWith('image')) {
            const uploadedImage = await dispatch(imageUpload({ image: step.image_url }));
            return uploadedImage?.data?.result?.url ? process.env.NEXT_PUBLIC_AUTH_URL + '/' + uploadedImage.data.result.url : '';
          } else {
            return step.image_url || '';
          }
        }));

        const updatedSteps = stepImages.map((image_url, index) => ({
          description: sauceData.steps[index].description,
          image_url: image_url,
        }));

        const ingredientsArray = sauceData.ingredients.split(',').map(ingredient => ({
          title: ingredient.trim(),
          description: ingredient.trim(),
        }));
        // setErrors(false);
        // const payload = {
        //   user_id: "1",
        //   title: sauceData.title,
        //   category_id: "3",
        //   ingredients: sauceData.ingredients,
        //   substitues: sauceData.substitues,
        //   about: sauceData.about,
        //   tag: sauceData?.tag?.toString(),
        //   notes: sauceData.notes,
        //   recipe_drink_type: sauceData?.recipe_drink_type?.toString(),
        //   direction: sauceData.direction,
        //   media: sauceData.media,
        //   sources: sauceData.sources,
        // };

        const formdata = {
          "category_id": "6",
          "title": sauceData.title,
          "ingredients": ingredientsArray,
          "substitues": sauceData.substitues,
          "media": updatedMediaUrl,
          "steps": updatedSteps,
          "sources": sauceData.sources,
          "notes": sauceData.notes,
          "tag": sauceData.tag,
          // "Tools_Equipments_Needed": sauceData.Tools_Equipments_Needed,
          "about": sauceData.about,
          "direction": sauceData.direction,
          // "recipe_sauce_type": sauceData?.recipe_drink_type?.toString(),
          "recipe_sauce_type": "text",
          "media_type": 'image',
          "serves": sauceData.serves,
          "prep_time": sauceData.prep_time,
          "cooking_time": sauceData.cooking_time,
          "difficulity": sauceData.difficulity
        }

        console.log("sauce---formdata", formdata)

        dispatch(createSauce(formdata));
      } catch (error) {
        console.log(error);
      }
    }
  };

  // const formdata = new FormData();
  // formdata.append("user_id", userId);
  // formdata.append("category_id", "6");
  // formdata.append("title", sauceData.title);
  // formdata.append("ingredients", sauceData.ingredients);
  // formdata.append("substitues", sauceData.substitues);
  // formdata.append("media", image);
  // formdata.append("sources", sauceData.sources);
  // formdata.append("notes", sauceData.notes);
  // formdata.append("tag", sauceData.tag.toString());
  // formdata.append("steps", sauceData.steps);
  // formdata.append("serves", sauceData.serves);
  // formdata.append("prep_time", sauceData.prep_time);
  // formdata.append("cooking_time", sauceData.cooking_time);
  // formdata.append("about", sauceData.about);
  // formdata.append("direction", sauceData.direction);
  // formdata.append("difficulity", sauceData.difficulity);
  // formdata.append(
  //   "recipe_drink_type",
  //   sauceData?.recipe_drink_type?.toString()
  // );
  // try {
  //   const response = await axios
  //     .post(`${process.env.NEXT_PUBLIC_AUTH_URL}/api/recipeRegister`, formdata, {
  //       // headers: {
  //       //   // 'authorization': token,
  //       //   Accept: "application/json",
  //       //   "Content-Type": "application/json",
  //       // },
  //     })
  //     .then((res) => {
  //       toast("Successfully Save");
  //       // alert("Successfully Save");
  //       console.log("res : ", res.data.message);
  //       setTimeout(() => {
  //         router.push({
  //           pathname: "/Recipe2/[id]",
  //           query: { id: res.data.recipe_id },
  //         });
  //       }, 3000);
  //       return res;
  //     })
  //     .catch((error) => {
  //       console.log("error-----", error);
  //       return error;
  //     });
  //   console.log("response------------->", response);
  // } catch (error) {
  //   console.log("error------------>", error);
  // }
// }
// console.log("sauceData", sauceData);
//   };
const handleIngredientClick = (e) => {
  const clickedIngredient = e.target.innerText;
  const currentIngredients = sauceData.ingredients || '';
  const ingredientsArray = currentIngredients.split(', ');

  const index = ingredientsArray.indexOf(clickedIngredient);

  if (index !== -1) {
    ingredientsArray.splice(index, 1);
  } else {
    ingredientsArray.push(clickedIngredient);
  }

  const newIngredients = ingredientsArray.filter(Boolean).join(', '); // Filter out empty strings

  setSauceData({ ...sauceData, ingredients: newIngredients });
};
const selectSauce = (value) => {
  console.log("select sauce type ", sauceData);
  if (sauceData?.["recipe_sauce_type"]?.includes(value)) {
    setSauceData((v) => ({
      ...v,
      ["recipe_sauce_type"]: v?.recipe_sauce_type?.filter((d) => d !== value),
    }));
  } else {
    setSauceData((v) => ({
      ...v,
      ["recipe_sauce_type"]: [...v?.recipe_sauce_type, value],
    }));
  }
};

useEffect(() => {
  console.log("Add Sauce data", sauceData);
}, [sauceData]);

const sauceTypes = [
  "BBQ",
  "Hot Sauce",
  "Sweet",
  "Spicy",
  "Sweet & Spicy",
  "Salad Dressing",
  "Syrup",
  "Frying Batter",
  "Taco",
  "Rest/Fastfood",
];

return (
  <>
    <Layout>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div className="full-page-display full-page-inner">
        <div className="container">
          <div className="full-page-container">
            <div className="full-adddrink dropdown">
              <h3 className="dropdown-toggle" data-bs-toggle="dropdown">
                Add Sauce <img src="images/EdiButton.png" />
              </h3>
              <div className="dropdown-menu dropdown-drink">
                <strong>Sauce Type</strong>
                <span>Sauce </span>
                <ul>
                  {sauceTypes.map((v) => {
                    return (
                      <li key={v}>
                        <input
                          type="checkbox"
                          name={v}
                          onChange={() => selectSauce(v)}
                        />{" "}
                        {v}
                      </li>
                    );
                  })}
                  {/* <li><input type="checkbox" /> Energy Drinks</li>
                                        <li><input type="checkbox" /> Smoothies</li>
                                        <li><input type="checkbox" /> Juice</li>
                                        <li><input type="checkbox" /> Energy Drinks</li>
                                        <li><input type="checkbox" /> Smoothies</li>
                                        <li><input type="checkbox" /> Juice</li>
                                        <li className="otherli"><input type="checkbox" /> other</li> */}
                </ul>

                <div className="text-center">
                  <button data-bs-dismiss="modal">Done</button>
                </div>
              </div>
            </div>
            <div className="drink-imh">
              <img src="images/charles-deluvio.png" />
            </div>

            <div className="drink-nop">
              <h3>Sauce Name</h3>
              <div className="d-flex titlename">
                <h3>Title Name</h3>
                <input
                  type="text"
                  placeholder="enter title"
                  id="title"
                  name="title"
                  value={sauceData.title}
                  onChange={(e) => handleChange(e)}
                />{" "}
              </div>

              <span>
                <img src="images/hotscale.png" />
              </span>
            </div>

            <div className="Substitutions_question">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="Ingredients-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Ingredients"
                    type="button"
                    role="tab"
                    aria-controls="Ingredients"
                    aria-selected="true"
                  >
                    Ingredients
                  </button>
                </li>
                <span></span>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="Substitutions-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Substitutions"
                    type="button"
                    role="tab"
                    aria-controls="Substitutions"
                    aria-selected="false"
                  >
                    Substitutions
                  </button>
                </li>
                <span></span>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="Steps-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Steps"
                    type="button"
                    role="tab"
                    aria-controls="Steps"
                    aria-selected="false"
                  >
                    Steps
                  </button>
                </li>
                <span></span>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="Notes-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Notes"
                    type="button"
                    role="tab"
                    aria-controls="Notes"
                    aria-selected="false"
                  >
                    Notes
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <form onSubmit={(data) => handleSubmit(data)} method="POST">
                  <div
                    className="tab-pane fade show active"
                    id="Ingredients"
                    role="tabpanel"
                    aria-labelledby="Ingredients-tab"
                  >
                    <div className="mynt">
                      <div className="mynt-ul">
                        <ul>
                          <li>
                            <label onClick={() => setShowDir(true)}>
                              + Add Directions
                            </label>

                            <MainModal
                              label={"Direction"}
                              name={"direction"}
                              show={showDir}
                              onHide={() => setShowDir(false)}
                              value={sauceData}
                              drink={sauceData}
                              setDrink={setSauceData}
                            />
                          </li>
                          {/* {errors == true ? (
                              <p style={{ color: "red" }}>required</p>
                            ) : (
                              <>
                                <p style={{ color: "red" }}> </p>
                              </>
                            )} */}
                          {/* <li> <input type="file" id="myFile" name="direction" value={sauceData.direction} onChange={(e) => handleChange(e)} /> <label for="myFile">+ Add Directions</label>
                                                        </li> */}
                          <li>
                            <label onClick={() => setShowIng(true)}>
                              + Add Ingredients
                            </label>
                            <MainModal
                              label={"Ingredients"}
                              name={"ingredients"}
                              show={showIng}
                              onHide={() => setShowIng(false)}
                              value={sauceData}
                              drink={sauceData}
                              setDrink={setSauceData}
                              onClick={(e) => handleIngredientClick(e)}

                            />
                          </li>
                          {/* {errors == true ? (
                              <p style={{ color: "red" }}>required</p>
                            ) : (
                              <>
                                <p style={{ color: "red" }}> </p>
                              </>
                            )} */}
                          {/* <li> <input type="file" id="myIngredients" name="ingredients" value={sauceData.ingredients} onChange={(e) => handleChange(e)} /> <label for="myIngredients">+ Add
                                                            Ingredients</label></li> */}
                          <li>
                            {" "}
                            {/* <input
                                type="file"
                                id="myVideo"
                                name="media"
                                value={sauceData.media}
                                onChange={(e) => handleChange(e)}
                              />{" "} */}
                            <input
                                type="file"
                                name="media"
                                // value={recipe.media}
                                onChange={(e) => fileUpload(e)}
                                id="filot"
                              />
                              <label for="filot">+ Add Video</label>
                            </li>
                          <li>
                            <label onClick={() => setShow(true)}>
                              + Add Substitute
                            </label>
                            <MainModal
                              label={"Substitues"}
                              name={"substitues"}
                              show={show}
                              onHide={() => setShow(false)}
                              value={sauceData}
                              drink={sauceData}
                              setDrink={setSauceData}
                              // required
                            />
                          </li>
                          {/* {errors == true ? (
                              <p style={{ color: "red" }}>required</p>
                            ) : (
                              <>
                                <p style={{ color: "red" }}> </p>
                              </>
                            )} */}
                          {/* <li> <input type="file" id="myAdd" name="substitute" value={sauceData.substitute} onChange={(e) => handleChange(e)} /> <label for="myAdd">+ Add Substitute <span><img
                                                            src="images/Replace.png" /></span></label></li> */}
                          <li>
                            <label onClick={() => setShowSources(true)}>
                              + Add Sources
                            </label>
                            {/* {errors == true ? (
                                <p style={{ color: "red" }}>required</p>
                              ) : (
                                <>
                                  <p style={{ color: "red" }}> </p>
                                </>
                              )} */}
                            <MainModal
                              label={"Sources"}
                              name={"sources"}
                              show={showSources}
                              onHide={() => setShowSources(false)}
                              value={sauceData}
                              drink={sauceData}
                              setDrink={setSauceData}
                            />
                          </li>
                          {/* <li> <input type="file" id="mySources" name="sources" value={sauceData.sources} onChange={(e) => handleChange(e)} /> <label for="mySources">+ Sources <img
                                                            src="images/Debian.png" /></label></li> */}
                          <li>
                            {" "}
                            <label
                              for="myDrink"
                              data-bs-toggle="modal"
                              href="#exampleModalToggle"
                            >
                              <small>
                                <img src="images/MaskGroup-33.png" />
                              </small>{" "}
                              Sauce Type{" "}
                              <small>
                                <img src="images/MaskGroup-34.png" />
                              </small>
                            </label>
                          </li>
                        </ul>
                      </div>
                      <div className="mynt-Tag">
                          <div className="ngrinput">
                          <strong>Steps</strong>
                            {drink1.steps.map((step, stepIndex) => (
                              <div key={stepIndex}>
                                <div style={{ position: 'relative' }}>
                                  <textarea
                                    name="description"
                                    value={step.description}
                                    onChange={(e) => handleChangeSteps(e, stepIndex)}
                                    placeholder="Write Steps here..........."
                                  />
                                  {stepImages[stepIndex] ? (
                                    <label
                                      htmlFor={`step-${stepIndex}`}
                                      style={{
                                        position: 'absolute',
                                        top: '25px',
                                        right: '15px',
                                        cursor: 'pointer',
                                      }}
                                    >
                                      <img
                                        src={stepImages[stepIndex]}
                                        alt={`Step ${stepIndex + 1}`}
                                        htmlFor={`step-${stepIndex}`}
                                        style={{
                                          cursor: 'pointer',
                                          maxWidth: '100px',
                                          maxHeight: '100px',
                                          objectFit: 'contain',
                                          borderRadius: '8px'
                                        }}
                                      />
                                    </label>
                                  ) : (
                                    <label
                                      htmlFor={`step-${stepIndex}`}
                                      style={{
                                        position: 'absolute',
                                        top: '15px',
                                        left: '180px',
                                        cursor: 'pointer',
                                      }}
                                    >
                                      <i className="fa-solid fa-image" />
                                    </label>
                                  )}
                                </div>
                                <input
                                  type="file"
                                  id={`step-${stepIndex}`}
                                  style={{ display: 'none' }}
                                  onChange={(e) => handleAddImage(stepIndex, e)}
                                />
                              </div>
                            ))}
                            <button onClick={addStep}>Add Step</button>
                          </div>
                          {/* Include your other form elements here */}
                        </div>
                        <div className="mynt-Tag">
                          <div className="ngrinput taginput-recipe">
                          <strong>Tag</strong>
                            <textarea
                              name="tag"
                              value={sauceData.tag}
                              onChange={(e) => handleChange(e)}
                              placeholder="exp: healthy , detox , gluten free, etc"
                              className="tag-box react-tagsinput"
                            />
                            {/* <input name='tag' value={recipe.tag} onChange={(e) => handleChange(e)} placeholder="exp: Chicken , mild, healthy, etc" /> */}
                          </div>
                        </div>
                      <div className="mynt-Tag">
                        <strong>Notes</strong>
                        <textarea
                          name="notes"
                          value={sauceData.notes}
                          onChange={(e) => handleChange(e)}
                          placeholder="Notes"
                          required
                        />
                      </div>
                      <div className="mynt-Tag position-relative">
                        <strong>Tools & Equipments Needed</strong>
                        <TagsInput
                          inputProps={{
                            placeholder:
                              '"exp: Blender, Pot, pan..."',
                            name: "Tools & Equipments Needed",
                          }}
                          className="tag-box react-tagsinput"
                          maxTags={20}
                          value={[]}
                          // onChange={handleChangeTag}
                        />
                        <div className="side-btn-bt">
                          <div className="CreatRecipe dropdown">
                            <strong className="dropdown-toggle" data-bs-toggle="dropdown">
                              Add <br />Substitues
                            </strong>
                            <div className="dropdown-menu substitues dropdown-menu-Recipe p-0">
                              <div class="container" style={{ backgroundColor: "#bababa" }}>
                                <div class="row">
                                  <div class="col-md-6 border-end border-dark">
                                    <h5 className="text-center mt-3 border-bottom border-dark">Ingredients</h5>
                                    <ul>
                                      <li style={{ border: "1px solid dark", backgroundColor: "#222B4552" }}>Pot</li>
                                      <li>Pot</li>
                                      <li>Blender</li>
                                      <li>Ladle</li>
                                      <li>Can Opener</li>
                                      <li>Spatula</li>
                                      <li>Oven Mitts</li>
                                      <li>Cutting Board</li>
                                    </ul>
                                  </div>
                                  <div class="col-md-6">
                                    <h5 className="text-center mt-3 border-bottom border-dark">Substitutes</h5>
                                    <div class="d-flex align-items-center">
                                      <div class="form-group d-flex subinput">
                                        <img src="/images/addgrocery.png" alt="Add Grocery" class="mr-2" />
                                        <input type="text" class="form-control form-control-sm" id="smallInput" placeholder="Small input" />
                                      </div>
                                    </div>
                                    <ul >
                                      <li>Pan, Sauce Pan</li>
                                      <li>Coffee Grinder</li>
                                      <li>Ladle</li>
                                      <li>Machine can opener</li>
                                      <li>Spoon</li>
                                      <li>Towel</li>
                                      <li>Wood, Plate</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mynt-Tag">
                        <strong>About</strong>
                        <textarea
                          name="about"
                          value={sauceData.about}
                          onChange={(e) => handleChange(e)}
                          placeholder="About"
                          required
                        />
                      </div>
                      <div className="text-center">
                        <button type="submit">Done</button>
                      </div>
                      <div className="text-Done">
                        {/* <!--ul>
                                <li><span><img src="images/addgrocery.png"/></span> Add individual ingredient to Grocery list</li>
                                <li><span><img src="images/foodcon.png"/></span> All ingredients in this color (  <small></small>   ) means it is in your Food Storage.</li>
                                <li><span><img src="images/subicon-2.png"/></span> Ingredients that have a substitute</li>
                                </ul--> */}
                      </div>
                    </div>
                  </div>
                  <div className="Ingredientshack mt-5 mb-5">
                    <ul>
                      <li>
                        <span>Prep time</span>
                        {/* <strong>25 mins</strong> */}
                        <div className="inputfeild-time">
                          {" "}
                          <input
                            name="prep_time"
                            value={sauceData.prep_time}
                            onChange={(e) => handleChange(e)}
                            // placeholder="Notes"
                            type="number"
                            // className="inputfeild-time"
                            placeholder="Time"
                          // value=""
                          />
                          <span>mins</span>
                        </div>
                      </li>
                      <li>
                        <span>Cooking time</span>
                        {/* <strong>25 mins</strong> */}
                        <div className="inputfeild-time">
                          {" "}
                          <input
                            name="cooking_time"
                            type="number"
                            value={sauceData.cooking_time}
                            onChange={(e) => handleChange(e)}
                            // className="inputfeild-time"
                            placeholder="Time"
                          // value=""
                          />
                          <span>mins</span>
                        </div>
                      </li>
                      <li>
                        <span>Serves</span>
                        {/* <strong>2</strong> */}
                        <div className="inputfeild-time">
                          {" "}
                          <input
                            type="text"
                            name="serves"
                            value={sauceData.serves}
                            onChange={(e) => handleChange(e)}
                            // className="inputfeild-time"
                            placeholder="Enter"
                          // value=""
                          />
                        </div>
                      </li>
                      <li>
                        <span>Difficulity</span>
                        {/* <strong>Easy</strong> */}
                        <div className="inputfeild-time">
                          <input
                            type="text"
                            name="difficulity"
                            placeholder="Easy"
                            value={sauceData.difficulity}
                            onChange={(e) => handleChange(e)}
                          />{" "}
                          {/* <span>Easy</span> */}
                        </div>
                      </li>
                    </ul>
                  </div>
                </form>
                <div
                  className="tab-pane fade "
                  id="Substitutions"
                  role="tabpanel"
                  aria-labelledby="Substitutions-tab"
                ></div>
                <div
                  className="tab-pane fade "
                  id="Steps"
                  role="tabpanel"
                  aria-labelledby="Steps-tab"
                ></div>
                <div
                  className="tab-pane fade"
                  id="Notes"
                  role="tabpanel"
                  aria-labelledby="Notes-tab"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body Drink-modal">
              <h3>Drink Type</h3>
              <strong>Drinks</strong>
              <ul>
                {sauceTypes.map((v) => {
                  return (
                    <li key={v}>
                      <input
                        type="checkbox"
                        id={v}
                        onChange={() => selectSauce(v)}
                      />{" "}
                      <label for={v}>{v}</label>
                    </li>
                  );
                })}
              </ul>
              <div className="text-center">
                <button data-bs-dismiss="modal">Done</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-body Drink-modal">
              <h3>Cultural</h3>
              <span>
                country: <input type="text" />
              </span>
              <ul className="Cultural-ul">
                <li>
                  <a href="#">African</a>
                </li>
                <li>
                  <a href="#">Afghan</a>
                </li>
                <li>
                  <a href="#">American</a>
                </li>
                <li>
                  <a href="#">Arab</a>
                </li>
                <li>
                  <a href="#">Argentine</a>
                </li>
                <li>
                  <a href="#">Argentinian</a>
                </li>
                <li>
                  <a href="#">Asian</a>
                </li>
                <li>
                  <a href="#">Australian</a>
                </li>
                <li>
                  <a href="#">Austrian</a>
                </li>
                <li>
                  <a href="#">Bangladeshi</a>
                </li>
                <li>
                  <a href="#">Barbecue*</a>
                </li>
                <li>
                  <a href="#">Basque</a>
                </li>
                <li>
                  <a href="#">Belgian</a>
                </li>
                <li>
                  <a href="#">Beninese</a>
                </li>
                <li>
                  <a href="#">Brazilian</a>
                </li>
                <li>
                  <a href="#">African</a>
                </li>
                <li>
                  <a href="#">Afghan</a>
                </li>
                <li>
                  <a href="#">American</a>
                </li>
                <li>
                  <a href="#">Arab</a>
                </li>
                <li>
                  <a href="#">Argentine</a>
                </li>
                <li>
                  <a href="#">Argentinian</a>
                </li>
                <li>
                  <a href="#">Asian</a>
                </li>
                <li>
                  <a href="#">Australian</a>
                </li>
                <li>
                  <a href="#">Austrian</a>
                </li>
                <li>
                  <a href="#">Bangladeshi</a>
                </li>
                <li>
                  <a href="#">Barbecue*</a>
                </li>
                <li>
                  <a href="#">Basque</a>
                </li>
                <li>
                  <a href="#">Belgian</a>
                </li>
                <li>
                  <a href="#">Beninese</a>
                </li>
                <li>
                  <a href="#">Brazilian</a>
                </li>
                <li>
                  <a href="#">African</a>
                </li>
                <li>
                  <a href="#">Afghan</a>
                </li>
                <li>
                  <a href="#">American</a>
                </li>
                <li>
                  <a href="#">Arab</a>
                </li>
                <li>
                  <a href="#">Argentine</a>
                </li>
                <li>
                  <a href="#">Argentinian</a>
                </li>
                <li>
                  <a href="#">Asian</a>
                </li>
                <li>
                  <a href="#">Australian</a>
                </li>
                <li>
                  <a href="#">Austrian</a>
                </li>
                <li>
                  <a href="#">Bangladeshi</a>
                </li>
                <li>
                  <a href="#">Barbecue*</a>
                </li>
                <li>
                  <a href="#">Basque</a>
                </li>
                <li>
                  <a href="#">Belgian</a>
                </li>
                <li>
                  <a href="#">Beninese</a>
                </li>
                <li>
                  <a href="#">Brazilian</a>
                </li>
                <li>
                  <a href="#">African</a>
                </li>
                <li>
                  <a href="#">Afghan</a>
                </li>
                <li>
                  <a href="#">American</a>
                </li>
                <li>
                  <a href="#">Arab</a>
                </li>
                <li>
                  <a href="#">Argentine</a>
                </li>
                <li>
                  <a href="#">Argentinian</a>
                </li>
                <li>
                  <a href="#">Asian</a>
                </li>
                <li>
                  <a href="#">Australian</a>
                </li>
                <li>
                  <a href="#">Austrian</a>
                </li>
                <li>
                  <a href="#">Bangladeshi</a>
                </li>
                <li>
                  <a href="#">Barbecue*</a>
                </li>
                <li>
                  <a href="#">Basque</a>
                </li>
                <li>
                  <a href="#">Belgian</a>
                </li>
                <li>
                  <a href="#">Beninese</a>
                </li>
                <li>
                  <a href="#">Brazilian</a>
                </li>
                <li>
                  <a href="#">African</a>
                </li>
                <li>
                  <a href="#">Afghan</a>
                </li>
                <li>
                  <a href="#">American</a>
                </li>
                <li>
                  <a href="#">Arab</a>
                </li>
                <li>
                  <a href="#">Argentine</a>
                </li>
                <li>
                  <a href="#">Argentinian</a>
                </li>
                <li>
                  <a href="#">Asian</a>
                </li>
                <li>
                  <a href="#">Australian</a>
                </li>
                <li>
                  <a href="#">Austrian</a>
                </li>
                <li>
                  <a href="#">Bangladeshi</a>
                </li>
                <li>
                  <a href="#">Barbecue*</a>
                </li>
                <li>
                  <a href="#">Basque</a>
                </li>
                <li>
                  <a href="#">Belgian</a>
                </li>
                <li>
                  <a href="#">Beninese</a>
                </li>
                <li>
                  <a href="#">Brazilian</a>
                </li>
              </ul>
              <div className="text-center">
                <button>Done</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>
);
};

export default AddSauce;
