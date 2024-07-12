import { useState } from "react";
import Logo from "./LOGO";
import Form from "./FORM";
import Packinglist from "./Packinglist.1";
import Starts from "./Starts";



// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 12, packed: false },
// ];



export default function App() {

  const [item, setItem] = useState([])


  const handleAddItems = (item) => {
    setItem(items => [...items, item])
  }

  const handleDeleteItems = (id) => {
    setItem(olditems => olditems.filter(item => item.id !== id))
  }
  const handleToggleItem = (id) => {
    setItem(olditems => olditems.map(item =>
      item.id === id ? { ...item, packed: !item.packed } : item

    ))
  }

  const hanldeClearList = () => {
    const confirmed = window.confirm('are you sure you want to delete everything')
    if (confirmed) setItem([])
  }

  return <div className="app">
    <Logo />
    <Form onAddItem={handleAddItems} />
    <Packinglist items={item} onDeleteItem={handleDeleteItems} onToggleItem={handleToggleItem} clear={hanldeClearList} />
    <Starts item={item} />
  </div>

}


