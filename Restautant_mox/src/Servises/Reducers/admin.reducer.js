import { USERLOGINREJ, USERLOGINREQ, USERLOGINRES, USERLOGOUTREJ, USERLOGOUTREQ, USERLOGOUTRES, USERSIGNINGOOGLEPOPUPREJ, USERSIGNINGOOGLEPOPUPREQ, USERSIGNINGOOGLEPOPUPRES, USERSIGNUPREJ, USERSIGNUPREQ, USERSIGNUPRES } from "../const"

const initialState = {
    isLoading: false,
    user: null,
    error: null,
    isSignUp: false,
    isLogIn: false,
}

export const adminReducer = (state = initialState, action) => {

    switch (action.type) {
        case USERSIGNUPREQ:
            return {
                ...state,
                isLoading: true
            }

        case USERSIGNUPRES:
            return {
                ...state,
                isLoading: false,
                isSignUp: true
            }

        case USERSIGNUPREJ:
            return {
                ...state,
                isLoading: false,
                err: "Not Create User..."
            }

        case USERLOGINREQ:
            return {
                ...state,
                isLoading: true
            }

        case USERLOGINRES:
            return {
                ...state,
                isLoading: false,
                isLogIn: true
            }

        case USERLOGINREJ:
            return {
                ...state,
                isLoading: false,
                err: "Not LogIn User..."
            }

        case USERLOGOUTREQ:
            return {
                ...state,
                isLoading: true
            }

        case USERLOGOUTRES:
            return {
                ...state,
                isLoading: false,
                isLogIn: false
            }

        case USERLOGOUTREJ:
            return {
                ...state,
                err: "Not LogOut User..."
            }

        case USERSIGNINGOOGLEPOPUPREQ:
            return {
                ...state,
                isLoading: true
            }
        case USERSIGNINGOOGLEPOPUPRES:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                isLogIn: true
            }
        case USERSIGNINGOOGLEPOPUPREJ:
            return {
                ...state,
                err: "Goole error"
            }


        default:
            return state;
    }

}
