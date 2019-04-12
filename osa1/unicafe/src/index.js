import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistics = (props) => {
    return (
        <div>
            <h1>statistiikka</h1>
            <p>hyvä {props.good}</p>
            <p>neutraali {props.neutral}</p>
            <p>huono {props.bad}</p>
            <p>yhteensä {props.good + props.neutral + props.bad}</p>
            <p>keskiarvo {(props.good - props.bad) / props.feedbackTotal}</p>
            <p>positiivisia {Math.round(props.good / props.feedbackTotal * 100)} %</p>
        </div>
    )
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [feedbackTotal, setfeedbackTotal] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
        setfeedbackTotal(feedbackTotal + 1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
        setfeedbackTotal(feedbackTotal + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
        setfeedbackTotal(feedbackTotal + 1)
    }

    return (
        <div>
            <h1>anna palautetta</h1>
            <Button handleClick={handleGoodClick} text='hyvä' />
            <Button handleClick={handleNeutralClick} text='neutraali' />
            <Button handleClick={handleBadClick} text='huono' />
            <Statistics good={good} neutral={neutral} bad={bad} feedbackTotal={feedbackTotal} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)