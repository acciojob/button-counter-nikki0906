
import React from "react";
import './../styles/App.css';

const App = () => {
  let[count, setCount] = useState(0);

  function click(){
    setCount(count + 1)
  }
  return (
    <div>
        <p>Button Clicked {count} times</p>
        <button onClick = {click}>Click Me</button>
    </div>
  );
};

export default App
