import { auth, provider } from "../../sdkFireBaseData/sdkFireBaseData";
import {  USERLOGINREJ, USERLOGINREQ, USERLOGINRES, USERLOGOUTREJ, USERLOGOUTREQ, USERLOGOUTRES, USERSIGNINGOOGLEPOPUPREJ, USERSIGNINGOOGLEPOPUPREQ, USERSIGNINGOOGLEPOPUPRES } from "../const";
import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";



export const userLogInReq = () => {
    return {
        type: USERLOGINREQ
    }
}

export const userLogInRes = () => {
    return {
        type: USERLOGINRES
    }
}

export const userLogInRej = () => {
    return {
        type: USERLOGINREJ
    }
}


export const userLogOutReq = () => {
    return {
        type: USERLOGOUTREQ
    }
}

export const userLogOutRes = () => {
    return {
        type: USERLOGOUTRES
    }
}

export const userLogOutRej = () => {
    return {
        type: USERLOGOUTREJ
    }
}


export const userSignInGooglePopUpReq = () => {
    return {
        type: USERSIGNINGOOGLEPOPUPREQ
    }
}

export const userSignInGooglePopUpRes = (data) => {
    return {
        type: USERSIGNINGOOGLEPOPUPRES,
        payload: data
    }
}

export const userSignInGooglePopUpRej = () => {
    return {
        type: USERSIGNINGOOGLEPOPUPREJ
    }
}



export const logInUser = (email, password) => {
    return async dispatch => {
        dispatch(userLogInReq());

        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // LogIn
                const user = userCredential.user;

                dispatch(userLogInRes(user));
            })
            .catch((err) => {
                console.log("User Not LogIn", err);

                dispatch(userLogInRej(err));
            });


    }
}

export const userLogOut = () => {
    return async dispatch => {
        dispatch(userLogOutReq());

        await signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(userLogOutRes());
        }).catch((error) => {
            // An error happened.
            console.log('Error in User Log Out', error);

            dispatch(userLogOutRej(error));

        });

    }
}

export const userSignInGooglePopUp = () => {
    return async dispatch => {
        dispatch(userSignInGooglePopUpReq());

        await signInWithPopup(auth, provider).then((res) => {


            const gmailprofile = {
                name: res.user.displayName,
                email: res.user.email,
                profilePic: res.user.photoURL
            }

            dispatch(userSignInGooglePopUpRes(gmailprofile));
            console.log(gmailprofile);
        }).catch((err) => {
            console.log("err", err);

            dispatch(userSignInGooglePopUpRej(err));
        })

    }
}