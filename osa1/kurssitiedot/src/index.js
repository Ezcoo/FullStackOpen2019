import React from 'react'
import ReactDOM from 'react-dom'
import { notEqual } from 'assert';

const Course = (course) => {
    console.log('course', course);
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
        </div>
    )
}

const App = () => {
    const courses = [
        {
            name: 'Half Stack -sovelluskehitys',
            id: 1,
            parts: [
                {
                    name: 'Reactin perusteet',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Tiedonvälitys propseilla',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'Komponenttien tila',
                    exercises: 14,
                    id: 3
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewaret',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    const coursesMap = () => courses.map(course =>
        <Course
            key={course.id}
            course={course}
        />
    );

    const coursesMapCopy = coursesMap();

    return (
        <div>
            {coursesMapCopy}
            <Total courses={courses} />
        </div >
    )
}

const Header = (props) => {
    console.log('header ', props)
    return (
        <div>
            <h1>{props.course.course.name}</h1>
        </div>
    )
}

const Content = (props) => {
    const parts = () => props.course.course.parts.map(part =>
        <Part
            key={part.id}
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
    let exercises = props.courses.reduce((accumulator, currentValue) => {
        let exercise = currentValue.parts.reduce((acc, { exercises }) => acc + exercises, 0);
        return accumulator + exercise;
    }, 0);

    return (
        <div>
            <p>yhteensä {exercises} tehtävää</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))