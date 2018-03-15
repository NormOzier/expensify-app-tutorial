const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            //filter removes objects that is false
            //therefore, if the object is true its not the same, it will not get removed
            return state.filter(({id}) => id !== action.id)
        case "EDIT_EXPENSE":
            //iterates the objects
            //if true, will replace expense with action.updates
            return state.map((expense) => {
                if (expense.id === action.id){
                    return{
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
};