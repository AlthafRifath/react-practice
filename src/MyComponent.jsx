import { useState } from 'react';

function MyComponent() {

    const [foods, setFoods] = useState(["pizza", "burger", "shawarma", "pasta", "biryani"]);

    function handleAddFood() {

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index) {

        setFoods(foods.filter((_, i) => i !== index));

    }

    return(<div>
        <h2>My Favourite Foods</h2>
        <ul>
            {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter Food Name"/>
        <button onClick={handleAddFood}>Add Food</button>
    </div>)
}

export default MyComponent;