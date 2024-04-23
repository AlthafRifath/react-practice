import { useState } from 'react';

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Althaf");
    }

    const incrementAge = () => {
        setAge(age+1);
    }

    const toggleEmploymentStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(<div>

        <p>Name: {name}</p>
        <button onClick={updateName}> Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}> Increment Age</button>

        <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmploymentStatus}> Toggle Status</button>

    </div>)
}

export default MyComponent;