import { db } from "../../sdkFireBaseData/sdkFireBaseData";
import {  CREATELOGINREJ, CREATELOGINREQ, DELETEDATAREJ, DELETEDATAREQ, PRODUCTREJ, PRODUCTREQ, PRODUCTSUC, SINGLEDATAREJ, SINGLEDATAREQ, SINGLEDATARES, UPDATEREJ, UPDATEREQ, UPDATERES } from "../const"
import { addDoc, getDocs, collection, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore"


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
    return{
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

export const updateReq = () => {
    return {
        type: UPDATEREQ

    }
}

export const updateRej = () => {
    return {
        type: UPDATEREJ
    }
}

export const deleteDataReq = () => {
    return {
        type: DELETEDATAREQ

    }
}

export const deleteDataRej = () => {
    return {
        type: DELETEDATAREJ

    }
}





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
                    console.log("obj",allData);
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
                // console.log("resss", res.data());
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

export const editData = (data) => {
    return (dispatch) => {
        dispatch(updateReq());
        setDoc(doc(db, 'items', `${data.id}`), data).then((res) => {
            dispatch(getData())
        }).catch((err) => {
            dispatch(updateRej())
        })
    }
};

export const deleteData =(id)=>{
    return (dispatch) =>{
        dispatch(deleteDataReq());

        deleteDoc(doc(db, "items", `${id}`)).then((res) => {
            dispatch(getData())
        }).catch((err) => {
            dispatch(deleteDataRej())
        })
    }
}
