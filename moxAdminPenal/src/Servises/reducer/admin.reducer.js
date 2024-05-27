import { USERLOGINREJ, USERLOGINREQ, USERLOGINRES, USERLOGOUTREJ, USERLOGOUTREQ, USERLOGOUTRES, USERSIGNINGOOGLEPOPUPREJ, USERSIGNINGOOGLEPOPUPREQ, USERSIGNINGOOGLEPOPUPRES } from "../const"

const initialState = {
    isLoading: false,
    user:null,
    error: null,
    isSignUp: false,
    isLogIn: false,
}

export const adminReducer = (state = initialState, action) => {

    switch (action.type) {

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
