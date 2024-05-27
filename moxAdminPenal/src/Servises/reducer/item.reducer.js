import { CREATELOGINREQ, DELETEDATAREJ, DELETEDATAREQ, PRODUCTREJ, PRODUCTREQ, PRODUCTSUC, SINGLEDATAREJ, SINGLEDATAREQ, SINGLEDATARES, UPDATEREJ, UPDATEREQ, UPDATERES } from "../const"


const initialState = {
    items: [],
    item: null,
    isLoding: false,
    err: null
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

        case UPDATEREQ:
            return {
                ...state,
                isLoading: true,
            }

        case UPDATERES:
            return {
                ...state,
                isLoading: false,
                items: action.payload,
                error: null
            }

        case UPDATEREJ:
            return {
                ...state,
                isLoading: false,
                error: "edit data not found..."
            }

        case DELETEDATAREQ:
            return {
                ...state,
                isLoading: true
            }

        case DELETEDATAREJ:
            return {
                ...state,
                isLoading: false,
                error: "Delet data..."
            }



        default:
            return state;
    }
}