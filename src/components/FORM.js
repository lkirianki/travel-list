import { useState } from "react";
export default function Form({ onAddItem }) {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);



    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!description) return;
        const newItem = { description, quantity, packed: false, id: Date.now() }
        onAddItem(newItem);
        setDescription("");
        setQuantity(1)
        // console.log(newItem);
    };


    const handleChange = (e) => {
        setDescription(e.target.value);
    };


    return (

        <form className="add-form" onSubmit={handleSubmit}>

            <h3>What do you need for your 😍 trip</h3>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map
                    ((num) => (<option value={num} key={num}>{num}</option>))}
            </select>
            <input type="text" placeholder="item..." name="decription" value={description} onChange={(e) => handleChange(e)} />
            <button>ADD</button>
        </form>
    );
}
