import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary'


//Expense list needs nothing passed down and is rendered just like that
//Provided by connect
const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters/>
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;