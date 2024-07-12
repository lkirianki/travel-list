import { useState } from "react";
import Item from "./ITEM";
export default function Packinglist({ items, onDeleteItem, onToggleItem, clear }) {

    const [sortby, setSortBy] = useState('input')
    let sortedItems;
    if (sortby === 'input') sortedItems = items;
    if (sortby === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    if (sortby === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))
    return (
        <div className="list">
            <ul>
                {sortedItems.map(item => <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />)
                }
            </ul>
            <div className="actions">
                <select value={sortby} onChange={(e) => setSortBy(e.target.value)}>
                    <option value='input'>sorted by input</option>
                    <option value='description'>sorted by description</option>
                    <option value='packed'>sorted by packed</option>
                </select>
                <button onClick={clear}>clear List</button>
            </div>
        </div>
    );
}