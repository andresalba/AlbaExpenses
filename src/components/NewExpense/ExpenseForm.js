import './ExpenseForm.css';
import { useState } from 'react';

function ExpenseForm(props){

    const [newTitle, setNewTitle] = useState('');
    const [newAmount, setNewAmount] = useState('');
    const [newDate, setNewDate] = useState('');

    const titleChangeHandler = (event) => {
        console.log(event.target.value);
        setNewTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        console.log(event.target.value);
        setNewAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        console.log(event.target.value);
        setNewDate(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title: newTitle,
            amount: +newAmount,
            date: new Date(newDate)
        };
        props.onSaveExpenseData(expenseData);//se envía la info al parent
        setNewTitle('');
        setNewAmount('');
        setNewDate('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={newTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={newAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2045-01-01" value={newDate} onChange={dateChangeHandler} />
                </div>
            </div>
			<div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
				<button type="submit">Add Expense</button>
			</div>
        </form>
    );
}

export default ExpenseForm;