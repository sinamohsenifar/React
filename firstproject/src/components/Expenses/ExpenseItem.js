import React, { useState } from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'



const ExpenseItem = (props) => {

    // const expenseDate = new Date(2012, 2, 28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;
    
    // const [date, setDate] = useState(props.date)
    // const [amount, setAmount] = useState(props.amount)
    const [title, setTitle] = useState(props.title);
    let date = props.date
    let amount = props.amount

    const ChangeClickHandler = () => {
        setTitle('Changed title');
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button onClick={ChangeClickHandler}>Change Title</button>
        </Card>
    )
}



export default ExpenseItem;