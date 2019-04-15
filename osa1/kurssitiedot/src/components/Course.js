import React from 'react'


const Course = (course) => {
    console.log('course', course);
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
        </div>
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

export default Course