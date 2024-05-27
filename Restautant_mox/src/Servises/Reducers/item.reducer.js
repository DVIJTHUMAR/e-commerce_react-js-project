import { ADD_TO_CART, CREATELOGINREJ, CREATELOGINREQ, GETLOGINUSERDATAREJ, GETLOGINUSERDATAREQ, GETLOGINUSERDATARES, PRODUCTREJ, PRODUCTREQ, PRODUCTSUC, SINGLEDATAREJ, SINGLEDATAREQ, SINGLEDATARES } from "../const"


const initialState = {
    items: [],
    user: null,
    item: null,
    isLoding: false,
    err: null,
    cart: []
}

export const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTREQ:
            return {
                ...state,
                isLoading: true
            };
        case PRODUCTSUC:
            return {
                ...state,
                items: action.payload,
                isLoading: false
            }
        case PRODUCTREJ:
            return {
                ...state,
                isLoading: false
            }


        case SINGLEDATAREQ:
            return {
                ...state,
                isloading: true,
            }

        case SINGLEDATARES:
            return {
                ...state,
                isloading: false,
                item: action.payload,
                error: null,
            }

        case SINGLEDATAREJ:
            return {
                ...state,
                isloading: false,
                error: "Error..."
            }

        case CREATELOGINREQ:
            return {
                ...state,
                isLoading: true
            }

        case CREATELOGINREJ:
            return {
                ...state,
                isLoading: false,
                err: "create login not show"
            }

        case GETLOGINUSERDATAREQ:
            return {
                ...state,
                isLoading: true
            }

        case GETLOGINUSERDATARES:
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }

        case GETLOGINUSERDATAREJ:
            return {
                ...state,
                err: "data get login firebase not found"
            }

        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };


        default:
            return state;
    }
}