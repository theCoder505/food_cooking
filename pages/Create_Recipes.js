import React, { useContext, useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import AppContext from "../context/AppContext";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createRecipe, createRecipeNew } from "@/context/recipe/recipeSlice";
import { imageUpload } from "@/context/user/userSlice";
const Create_Recipes = () => {
  const router = useRouter();
  const { setRecipe, ...contextRest } = useContext(AppContext);
  const { recipe } = contextRest;
  // let userId;
  // if (typeof window !== "undefined") {
  //   // Perform localStorage action
  //   let item = localStorage.getItem("user");
  //   item = JSON.parse(item);
  //   userId = item.id;
  // }
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setRecipe((v) => ({
      ...v,
      [name]: value,
    }));
  };

  const selectRecipeType = (value) => {
    if (recipe?.["recipe_drink_type"]?.includes(value)) {
      setRecipe((v) => ({
        ...v,
        ["recipe_drink_type"]: v?.recipe_drink_type?.filter((d) => d !== value),
      }));
    } else {
      setRecipe((v) => ({
        ...v,
        ["recipe_drink_type"]: [...v?.recipe_drink_type, value],
      }));
    }
  };
  const handleChangeTag = (value) => {
    setRecipe((v) => ({
      ...v,
      "tag": value,
    }));
  };
  const fileUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setImagePreview(URL.createObjectURL(i));
      // setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const [recipe1, setRecipe1] = useState({
    steps: [{ description: '', image_url: null }]
  });

  const [stepImages, setStepImages] = useState(Array(recipe1.steps.length).fill(null));

  const handleChangeSteps = (e, stepIndex) => {
    const { value, name } = e.target;
    const updatedSteps = [...recipe1.steps];
    updatedSteps[stepIndex][name] = value;
    setRecipe({ ...recipe, steps: updatedSteps });
  };

  const handleAddImage = (stepIndex, e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const updatedStepImages = [...stepImages];
      updatedStepImages[stepIndex] = URL.createObjectURL(selectedFile);
      setStepImages(updatedStepImages);

      const updatedSteps = [...recipe1.steps];
      updatedSteps[stepIndex].image_url = selectedFile;
      setRecipe({ ...recipe, steps: updatedSteps });
    }
  };

  const addStep = () => {
    const newStep = { description: '', image_url: null };
    setRecipe1({ ...recipe, steps: [...recipe1.steps, newStep] });
  };
  const dispatch = useDispatch();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // if (recipe.title == "") {
  //   //   toast.error("title missing...");
  //   // } else if (recipe.direction == "") {
  //   //   toast.error("direction missing...");
  //   // } else if (recipe.ingredients == "") {
  //   //   toast.error("ingredients missing...");
  //   // } else if (recipe.recipe_drink_type == "") {
  //   //   toast.error("Drink type missing...");
  //   // } else if (recipe.substitues == "") {
  //   //   toast.error("substitute missing...");
  //   // } else if (recipe.sources == "") {
  //   //   toast.error("sources missing..");
  //   // } else {
  //   // const payload = {
  //   //   user_id: "1",
  //   //   category_id: "1",
  //   //   title: recipe.title,
  //   //   ingredients: recipe.ingredients,
  //   //   substitues: recipe.substitues,
  //   //   about: recipe.about,
  //   //   tag: recipe.tag.toString(),
  //   //   notes: recipe.notes,
  //   //   steps: recipe.steps,
  //   //   serves: recipe.serves,
  //   //   prep_time: recipe.prep_time,
  //   //   cooking_time: recipe.cooking_time,
  //   //   recipe_recipe_type: recipe?.recipe_recipe_type?.toString(),
  //   //   direction: recipe.direction,
  //   //   sources: recipe.sources,
  //   //   difficulity: recipe.difficulity,
  //   // };
  //   const formdata = {
  //     // formdata.append("user_id", userId);
  //     "category_id": "1",
  //     "title": recipe.title,
  //     "ingredients": recipe.ingredients,
  //     "substitues": recipe.substitues,
  //     "media": image,
  //     "sources": recipe.sources,
  //     "notes": recipe.notes,
  //     "tag": recipe.tag,
  //     "steps": recipe.steps,
  //     "serves": recipe.serves,
  //     "nutrition": recipe.nutrition,
  //     "recipe_by": recipe.recipe_by,
  //     "prep_time": recipe.prep_time,
  //     "cooking_time": recipe.cooking_time,
  //     "about": recipe.about,
  //     "direction": recipe.direction,
  //     "difficulity": recipe.difficulity,
  //     "recipe_drink_type": recipe?.recipe_drink_type?.toString(),
  //     "media_type": 'image'
  //   }
  //   console.log(recipe, "recipe.title")
  //   console.log(formdata, "formdata")


  //   // await dispatch(createRecipe(formdata))

  //   //   const response = await axios
  //   //     .post(`${process.env.NEXT_PUBLIC_AUTH_URL}/api/recipeRegister`, formdata)
  //   //     .then((res) => {
  //   //       // alert("Successfully Save");
  //   //       toast("Successfully Save");
  //   //       console.log("res : ", res.data.message);
  //   //       // redirectHome();
  //   //       // setTimeout(() => {
  //   //       setTimeout(() => {
  //   //         router.push({
  //   //           pathname: "/Recipe2/[id]",
  //   //           query: { id: res.data.recipe_id },
  //   //         });
  //   //       }, 3000);
  //   //       return res;
  //   //     })
  //   //     .catch((error) => {
  //   //       console.log("error-----", error);
  //   //       return error;
  //   //     });
  //   //   console.log("response------------->", response);
  //   // } catch (error) {
  //   //   console.log("error------------>", error);
  //   // }
  //   // }
  //   // console.log("eeeeeeeee------>", e);
  //   // console.log("recipe----------->", recipe);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (recipe.title == "") {
      toast.error("title missing...");
    } else if (recipe.direction == "") {
      toast.error("direction missing...");
    } else if (recipe.ingredients == "") {
      toast.error("ingredients missing...");
    } else if (recipe.substitues == "") {
      toast.error("substitute missing...");
    } else if (recipe.sources == "") {
      toast.error("sources missing..");
    } else {
      // const payload = {
      //   user_id: "1",
      //   category_id: "1",
      //   title: recipe.title,
      //   ingredients: recipe.ingredients,
      //   substitues: recipe.substitues,
      //   about: recipe.about,
      //   tag: recipe.tag.toString(),
      //   notes: recipe.notes,
      //   steps: recipe.steps,
      //   serves: recipe.serves,
      //   prep_time: recipe.prep_time,
      //   cooking_time: recipe.cooking_time,
      //   recipe_recipe_type: recipe?.recipe_recipe_type?.toString(),
      //   direction: recipe.direction,
      //   sources: recipe.sources,
      //   difficulity: recipe.difficulity,
      // };
      try {
        let updatedMediaUrl = '';

        if (image && image.type.startsWith('image')) {
          const mediaImage = await dispatch(imageUpload({ image: image }));

          if (mediaImage?.data?.status) {
            updatedMediaUrl = `${process.env.NEXT_PUBLIC_AUTH_URL}/${mediaImage?.data?.result?.url}`;
          }
        }

        const stepImages = await Promise.all(recipe.steps.map(async (step) => {
          if (step.image_url instanceof File && step.image_url.type.startsWith('image')) {
            const uploadedImage = await dispatch(imageUpload({ image: step.image_url }));
            return uploadedImage?.data?.result?.url ? process.env.NEXT_PUBLIC_AUTH_URL + '/' + uploadedImage.data.result.url : '';
          } else {
            return step.image_url || '';
          }
        }));

        const updatedSteps = stepImages.map((image_url, index) => ({
          description: recipe.steps[index].description,
          image_url: image_url,
        }));

        const ingredientsArray = recipe.ingredients.split(',').map(ingredient => ({
          title: ingredient.trim(),
          description: ingredient.trim(),
        }));

        const formdata = {
          "category_id": "1",
          "title": recipe.title,
          "ingredients": ingredientsArray,
          "substitues": recipe.substitues,
          "media": updatedMediaUrl,
          "sources": recipe.sources,
          "notes": recipe.notes,
          "tag": recipe.tag,
          "steps": updatedSteps,
          "serves": recipe.serves,
          "nutrition": recipe.nutrition,
          "recipe_by": recipe.recipe_by,
          "prep_time": recipe.prep_time,
          "cooking_time": recipe.cooking_time,
          "about": recipe.about,
          "direction": recipe.direction,
          "difficulity": recipe.difficulity,
          // "recipe_drink_type": recipe?.recipe_drink_type?.toString(),
          "recipe_drink_type": "test",
          "media_type": 'image'
        }

        dispatch(createRecipeNew(formdata));
      } catch (error) {
        console.error(error);
      }
    }
  };

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
  ];
  const appliancesArr = [
    "Energy Drinks",
    "Smoothies",
    "Juice",
    "Energy Drinks",
    "Other",
  ];

  const handleIngredientClick = (e) => {
    const clickedIngredient = e.target.innerText;
    const currentIngredients = recipe.ingredients || '';
    const ingredientsArray = currentIngredients.split(', ');

    const index = ingredientsArray.indexOf(clickedIngredient);

    if (index !== -1) {
      ingredientsArray.splice(index, 1);
    } else {
      ingredientsArray.push(clickedIngredient);
    }

    const newIngredients = ingredientsArray.filter(Boolean).join(', '); // Filter out empty strings

    setRecipe({ ...recipe, ingredients: newIngredients });
  };



  return (
    <Layout>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div className="main_width">
        <div className="container-fluid">
          <div className="Barista-nav">
            <ul>
              <li>
                <Link href="/AccLandingPage">Home</Link>
              </li>
              <li>
                <Link href="#">Explore</Link>
              </li>
              <li>
                <Link href="#">Help</Link>
              </li>
              <li>
                <Link href="/Profile">Profile</Link>
              </li>
            </ul>
          </div>

          <div className="Createhack">
            <h3>Create Recipes</h3>
          </div>
          <div className="Createimage1">
            <img src="images/gUU4MF87Ipw.png" />
          </div>
          <div className="mhotscale">
            <img src="images/hotscale.png" />
          </div>
          <form
            method="POST"
            onSubmit={(data) => handleSubmit(data)}
          // enctype="multipart/form-data"
          >
            <div className="Createihack">
              <div className="Createihackname">
                <div className="haclinput">
                  <label>Recipe By:</label>{" "}
                  <input
                    type="text"
                    name="recipe_by"
                    value={recipe.recipe_by}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="haclinput">
                  <label>sources:</label>{" "}
                  <input
                    type="text"
                    name="sources"
                    value={recipe.sources}
                    onChange={(e) => handleChange(e)}
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
                <div className="dropdown-menu dropdown-menu-Recipe">
                  <strong>Recipe Type</strong>
                  <span>Food</span>

                  <ul>
                    {foodArr.map((v) => {
                      return (
                        <li key={v}>
                          <input
                            type="checkbox"
                            id={v}
                            onChange={() => selectRecipeType(v)}
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
                            onChange={() => selectRecipeType(v)}
                          />{" "}
                          <label for={v}>{v}</label>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="text-center">
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
                <div className="d-flex justify-content-end ">
                  <div class="form-check radio-btn">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Conventional
                    </label>
                  </div>
                  <div class="form-check ms-3 radio-btn">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Non Conventional
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="Ingredientshack">
              <div className="ngrinput">
                <label>title</label>{" "}
                <input
                  name="title"
                  value={recipe.title}
                  onChange={(e) => handleChange(e)}
                  placeholder="title"
                />
              </div>
            </div>
            <div className="Ingredientshack">
              <div className="ngrinput position-relative">
                <label>Ingredients</label>
                <input
                  name="ingredients"
                  value={recipe.ingredients}
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
            {/* <div className="Ingredientshack">
      <div className="ngrinput">
        <label>Steps</label>
        <div style={{ position: 'relative' }}>
          <textarea
            name="steps"
            value={recipe.steps}
            // onChange={(e) => handleChange(e)}
            onChange={(e) => fileUpload(e)}
            placeholder="Write Steps here..........."
            id="step"
          /> */}
            {/* <label for="step"  style={{ */}
            {/* // position: 'absolute', */}
            {/* // top: '15px', // Adjust the positioning as needed */}
            {/* // right: '580px', // Adjust the positioning as needed */}
            {/* // }}><i class="fa-solid fa-image"></i></label> */}

            {/* <buttonon
            onClick={fileUpload}
            style={{
              position: 'absolute',
              top: '15px', // Adjust the positioning as needed
              right: '580px', // Adjust the positioning as needed
            }}
          >
           <i class="fa-solid fa-image"></i>
          </buttonon> */}
            {/* </div>
      </div>
    </div> */}
            <div className="Ingredientshack">
              <div className="ngrinput">
                <label>Steps</label>
                {recipe1.steps.map((step, stepIndex) => (
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
                <textarea
                  name="substitues"
                  value={recipe.substitues}
                  onChange={(e) => handleChange(e)}
                  placeholder="exp: Rice = Quinoa"
                />
              </div>
            </div>
            <div className="Ingredientshack">
              <div className="ngrinput">
                <label>About</label>{" "}
                <textarea
                  name="about"
                  value={recipe.about}
                  onChange={(e) => handleChange(e)}
                  placeholder="About"
                />
              </div>
            </div>
            <div className="Ingredientshack">
              <div className="ngrinput">
                <label>Nutrition</label>
                <textarea
                  name="nutrition"
                  value={recipe.nutrition}
                  onChange={(e) => handleChange(e)}
                  placeholder="Calories if you know can fill out if not system will auto fill."
                />
              </div>
            </div>
            <div className="Ingredientshack">
              <div className="ngrinput taginput-recipe">
                <label>Tag</label>
                <textarea
                  name="tag"
                  value={recipe.tag}
                  onChange={(e) => handleChange(e)}
                  placeholder="exp: healthy , detox , gluten free, etc"
                  className="tag-box react-tagsinput"
                />
                {/* <input name='tag' value={recipe.tag} onChange={(e) => handleChange(e)} placeholder="exp: Chicken , mild, healthy, etc" /> */}
              </div>
            </div>
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
                <textarea
                  name="notes"
                  value={recipe.notes}
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
                  {/* <strong>25 mins</strong> */}
                  <div className="inputfeild-time">
                    {" "}
                    <input
                      name="prep_time"
                      value={recipe.prep_time}
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
                      value={recipe.cooking_time}
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
                      value={recipe.serves}
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
                      value={recipe.difficulity}
                      onChange={(e) => handleChange(e)}
                    />{" "}
                    {/* <span>Easy</span> */}
                  </div>
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

export default Create_Recipes;
