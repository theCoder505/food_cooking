import { useContext, useState } from "react";
import Layout from "@/components/Layout";
import AppContext from "../context/AppContext";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import MainModal from "@/components/Modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { createSeasoning } from "@/context/recipe/seasoningSlice";
import { useDispatch } from "react-redux";
import { imageUpload } from "@/context/user/userSlice";

const AddSeasoning = () => {
  const router = useRouter();
  const {
    seasoningData,
    setDrink,
    show,
    drink,
    showIng,
    showDir,
    showSources,
    setSeasoningData,
    setShow,
    setShowIng,
    setShowDir,
    setShowSources,
  } = useContext(AppContext);
  // const { setSeasoningData } = contextRest;
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
    setSeasoningData((v) => ({
      ...v,
      [name]: e.target.value,
    }));

    console.log("handleChange ", seasoningData);
  };

  const selectSeosonType = (value) => {
    console.log("select sauce type ", seasoningData);
    if (seasoningData?.["recipe_seasoning_type"]?.includes(value)) {
      setSeasoningData((v) => ({
        ...v,
        ["recipe_seasoning_type"]: v?.recipe_seasoning_type?.filter((d) => d !== value),
      }));
    } else {
      setSeasoningData((v) => ({
        ...v,
        ["recipe_seasoning_type"]: [...v?.recipe_seasoning_type, value],
      }));
    }
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
    setSeasoningData({ ...seasoningData, steps: updatedSteps });
  };

  const handleAddImage = (stepIndex, e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const updatedStepImages = [...stepImages];
      updatedStepImages[stepIndex] = URL.createObjectURL(selectedFile);
      setStepImages(updatedStepImages);

      const updatedSteps = [...drink1.steps];
      updatedSteps[stepIndex].image_url = selectedFile;
      setSeasoningData({ ...seasoningData, steps: updatedSteps });
    }
  };

  const addStep = () => {
    const newStep = { description: '', image_url: null };
    setDrink1({ ...seasoningData, steps: [...drink1.steps, newStep] });
  };
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(userId, "**********");
    if (seasoningData.title == "") {
      // setErrors(true);
      toast.error("title missing...");
    } else if (seasoningData.direction == "") {
      toast.error("direction missing...");
    } else if (seasoningData.ingredients == "") {
      toast.error("ingredients missing...");
    } else if (seasoningData.substitues == "") {
      toast.error("substitues missing...");
    } else if (seasoningData.sources == "") {
      toast.error("sources missing..");
    } else {

      try {
        let updatedMediaUrl = '';

        if (image && image.type.startsWith('image')) {
          const mediaImage = await dispatch(imageUpload({ image: image }));

          if (mediaImage?.data?.status) {
            updatedMediaUrl = `${process.env.NEXT_PUBLIC_AUTH_URL}/${mediaImage?.data?.result?.url}`;
          }
        }

        const stepImages = await Promise.all(seasoningData.steps.map(async (step) => {
          if (step.image_url instanceof File && step.image_url.type.startsWith('image')) {
            const uploadedImage = await dispatch(imageUpload({ image: step.image_url }));
            return uploadedImage?.data?.result?.url ? process.env.NEXT_PUBLIC_AUTH_URL + '/' + uploadedImage.data.result.url : '';
          } else {
            return step.image_url || '';
          }
        }));

        const updatedSteps = stepImages.map((image_url, index) => ({
          description: seasoningData.steps[index].description,
          image_url: image_url,
        }));

        const ingredientsArray = seasoningData.ingredients.split(',').map(ingredient => ({
          title: ingredient.trim(),
          description: ingredient.trim(),
        }));
      // const payload = {
      //   user_id: "1",
      //   title: seasoningData.title,
      //   category_id: "4",
      //   ingredients: seasoningData.ingredients,
      //   substitues: seasoningData.substitues,
      //   about: seasoningData.about,
      //   tag: seasoningData?.tag?.toString(),
      //   notes: seasoningData.notes,
      //   recipe_drink_type: seasoningData?.recipe_drink_type?.toString(),
      //   direction: seasoningData.direction,
      //   media: seasoningData.media,
      //   sources: seasoningData.sources,
      // };
      const formdata = {
        "category_id": "5",
        "title": seasoningData.title,
        "ingredients": ingredientsArray,
        "substitues": seasoningData.substitues,
        "steps": updatedSteps,
        "media":  updatedMediaUrl,
        "sources": seasoningData.sources,
        "notes": seasoningData.notes,
        "tag": seasoningData.tag,
        // "Tools_Equipments_Needed": seasoningData.Tools_Equipments_Needed,
        "about": seasoningData.about,
        "direction": seasoningData.direction,
        // "recipe_seasoning_type": seasoningData?.recipe_drink_type?.toString(),
        "media_type": 'image',
        "recipe_seasoning_type": "text",
        "serves": seasoningData.serves,
        "prep_time": seasoningData.prep_time,
        "cooking_time": seasoningData.cooking_time,
        "difficulity": seasoningData.difficulity
      }

      console.log("formdata---seasoning", formdata)

       dispatch(createSeasoning(formdata))
      } catch (error) {
        console.log(error);
      }
    }
  };
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
      //       // alert("Successfully Save");
      //       toast("Successfully Save");
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
  //   }
  //   console.log("seasoningData", seasoningData);
  // };
  // {{URL}}getrecipe
  // method: post
  // recipe_id:1
  const seasonTypes = [
    "Jerk Season",
    "Curry Season",
    "Table Salt	",
    "Vegetable Season",
    "Meat Season",
    "Spicy Season",
    "Sea Food",
    "Taco Season",
    "Season Sauce",
    "Season Butter",
    "Other",
  ];

  const addButtons = [
    {
      label: "Direction",
      name: "direction",
      show: { showDir },
      onHide: () => setShowDir(false),
      setShow: () => setShowDir(true),
      value: { seasoningData },
      setSeasoningData: { setSeasoningData },
    },
    {
      label: "Ingredients",
      name: "ingredients",
      show: { showIng },
      onHide: () => setShowIng(false),
      setShow: () => setShowIng(true),
      value: { seasoningData },
      setSeasoningData: { setSeasoningData },
    },
  ];

  return (
    <>
      <Layout>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div className="full-page-display  full-page-inner">
          <div className="container">
            <div className="full-page-container">
              <div className="full-adddrink dropdown">
                <h3 className="dropdown-toggle" data-bs-toggle="dropdown">
                  Add Seasoning <img src="images/EdiButton.png" />
                </h3>
                <div className="dropdown-menu dropdown-drink">
                  <strong>Season Type</strong>
                  <span>Season</span>
                  <ul>
                    {seasonTypes.map((v) => {
                      return (
                        <li key={v}>
                          <input type="checkbox" name={v} /> {v}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="text-center">
                    <button data-bs-dismiss="modal">Done</button>
                  </div>
                </div>
              </div>
              <div className="drink-imh">
                <img src="images/seasoningAdd.png" />
              </div>

              <div className="drink-nop">
                <h3>Season Name</h3>
                <div className="d-flex titlename">
                  <h3>Title Name</h3>
                  <input
                    type="text"
                    placeholder="enter title"
                    id="title"
                    name="title"
                    value={seasoningData.title}
                    onChange={(e) => handleChange(e)}
                  />{" "}
                </div>
                <h4 className="dropdown-toggle" data-bs-toggle="dropdown">
                  Category: Liquor Tropical{" "}
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </h4>

                <div className="dropdown-menu dropdown-Liquor">
                  <strong>Season Name</strong>

                  <div className="Country-re">
                    <span> Liquor Tropical</span>
                    <input type="text" name="" />
                  </div>
                  <ul>
                    <li> Liquor Tropical</li>
                    <li> Liquor Tropical</li>
                    <li> Liquor Tropical</li>
                    <li> Liquor Tropical</li>
                    <li> Liquor Tropical</li>
                    <li> Liquor Tropical</li>
                  </ul>
                  <div className="text-center">
                    <button data-bs-dismiss="modal">Done</button>
                  </div>
                </div>
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
                <form onSubmit={(data) => handleSubmit(data)} method="POST">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="Ingredients"
                      role="tabpanel"
                      aria-labelledby="Ingredients-tab"
                    >
                      <div className="mynt">
                        <div className="mynt-ul">
                          <ul>
                            {/* {
                                                            addButtons?.map((v) => {
                                                                console.log(v, "-----------v");
                                                                return (
                                                                    <>
                                                                        <li>
                                                                            <label onClick={() => v.setShow()}>
                                                                                {v.label}
                                                                            </label>
                                                                            <MainModal
                                                                                label={v.label} //{"Direction"}
                                                                                name={v.name}  //{"direction"}
                                                                                show={v.show} //{showDir}
                                                                                onHide={() => v.onHide()} //{() => setShowDir(false)}
                                                                                value={v.value} //{seasoningData}
                                                                                setSeasoningData={v.setSeasoningData} //{setSeasoningData}
                                                                            />
                                                                        </li>
                                                                    </>
                                                                )
                                                            })
                                                        } */}

                            <li>
                              <label onClick={() => setShowDir(true)}>
                                + Add Directions
                              </label>
                              <MainModal
                                label={"Direction"}
                                name={"direction"}
                                show={showDir}
                                onHide={() => setShowDir(false)}
                                value={seasoningData}
                                drink={seasoningData}
                                setDrink={setSeasoningData}
                              />
                            </li>
                            <li>
                              <label onClick={() => setShowIng(true)}>
                                + Add Ingredients
                              </label>
                              <MainModal
                                label={"Ingredients"}
                                name={"ingredients"}
                                show={showIng}
                                onHide={() => setShowIng(false)}
                                value={seasoningData}
                                drink={seasoningData}
                                setDrink={setSeasoningData}
                                onClick={(e) => handleIngredientClick(e)}
                              />
                            </li>
                            <li>
                              {" "}
                              {/* <input
                                type="file"
                                id="myVideo"
                                name="media"
                                value={seasoningData.media}
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
                                label={"substitues"}
                                name={"substitues"}
                                show={show}
                                onHide={() => setShow(false)}
                                value={seasoningData}
                                drink={seasoningData}
                                setDrink={setSeasoningData}
                              />
                            </li>
                            <li>
                              <label onClick={() => setShowSources(true)}>
                                + Add Sources
                              </label>
                              <MainModal
                                label={"Sources"}
                                name={"sources"}
                                show={showSources}
                                onHide={() => setShowSources(false)}
                                value={seasoningData}
                                drink={seasoningData}
                                setDrink={setSeasoningData}
                              />
                            </li>
                            {/* <li> <input type="file" id="mySources" name="sources" value={seasoningData.sources} onChange={(e) => handleChange(e)} /> <label for="mySources">+ Sources <img
                                                            src="images/Debian.png" /></label>
                                                        </li> */}
                            <li>
                              <label
                                for="myDrink"
                                data-bs-toggle="modal"
                                href="#exampleModalToggle"
                              >
                                <small>
                                  <img src="images/MaskGroup-33.png" />
                                </small>{" "}
                                Seasoning Type{" "}
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
                              value={seasoningData.tag}
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
                            value={seasoningData.notes}
                            onChange={(e) => handleChange(e)}
                            placeholder="Notes"
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
                            value={seasoningData.about}
                            onChange={(e) => handleChange(e)}
                            placeholder="About"
                          />
                        </div>
                        <div className="text-center">
                          <button type="submit">Done</button>
                        </div>
                        <div className="text-Done">
                          {/* <!--ul>
                                                <li><span><img src="images/addgrocery.png" /></span> Add individual ingredient to Grocery list</li>
                                                <li><span><img src="images/foodcon.png" /></span> All ingredients in this color (  <small></small>   ) means it is in your Food Storage.</li>
                                                <li><span><img src="images/subicon-2.png" /></span> Ingredients that have a substitute</li>
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
                              value={seasoningData.prep_time}
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
                              value={seasoningData.cooking_time}
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
                              value={seasoningData.serves}
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
                              value={seasoningData.difficulity}
                              onChange={(e) => handleChange(e)}
                            />{" "}
                            {/* <span>Easy</span> */}
                          </div>
                        </li>
                      </ul>
                    </div>
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
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Drink type */}
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
                <h3>SeosonType Type</h3>
                <ul>
                  {seasonTypes.map((v) => {
                    return (
                      <li key={v}>
                        <input
                          type="checkbox"
                          id={v}
                          onChange={() => selectSeosonType(v)}
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

        {/* Cultural modal */}
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

export default AddSeasoning;
