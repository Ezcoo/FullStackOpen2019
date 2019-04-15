import React from 'react'

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

export default Total