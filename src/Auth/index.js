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
}