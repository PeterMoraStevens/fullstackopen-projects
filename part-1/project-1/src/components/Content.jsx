import Part from "./Part"

const Content = ({course}) => {
    return (
        course.parts.map((part, i) => <Part key={i} name={part.name} exercise={part.exercises}></Part>)
    )
}

export default Content