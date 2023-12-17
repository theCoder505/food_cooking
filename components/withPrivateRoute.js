import React from 'react';
import Router from 'next/router';
import { useRouter } from "next/navigation";


const login = '/404'; // Define your login route address.

/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns {{auth: null}}
 */
const checkUserAuthentication = () => {

  if (typeof window !== "undefined") {
    let token = localStorage.getItem("accessToken")
    return { auth: token }; // change null to { isAdmin: true } for test it.
  }

};

export default WrappedComponent => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context) => {
    
    const userAuth =  checkUserAuthentication();
    console.log(context, "auth contect")
    // Are you an authorized user or not?
    if (!userAuth?.auth) {
      router.push({
        pathname: login,
      })
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({ ...context, auth: userAuth });
      return { ...wrappedProps, userAuth };
    }
    else {

      return { userAuth };
    }

  };

  return hocComponent;
};