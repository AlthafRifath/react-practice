import { useState } from 'react';

function MyComponent() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {

        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        }

        setCars(c => [...c, newCar])

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }

    function handleRemoveCar(index) {

        const newCars = cars.filter((car, i) => i !== index)

        setCars(newCars)

    }

    function handleCarYearChange(event) {

        setCarYear(event.target.value)

    }

    function handleCarMakeChange(event) {

        setCarMake(event.target.value)

    }

    function handleCarModelChange(event) {

        setCarModel(event.target.value)

    }

    return(<div>
        <h2>List of Car Objects</h2>
        <ul>
            {cars.map((car, index) =>
                <li key={index}>
                    {car.year} {car.make} {car.model}
                    <button onClick={() => handleRemoveCar(index)}>Remove Car</button>
                </li>
            )}
        </ul>
        <input type="number" value={carYear} onChange={handleCarYearChange}/><br/>
        <input type="text" value={carMake} onChange={handleCarMakeChange} placeholder="Enter Car Make"/><br/>
        <input type="text" value={carModel} onChange={handleCarModelChange} placeholder="Enter Car Model"/><br/>
        <button onClick={handleAddCar}>Add Car</button>
    </div>)
}

export default MyComponent;