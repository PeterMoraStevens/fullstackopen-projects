const Total = (props) => {
    let total = 0
    for (let i = 0; i < props.course.parts.length; i++) {
        total += props.course.parts[i].exercises
    }

    return (
        <>
            <p> Number of exercise, { total } </p>
        </>
    )
}

export default Total