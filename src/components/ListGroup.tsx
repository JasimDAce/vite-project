import { useState } from "react";

interface Props{
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({items, heading,onSelectItem}: Props) {
  
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List</h1>
      <ul className="list-group ">
        {items.map((city,index) => (
          <li className= {selectedIndex === index?'list-group-item active':'list-group-item'} key={city} onClick={(() => {setSelectedIndex(index);
            onSelectItem(city)
          })}>{city}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
