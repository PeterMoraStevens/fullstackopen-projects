const Total = (props) => {
    let total = 0

    props.exercises.forEach((element) => total += element)

    return (
        <>
            <p> Number of exercise - { total } </p>
        </>
    )
}

export default Total