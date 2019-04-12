import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistic = (props) => {
    return (
        <>
            {props.text} {props.value}
        </>
    )
}

const Statistics = (props) => {
    return (
        <div>
            <Statistic text="hyvä" value={props.good} />
            <br></br>
            <Statistic text="neutraali" value={props.neutral} />
            <br></br>
            <Statistic text="huono" value={props.bad} />
            <br></br>
            <Statistic text="yhteensä" value={props.feedbackTotal} />
            <br></br>
            <Statistic text="keskiarvo" value={(props.good - props.bad) / props.feedbackTotal} />
            <br></br>
            <Statistic text="positiivisia" value={Math.round(props.good / props.feedbackTotal * 100)} />
            <span> %</span>
        </div>
    )
}

const Feedback = (props) => {
    return (
        <div>
            <h1>anna palautetta</h1>
            <Button handleClick={props.handleGoodClick} text='hyvä' />
            <Button handleClick={props.handleNeutralClick} text='neutraali' />
            <Button handleClick={props.handleBadClick} text='huono' />
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


    if (feedbackTotal === 0) {
        return (
            <div>
                <Feedback handleGoodClick={handleGoodClick} handleNeutralClick={handleNeutralClick} handleBadClick={handleBadClick} />
                <h1>statistiikka</h1>
                <p>Ei yhtään palautetta annettu</p>
            </div>
        )
    } else {
        return (
            <div>
                <Feedback handleGoodClick={handleGoodClick} handleNeutralClick={handleNeutralClick} handleBadClick={handleBadClick} />
                <h1>statistiikka</h1>
                <Statistics good={good} neutral={neutral} bad={bad} feedbackTotal={feedbackTotal} />
            </div>
        )
    }
}

ReactDOM.render(<App />,
    document.getElementById('root')
)