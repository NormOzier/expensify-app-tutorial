import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';



//and creates a new component from HOC with props
export const ExpenseList = (props) => (
    <div>

        {
            props.expenses.length === 0 ? (
                <p>No Expenses</p>
            ) : (
                props.expenses.map((expenses) => {
                    return <ExpenseListItem key={expenses.id} {...expenses} />
                })
            )
        }
        
    </div>
);

//create HOC using connect by react-redux
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

//define things to get of from store then define the component to create connected version of
export default connect(mapStateToProps)(ExpenseList);
