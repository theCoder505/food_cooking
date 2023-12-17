import { register } from "@/context/Auth/authSlice";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // const handleSignUp = async (e) => {
  //   console.log(e, "----------handleSignUp");
  //   const payload = {
  //     username: email,
  //     password: password,
  //     user_type: "1",
  //     signup_by: "1",
  //   };
  //   e.preventDefault();
  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_AUTH_URL}/api/userRegister`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(payload),
  //     }
  //   )
  //     .then((res) => {
  //       console.log(res, "------res");
  //       return res.json();
  //     })
  //     .then((result) => {
  //       if (result.status === false) {
  //         toast.error(result.message);
  //       } else {
  //         toast(result.message);
  //         if (result.status === true) {
  //           console.log(result, "222222");
  //           localStorage.setItem("accessToken", result?.data?.accessToken);
  //           localStorage.setItem("user", JSON.stringify(result?.data));
  //           router.push("/home");
  //         }
  //         console.log(result, "------else result");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       toast.error("The password field is required");
  //     });

  //   // const data = await res.json();
  //   // const { accessToken } = data;
  //   // localStorage.setItem("data", JSON.stringify(data));
  //   // localStorage.setItem("accessToken", accessToken);
  //   // console.log(data, "--------------data");
  //   // toast("Singup Successfully");
  // };

  const dispatch = useDispatch();
  
  const handleSignUp = async (e) => {
    const payload = {
      username: email,
      password: password,
    };
    e.preventDefault();

    const res = await dispatch(register(payload))

    if(res?.data?.status){
      toast("Sign Up Successfully")
    } else {
      toast("user not register ...")
    }
    
    // const res = await fetch(
    //   `${process.env.NEXT_PUBLIC_AUTH_URL}/api/userRegister`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(payload),
    //   }
    // );

    // const data = await res.json();
    // const { accessToken } = data;
    // localStorage.setItem("data", JSON.stringify(data));
    // localStorage.setItem("accessToken", accessToken);
    // toast("Singup Successfully");
  };

  return (
    <>
      <ToastContainer />
    
        <div className="login-box">
          <div className="login-box-input">
            <label className="pb-1">Email/Username</label>
            <div className="login-box-input_box">
              <span>
                <img src="images/email.png" />
              </span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="login-box-input">
            <label className="pb-1">Password</label>
            <div className="login-box-input_box">
              <span className="lock">
                <img src="images/password.png" />
              </span>
              <input
                type="password"
                name="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="login-box-submit">
            <button onClick={handleSignUp} data-bs-dismiss="modal">
              Join
            </button>
            <small>OR</small>
            <span>
              <img src="images/border.png" />{" "}
            </span>

            <p>
              By continuing, you agree to our
              <a href="">Terms of use</a>,<a href="">Terms of Service</a>, and
              <a href="">Privacy Policy</a>.
            </p>
          </div>
          <div className="login-social-button">
            <div className="social-button social-button-fb">
              <a href="">
                <span>
                  <img src="images/fb.png" />
                </span>{" "}
                Connect with Facebook
              </a>
            </div>
            <div className="social-button social-button-google">
              <a href="">
                <span>
                  <img src="images/google.png" />
                </span>
                Connect with Google
              </a>
            </div>
            <div className="social-button social-button-apple">
              <a href="">
                <span>
                  <img src="images/apple.png" />{" "}
                </span>
                Connect with Apple
              </a>
            </div>
          </div>
        </div>
    </>
  );
};

export default SignUp;
