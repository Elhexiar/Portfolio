import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem?: (item: string, index: number) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    if (onSelectItem) {
      onSelectItem(items[index], index);
    }
  };

  return (
    <>
      <h1 style={{ color: "#61ffff" }}>{heading}</h1>
      {items.length === 0 ? <p>There are no items in the list.</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              "list-group-item" + (index === selectedIndex ? " active" : "")
            }
            key={index}
            onClick={() => handleClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
