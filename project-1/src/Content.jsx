import Part from "./Part"

const Content = ( props ) => {
    return (
        <>
            <Part name={props.name1} exercise={props.exercise1} />
            <Part name={props.name2} exercise={props.exercise2} />
            <Part name={props.name3} exercise={props.exercise3} />
        </>
    )
}

export default Content