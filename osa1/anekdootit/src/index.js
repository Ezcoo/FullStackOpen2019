import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const MostVotedAnecdote = (props) => {
    let maxNumber = Number.MIN_VALUE;
    let indexOfMaxNumber = 0;
    for (var i = 0; i < props.anecdotes.length; i++) {
        if (props.votes[i] > maxNumber) {
            maxNumber = props.votes[i];
            indexOfMaxNumber = i;
        }
    }
    return (
        <div>
            <span>{props.anecdotes[indexOfMaxNumber]}</span>
            <p>has {props.votes[indexOfMaxNumber]} votes</p>
        </div>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(points)

    const randomClick = () => {
        let randomNumber = Math.floor(Math.random() * 6)

        if (randomNumber > 5) {
            randomNumber = 5
        }

        setSelected(randomNumber);
    }

    const voteClick = () => {
        let copy = { ...votes };
        copy[selected] = copy[selected] + 1;
        setVotes(copy);
        console.log(selected);
        console.log(copy[selected]);
        console.log(votes);
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <Button text="next anecdote" handleClick={randomClick} />
            <Button text="vote" handleClick={voteClick} />
            <h1>Anecdote with most votes</h1>
            <MostVotedAnecdote anecdotes={anecdotes} votes={votes} />
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const points = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
}

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)