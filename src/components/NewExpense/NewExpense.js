import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props){

    const [isEditing, setIsEditing] = useState(false);

    const  SaveExpenseDataHandler = (newExpenseData) =>{
        const expenseData = {
            ...newExpenseData,
            id : Math.random().toString()
        };
        console.log('El valor en NewExpense es',expenseData);
        props.onAddExpense(expenseData);//se envía la info al parent
        setIsEditing(false);
    }

    const startEditingHandler = () =>{
        setIsEditing(true);
    }

    const stopEditingHandler = () =>{
        setIsEditing(false);
    }

    return(
        <div className="new-expense">
        {/*<div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add new expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>*/}
        {isEditing ? <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditingHandler}/> :
                     <button onClick={startEditingHandler}>Add new expense</button>
        }
        </div>  
    );
}

export default NewExpense;