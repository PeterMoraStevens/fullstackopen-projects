const Total = ({course}) => {
    const total = course.parts.reduce((s, p) => s + p.exercises, 0)
    return (
        <p>Total exercises: { total }</p>
    )
}

export default Total