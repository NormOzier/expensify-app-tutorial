import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
    const action = removeExpense({id: '1234abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '1234abc'
    })
});
 
test('should set up update action object', () => {
    const action = editExpense('123abc', {note: 'New Note Value'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '123abc',
        //since updates is an object
        updates: {
            note: 'New Note Value'
        }
    });
});

test('should setup add expense action object with provided value', () => {
    const expenseData = {
        description: 'rent',
        amount: '1000',
        createdAt: '1000',
        note: 'Last Month Rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            //expect anything inside
            id: expect.any(String)
        }
    })
});

test('should setup add expense action object with default value', () => {
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '', 
            amount: 0, 
            createdAt: 0 
        }
    })
});