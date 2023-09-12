const Persons = ({personsToShow, handleClick}) => {

    return (
        <ul>
            {
                personsToShow.map((person) =>
                <li key={person.name}>
                    {person.name} {' '} - 
                    {''} {person.number} {' '}
                    - <button onClick={() => handleClick(person.id, person.name)}> Delete </button>
                </li>)
            }
        </ul>
    )
}
export default Persons