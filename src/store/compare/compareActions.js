import { toast } from 'react-toastify';
import { COMPARE_ADD_ITEM, COMPARE_REMOVE_ITEM } from './compareActionTypes';

export function compareAddItemSuccess(product) {
    toast.success(`Product "${product.name}" added to compare!`, { theme: 'colored' });

    return {
        type: COMPARE_ADD_ITEM,
        product,
    };
}

export function compareRemoveItemSuccess(productId) {
    return {
        type: COMPARE_REMOVE_ITEM,
        productId,
    };
}

export function compareAddItem(product) {
    // sending request to server, timeout is used as a stub
    return (dispatch) => (
        new Promise((resolve) => {
            setTimeout(() => {
                dispatch(compareAddItemSuccess(product));
                resolve();
            }, 500);
        })
    );
}

export function compareRemoveItem(productId) {
    // sending request to server, timeout is used as a stub
    return (dispatch) => (
        new Promise((resolve) => {
            setTimeout(() => {
                dispatch(compareRemoveItemSuccess(productId));
                resolve();
            }, 500);
        })
    );
}
