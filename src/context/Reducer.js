export const initialState = {
    basket: [],
    user: null
}

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
            return { 
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            return { 
                ...state,
                basket: [...state.basket.filter(item => item.id !== action.id)]
            };
        case 'USER_LOGIN':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;