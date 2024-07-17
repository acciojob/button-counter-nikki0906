
import React from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
        <p style = {{fontWeight : "bold"}}> Button Clicked {count} times</p>
        <button onClick = {() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default App
