// import { API } from "../config";

// User SignUp
export const signUp = (user) => {
    return fetch(`http://localhost:4000/api/signup`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(user),
        })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            return err;
        });
};


// User SignIn
export const signIn = (user) => {
    return fetch(`http://localhost:4000/api/signin`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(user),
        })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            return err;
        });
};


// Save JWT to User Local Storage
export const authenticate = (data, next) =>{
    if(typeof window !== undefined){ //Checking if we can Access the Window Object. If not Undefined then the Window object is Available
        localStorage.setItem("jwt", JSON.stringify(data));
    }
    next();
};


// Check if the user is Authenticated then Return True or False
export const isAuthenticate = () => {
    if(typeof window == undefined){
        return false;
    }

    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt")); // This will return the JWT Object with User Information
    }
    else {
        return false;
    }
};