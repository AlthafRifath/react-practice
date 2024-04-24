import { useState } from 'react';

function MyComponent() {

    const [car, setCar] = useState({year: 2021, make: "Toyota", model: "Corolla"})

    function handleYearChange(event){

        setCar(c => ({...c, year: event.target.value}))

    }

    function handleMakeChange(event){

        setCar(c => ({...c, make: event.target.value}))

    }

    function handleModelChange(event){

        setCar(c => ({...c, model: event.target.value}))

    }

    return(<div>
        <p>Your Favorite car is: {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={handleYearChange}/><br/>
        <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
        <input type="text" value={car.model} onChange={handleModelChange}/><br/>
    </div>)
}

export default MyComponent;