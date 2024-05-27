
import { db } from "../../sdkFireBaseData/sdkFireBaseData";
import { ADD_TO_CART, CREATELOGINREJ, CREATELOGINREQ, GETLOGINUSERDATAREJ, GETLOGINUSERDATAREQ, GETLOGINUSERDATARES, PRODUCTREJ, PRODUCTREQ, PRODUCTSUC, SINGLEDATAREJ, SINGLEDATAREQ, SINGLEDATARES } from "../const"
import { addDoc, getDocs, collection, getDoc, doc } from "firebase/firestore"


export const productReq = () => {
    return {
        type: PRODUCTREQ
    }
};

export const productSuc = (data) => {
    return {
        type: PRODUCTSUC,
        payload: data
    }
};

export const productRej = () => {
    return {
        type: PRODUCTREJ
    }
};


export const singleDataReq = () => {
    return {
        type: SINGLEDATAREQ
    }
};

export const singleDataRes = (data) => {
    return {
        type: SINGLEDATARES,
        payload: data
    }
};

export const singleDataRej = () => {
    return {
        type: SINGLEDATAREJ
    }
};



export const createLoginReq = () => {
    return {
        type: CREATELOGINREQ
    }
}

export const createLoginRej = () => {
    return {
        type: CREATELOGINREJ
    }
}

export const getLoginUserDataReq = () => {
    return {
        type: GETLOGINUSERDATAREQ
    }
}

export const getLoginUserDataRes = () => {
    return {
        type: GETLOGINUSERDATARES
    }
}

export const getLoginUserDataRej = () => {
    return {
        type: GETLOGINUSERDATAREJ
    }
}


export const addToCart = (item) => {
    return {
      type: ADD_TO_CART,
      payload: item,
    };
}



export const createLoginUser = (data) => {
    return dispatch => {

        dispatch(createLoginReq());

        addDoc(collection(db, "user"), data).then((res) => {
            // dispatch(getData());
        }).catch((err) => {
            console.log("Error in adding the car details", err);
            dispatch(createLoginRej(err))
        })


    }
}

export const getLoginUserData = () => {
    return dispatch => {
        dispatch(getLoginUserDataReq());
        getDocs(collection(db, "user"))
            .then((res) => {
                let allData = [];
                res.forEach((pro) => {

                    let obj = { id: pro.id, ...pro.data() }
                    allData = [...allData, obj]

                });

                dispatch(getLoginUserDataRes(allData));
            })
            .catch((err) => {
                dispatch(getLoginUserDataRej(err));
            });
    };
};



export const productAction = (data) => {
    return dispatch => {

        dispatch(productReq());

        addDoc(collection(db, "items"), data).then((res) => {
            dispatch(getData());
        }).catch((err) => {
            console.log("Error in adding the car details", err);
            dispatch(productRej(err))
        })


    }
}



export const getData = () => {
    return dispatch => {
        dispatch(productReq());
        getDocs(collection(db, "items"))
            .then((res) => {
                let allData = [];
                res.forEach((pro) => {

                    let obj = { id: pro.id, ...pro.data() }
                    allData = [...allData, obj]
                    // console.log("obj",datt);
                });

                dispatch(productSuc(allData));
            })
            .catch((err) => {
                dispatch(productRej(err));
            });
    };
};


export const singleData = (id) => {
    return async (dispatch) => {
        dispatch(singleDataReq());

        await getDoc(doc(db, "items", `${id}`))
            .then((res) => {
                console.log("resss", res.data());
                if (res.exists()) {
                    let obj = { id: id, ...res.data() };
                    dispatch(singleDataRes(obj))
                    console.log("Document data:", obj);
                } else {
                    dispatch(singleDataRej());
                }
            })
            .catch((err) => {
                dispatch(singleDataRej(err));
            });
    };
};