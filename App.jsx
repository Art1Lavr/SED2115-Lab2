import { useState } from "react";
import style from "./App.module.css";

// Image info
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

// Main Component
export default function App() {
  // useState for button counter
  const [count, setCount] = useState(0);

  // Button click processing function, increases count by 1
  function handleClick() {
    setCount(count + 1);
  }

  // List of products
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];

  return (
    <div>
      <h1>React Quick Start Demo</h1>

      {/* Displaying data */}
      <h2>{user.name}</h2>
      <img
        className={style.avt}// Link to CSS class for styling image
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{ width: user.imageSize, height: user.imageSize }}//Set the size via inline style
      />

      {/*State + event handling */}
      <p>Count: {count}</p>
      <MyButton count={count} onClick={handleClick} />

      {/* conditions under which the inscription under the button changes after pressing*/}
      {count > 11 ? <p>You clicked a lot!</p> : <p>Keep clicking...</p>}

      {/* List */}
      <ul>
        {products.map((product) => (
          <li
            key={product.id}// Unique key for each list item
            style={{ color: product.isFruit ? "magenta" : "darkgreen" }}// Color depends on product type
          >
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Separate component button
function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}


