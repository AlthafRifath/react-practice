import { useState } from 'react';

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [quanity, setQuanity] = useState(0);
    const [comments, setComments] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("")

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuanityChange(event) {
        setQuanity(event.target.value);
    }

    function handleCommentsChange(event) {
        setComments(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return(<div>
        <input type="text" value={name} onChange={handleNameChange}/>
        <p>Name: {name}</p>

        <input type="number" value={quanity} onChange={handleQuanityChange}/>
        <p>Name: {quanity}</p>

        <textarea value={comments} onChange={handleCommentsChange} placeholder="Enter Delivery Instructions"/>
        <p>Comments: {comments}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an Option</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Paypal">Paypal</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
            <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
            Pickup
        </label>
        <br/>
        <label>
            <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </div>)
}

export default MyComponent;