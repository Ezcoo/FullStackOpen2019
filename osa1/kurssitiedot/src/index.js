import React from 'react'
import ReactDOM from 'react-dom'
import { notEqual } from 'assert';

const Course = (course) => {
    console.log(course);
    return (
        <div>
            <Header props={course} />
            <Content props={course} />
            <Total props={course} />
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
            {
                name: 'Reactin perusteet',
                exercises: 10
            },
            {
                name: 'Tiedonvälitys propseilla',
                exercises: 7
            },
            {
                name: 'Komponenttien tila',
                exercises: 14
            },

        ]
    }
    return (
        <div>
            <Course course={course} />
        </div >
    )
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.props.course.name}</h1>
        </div>
    )
}

const Content = (props) => {
    console.log(props);
    const parts = () => props.props.course.parts.map(part =>
        <Part
            key={part.name}
            name={part.name}
            exercises={part.exercises}
        />
    )

    return (
        <div>
            {parts()}
        </div>
    )


}

const Part = (props) => {
    return (
        <div>
            <p>
                {props.name} {props.exercises}
            </p>
        </div>
    )
}

const Total = (props) => {
    let exercises = 0;

    for (var i = 0; i < props.props.course.parts.length; i++) {
        exercises += props.props.course.parts[i].exercises;
    }

    return (
        <div>
            <p>yhteensä {exercises} tehtävää</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))