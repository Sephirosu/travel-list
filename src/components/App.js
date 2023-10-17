import { clear } from "@testing-library/user-event/dist/clear";
import { useState } from "react";
import Logo from "../components/Logo";
import PackingList from "../components/PackingList";
import Stats from "../components/Stats";
import Form from "../components/Form";
import Item from "../components/Item";

export default function App() {
  const [items, setItems] = useState([]);

  const handleItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItems = (id) => {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const toggleItems = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const clearItems = () => {
    const confirmed = window.confirm(
      "Are you sure u want to clear all the list?"
    );
    if (confirmed === true) setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form handleItems={handleItems} />
      <PackingList
        items={items}
        handleDeleteItems={handleDeleteItems}
        toggleItems={toggleItems}
        clearItems={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}
