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
            {props.value}
        </>
    )
}

const Statistics = (props) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>hyvä </td>
                        <td><Statistic value={props.good} /> </td>
                    </tr>
                    <tr>
                        <td>neutraali</td>
                        <td><Statistic value={props.neutral} /> </td>
                    </tr>
                    <tr>
                        <td>huono </td>
                        <td><Statistic value={props.bad} /> </td>
                    </tr>
                    <tr>
                        <td>yhteensä </td>
                        <td><Statistic value={props.feedbackTotal} /> </td>
                    </tr>
                    <tr>
                        <td>keskiarvo </td>
                        <td><Statistic value={(props.good - props.bad) / props.feedbackTotal} /> </td>
                    </tr>
                    <tr>
                        <td>positiivisia </td>
                        <td><Statistic value={Math.round(props.good / props.feedbackTotal * 100)} /> <span> %</span> </td>
                    </tr>
                </tbody>
            </table>
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