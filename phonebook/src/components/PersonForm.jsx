const PersonForm = ({handleNameChange, handleNumberChange, newName, newNumber, handleSubmit}) => {
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
            Name: <input value={newName} onChange={handleNameChange}/> <br></br>
            Number: <input value={newNumber} onChange={handleNumberChange}/> <br></br>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm