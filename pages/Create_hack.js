import React, { useContext, useState } from "react";
import Layout from "@/components/Layout";
import AppContext from "@/context/AppContext";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { createFoodhHack } from "@/context/recipe/foodhackSlice";
import { useDispatch } from "react-redux";
import { imageUpload } from "@/context/user/userSlice";

const Create_hack = () => {
  const { setFoodHack, ...contextRest } = useContext(AppContext);
  const { foodHack } = contextRest;
  // let userId;
  // if (typeof window !== "undefined") {
  //   // Perform localStorage action
  //   let item = localStorage.getItem("user");
  //   item = JSON.parse(item);
  //   userId = item.id;
  // }

  const router = useRouter();
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFoodHack((v) => ({
      ...v,
      [name]: value,
    }));

    console.log("handleChange ", foodHack);
  };

  // const handleChangeTag = (value) => {
  //   setFoodHack((v) => ({
  //     ...v,
  //     ["tag"]: value,
  //   }));
  //   console.log("taggggggg", foodHack);
  // };

  const selectHackType = (value) => {
    console.log("select hack type ", foodHack);
    if (recipe?.["recipe_drink_type"]?.includes(value)) {
      setFoodHack((v) => ({
        ...v,
        ["recipe_drink_type"]: v?.recipe_drink_type?.filter((d) => d !== value),
      }));
    } else {
      setFoodHack((v) => ({
        ...v,
        ["recipe_drink_type"]: [...v.recipe_drink_type, value],
      }));
    }
  };
  const fileUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setImagePreview(URL.createObjectURL(i));
      // setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const [hack, setFoodHack1] = useState({
    steps: [{ description: '', image_url: null }]
  });

  const [stepImages, setStepImages] = useState(Array(hack.steps.length).fill(null));

  const handleChangeSteps = (e, stepIndex) => {
    const { value, name } = e.target;
    const updatedSteps = [...hack.steps];
    updatedSteps[stepIndex][name] = value;
    setFoodHack({ ...foodHack, steps: updatedSteps });
  };

  const handleAddImage = (stepIndex, e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const updatedStepImages = [...stepImages];
      updatedStepImages[stepIndex] = URL.createObjectURL(selectedFile);
      setStepImages(updatedStepImages);

      const updatedSteps = [...hack.steps];
      updatedSteps[stepIndex].image_url = selectedFile;
      setFoodHack({ ...foodHack, steps: updatedSteps });
    }
  };

  const addStep = () => {
    const newStep = { description: '', image_url: null };
    setFoodHack1({ ...foodHack, steps: [...hack.steps, newStep] });
  };


  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (foodHack.title == "") {
      // setErrors(true);
      toast.error("title missing...");
    } else if (foodHack.direction == "") {
      toast.error("recipe type missing...");
    } else if (foodHack.ingredients == "") {
      toast.error("ingredients missing...");
    } else if (foodHack.substitues == "") {
      toast.error("substitute missing...");
    } else if (foodHack.sources == "") {
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

        const stepImages = await Promise.all(foodHack.steps.map(async (step) => {
          if (step.image_url instanceof File && step.image_url.type.startsWith('image')) {
            const uploadedImage = await dispatch(imageUpload({ image: step.image_url }));
            return uploadedImage?.data?.result?.url ? process.env.NEXT_PUBLIC_AUTH_URL + '/' + uploadedImage.data.result.url : '';
          } else {
            return step.image_url || '';
          }
        }));

        const updatedSteps = stepImages.map((image_url, index) => ({
          description: foodHack.steps[index].description,
          image_url: image_url,
        }));

        const ingredientsArray = foodHack.ingredients.split(',').map(ingredient => ({
          title: ingredient.trim(),
          description: ingredient.trim(),
        }));
        const formdata = {
          "category_id": "8",
          "title": foodHack.title,
          "ingredients": ingredientsArray,
          "substitues": foodHack.substitues,
          "media": updatedMediaUrl,
          "sources": foodHack.sources,
          "notes": foodHack.notes,
          "tag": foodHack.tag,
          "steps": updatedSteps,
          "serves": foodHack.serves,
          "nutrition": foodHack.nutrition,
          "hack_by": foodHack.hack_by,
          "prep_time": foodHack.prep_time,
          "cooking_time": foodHack.cooking_time,
          "about": foodHack.about,
          "direction": foodHack.direction,
          "difficulity": foodHack.difficulity,
          // "recipe_drink_type": foodHack?.recipe_drink_type?.toString(),
          "recipe_drink_type": "text",
          "media_type": 'image'
        }

        dispatch(createFoodhHack(formdata));
      } catch (error) {
        console.log(error);
      }
    }
  };

  // const formdata = new FormData();
  // formdata.append("user_id", userId);
  // formdata.append("category_id", "8");
  // formdata.append("title", foodHack.title);
  // formdata.append("ingredients", foodHack.ingredients);
  // formdata.append("substitues", foodHack.substitues);
  // formdata.append("media", image);
  // formdata.append("sources", foodHack.sources);
  // formdata.append("notes", foodHack.notes);
  // formdata.append("tag", foodHack.tag.toString());
  // formdata.append("steps", foodHack.steps);
  // formdata.append("serves", foodHack.serves);
  // formdata.append("prep_time", foodHack.prep_time);
  // formdata.append("cooking_time", foodHack.cooking_time);
  // formdata.append("nutrition", foodHack.nutrition);
  // formdata.append("recipe_by", foodHack.recipe_by);
  // formdata.append("about", foodHack.about);
  // formdata.append("direction", foodHack.direction);
  // formdata.append("difficulity", foodHack.difficulity);
  // formdata.append(
  //   "recipe_drink_type",
  //   foodHack?.recipe_drink_type?.toString()
  // ); 

  // try {
  //   const response = await axios
  //     .post(`${process.env.NEXT_PUBLIC_AUTH_URL}/api/recipeRegister`, formdata )
  //     .then((res) => { 
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
  //       return error;
  //     }); 
  // } catch (error) {
  //   console.log("error------------>", error);
  // }


  const foodArr = [
    "Breakfast",
    "Chicken",
    "Lunch",
    "Beef",
    "Dinner",
    "Fish",
    "Kids",
    "Pork",
    "Salad",
    "Sushi",
    "Sandwich",
    "Sides",
    "Pizza",
    "Baked",
    "Tacos",
    "Dessert",
  ];
  const appliancesArr = [
    "Air Fryer",
    "Rice Cooker",
    "Pressure Cooker",
    "Electric Skillet",
    "Waffle Maker",
    "Grill",
    "Toaster Oven",
    "Slowcooker",
    "G.F. Grill",
    "Dehydrator",
    "Ice cream",
    "Microwave",
  ];
  const specialtyArr = [
    "Sick",
    "Holiday",
    "Religious",
    "Diabetic",
    "Rest/Fastfood",
    "Cultural",
    "H.Blood Pres...",
    "Potluck/Cater",
    "Gain Weight",
    "Lose Weight",
    "Lab",
    "Medicinal",
    "Keto",
    "Vegan Cate...",
    "Sports/Athlete",
  ];
  const handleIngredientClick = (e) => {
    const clickedIngredient = e.target.innerText;
    const currentIngredients = foodHack.ingredients || '';
    const ingredientsArray = currentIngredients.split(', ');

    const index = ingredientsArray.indexOf(clickedIngredient);

    if (index !== -1) {
      ingredientsArray.splice(index, 1);
    } else {
      ingredientsArray.push(clickedIngredient);
    }

    const newIngredients = ingredientsArray.filter(Boolean).join(', '); // Filter out empty strings

    setFoodHack({ ...foodHack, ingredients: newIngredients });
  };

  return (
    <Layout>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div className="main_width">
        <div className="container-fluid">
          <div className="Barista-nav">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Explore</a>
              </li>
              <li>
                <a href="">Help</a>
              </li>
              <li>
                <a href="">Profile</a>
              </li>
            </ul>
          </div>

          <div className="Createhack">
            <h3>Create Hack</h3>
            <h2>Remove shell from hard boiled egg</h2>
          </div>
          <div className="Createimage1">
            <img src="images/image1.png" />

            <div className="Cocktail_cate">
              <small>Video /Picture only </small>
              <div className="Cocktail_check">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
              <small> </small>
            </div>
          </div>

          <div className="Createihack">
            <div className="Createihackname">
              <div className="haclinput">
                <label>Hack By:</label>{" "}
                <input
                  type="text"
                  name="recipe_by"
                  value={foodHack.recipe_by}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="haclinput">
                <label>sources:</label>{" "}
                <input
                  type="text"
                  name="sources"
                  value={foodHack.sources}
                  onChange={(e) => handleChange(e)}
                // value={foodHack.sources}
                // onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="CreatRecipe dropdown">
              <span>
                Recipe Info: <img src="images/Help.png" />
              </span>
              <strong className="dropdown-toggle" data-bs-toggle="dropdown">
                <img src="images/MaskGroup-6.png" /> Recipe Type
              </strong>
              <div className="dropdown-menu dropdown-menu-Recipe dropdown-menu-lg-end">
                <strong>Recipe Type</strong>
                <span>Food</span>

                <ul>
                  {foodArr.map((v) => {
                    return (
                      <li key={v}>
                        <input
                          type="checkbox"
                          id={v}
                          onChange={() => selectHackType(v)}
                        />{" "}
                        <label for={v}>{v}</label>
                      </li>
                    );
                  })}
                </ul>
                <span>Appliances</span>
                <ul>
                  {appliancesArr.map((v) => {
                    return (
                      <li key={v}>
                        <input
                          type="checkbox"
                          id={v}
                          onChange={() => selectHackType(v)}
                        />{" "}
                        <label for={v}>{v}</label>
                      </li>
                    );
                  })}
                </ul>
                <span>Specialty</span>
                <ul>
                  {specialtyArr.map((v) => {
                    return (
                      <li key={v}>
                        <input
                          type="checkbox"
                          id={v}
                          onChange={() => selectHackType(v)}
                        />{" "}
                        <label for={v}>{v}</label>
                      </li>
                    );
                  })}
                </ul>
                {/*  */}
                <div className="text-center">
                  {/* <button data-bs-dismiss="modal">Done</button> */}
                  <button type="button" data-bs-dismiss="modal">
                    Done
                  </button>
                </div>
                <div className="comts-center">
                  <div className="Irecipe">
                    If recipe type is not under food type it under Tag
                  </div>

                  <div className="rong">
                    <small>Conventional =/= Non-Conventional </small>
                    <div className="Cocktail_check">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form method="POST" onSubmit={(data) => handleSubmit(data)}>
            <div className="Ingredientshack">
              <div className="ngrinput">
                <label>Title</label>

                <input
                  name="title"
                  value={foodHack.title}
                  onChange={(e) => handleChange(e)}
                  placeholder="Write Ingredients here..........."
                />
              </div>
            </div>
            <div className="Ingredientshack">
              <div className="ngrinput  position-relative">
                <label>Ingredients</label>

                <input
                  name="ingredients"
                  value={foodHack.ingredients}
                  onChange={(e) => handleChange(e)}
                  placeholder="Write Ingredients here..........."
                />
                <div className="side-btn">
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
                              <li style={{ border: "1px solid dark", backgroundColor: "#222B4552" }} onClick={(e) => handleIngredientClick(e)}>Pot</li>
                              <li onClick={(e) => handleIngredientClick(e)}>Pot</li>
                              <li onClick={(e) => handleIngredientClick(e)}>Blender</li>
                              <li onClick={(e) => handleIngredientClick(e)}>Ladle</li>
                              <li onClick={(e) => handleIngredientClick(e)}>Can Opener</li>
                              <li onClick={(e) => handleIngredientClick(e)}>Spatula</li>
                              <li onClick={(e) => handleIngredientClick(e)}>Oven Mitts</li>
                              <li onClick={(e) => handleIngredientClick(e)}>Cutting Board</li>
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
            </div>
            <div className="Ingredientshack">
              <div className="ngrinput">
                <label>Steps</label>
                {hack.steps.map((step, stepIndex) => (
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
                            right: '580px',
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
            <div className="Ingredientshack">
              <div className="ngrinput">
                <label>
                  Substitues <img src="images/Replace.png" />
                </label>
                <input
                  name="substitues"
                  value={foodHack.substitues}
                  onChange={(e) => handleChange(e)}
                  placeholder="exp: Rice = Quinoa"
                />
              </div>
            </div>
            <div className="Ingredientshack">
              <div className="ngrinput">
                <label>About</label>{" "}
                <input
                  name="about"
                  value={foodHack.about}
                  onChange={(e) => handleChange(e)}
                  placeholder="About"
                />
              </div>
            </div>
            <div className="Ingredientshack">
              <div className="ngrinput">
                <label>Nutrition</label>
                <input
                  name="nutrition"
                  value={foodHack.nutrition}
                  onChange={(e) => handleChange(e)}
                  placeholder="Calories if you know can fill out if not system will auto fill."
                />
              </div>
            </div>
            {/* <div className="Ingredientshack">
              <div className="ngrinput">
                <label>Tag </label>
                <input name='tag' value={foodHack.tag} onChange={(e) => handleChange(e)} placeholder="exp: Chicken , mild, healthy, etc" />
              </div>
            </div> */}
            <div className="Ingredientshack">
              <div className="ngrinput taginput-recipe">
                <label>Tag</label>
                <textarea
                  name="tag"
                  value={foodHack.tag}
                  onChange={(e) => handleChange(e)}
                  placeholder="exp: healthy , detox , gluten free, etc"
                  className="tag-box react-tagsinput"
                />
                {/* <input name='tag' value={recipe.tag} onChange={(e) => handleChange(e)} placeholder="exp: Chicken , mild, healthy, etc" /> */}
              </div>
            </div>

            {/* <div className="mynt-Tag">
              <strong>Tag</strong>
              <TagsInput
                inputProps={{ placeholder: '"exp: healthy , detox , gluten free, etc"', name: "tag" }}
                className='tag-box react-tagsinput'
                maxTags={20}
                value={foodHack?.tag ? foodHack?.tag : []}
                onChange={handleChangeTag} />
            </div> */}
            <div className="Ingredientshack">
              <div className="ngrinput taginput-recipe position-relative">
                <label>Tools & Equipments Needed</label>
                <TagsInput
                  inputProps={{
                    placeholder: '"exp: blander , pot , pan..."',
                    name: "equipment",
                  }}
                  className="tag-box react-tagsinput"
                  maxTags={20}
                  value={[]}
                // onChange={handleChangeTag}
                />
                <div className="side-btn" style={{ top: "40px" }}>
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
                {/* <input name='tag' value={recipe.tag} onChange={(e) => handleChange(e)} placeholder="exp: Chicken , mild, healthy, etc" /> */}
              </div>

            </div>
            <div className="Ingredientshack">
              <div className="ngrinput">
                <label>Notes</label>{" "}
                <input
                  name="notes"
                  value={foodHack.notes}
                  onChange={(e) => handleChange(e)}
                  placeholder="Notes"
                />
              </div>
            </div>
            <div className="Ingredientshack">
              <div className="Videoif">
                {
                  imagePreview &&
                  <img
                    src={imagePreview}
                    alt={`image`}
                    style={{
                      cursor: 'pointer',
                      maxWidth: '100px',
                      maxHeight: '100px',
                      marginBottom: '20px',
                      objectFit: 'contain',
                      borderRadius: '8px'
                    }}
                  />
                }
                <h4>Upload Video/Pic</h4>
                <input
                  type="file"
                  name="media"
                  // value={recipe.media}
                  onChange={(e) => fileUpload(e)}
                  id="filot"
                />
                <label for="filot">Upload</label>
              </div>

              <ul>
                <li>
                  <span>Prep time</span>
                  <div className="inputfeild-time">
                    {" "}
                    <input
                      name="prep_time"
                      value={foodHack.prep_time}
                      onChange={(e) => handleChange(e)}
                      // placeholder="Notes"
                      type="number"
                      // className="inputfeild-time"
                      placeholder="Time"
                    // value=""
                    />
                    <span>mins</span>
                  </div>
                  {/* <strong>25 mins</strong> */}
                </li>
                <li>
                  <span>Cooking time</span>
                  <div className="inputfeild-time">
                    <input
                      name="cooking_time"
                      type="number"
                      value={foodHack.cooking_time}
                      onChange={(e) => handleChange(e)}
                      // className="inputfeild-time"
                      placeholder="Time"
                    // value=""
                    />
                    <span>mins</span>
                  </div>
                  {/* <strong>25 mins</strong> */}
                </li>
                <li>
                  <span>Serves</span>
                  {/* <strong>2</strong> */}
                  <div className="inputfeild-time">
                    <input
                      type="text"
                      name="serves"
                      value={foodHack.serves}
                      onChange={(e) => handleChange(e)}
                      // className="inputfeild-time"
                      placeholder="Enter"
                    // value=""
                    />
                  </div>
                </li>
                <li>
                  <span>Difficulity</span>
                  <div className="inputfeild-time">
                    <input
                      type="text"
                      name="difficulity"
                      placeholder="Easy"
                      value={foodHack.difficulity}
                      onChange={(e) => handleChange(e)}
                    />{" "}
                  </div>
                  {/* <strong>Easy</strong> */}
                </li>
              </ul>
            </div>
            <div className="IngreSubmit">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Create_hack;
