import './App.css';
import {useState} from "react";
import BoxForm from "./components/BoxForm";
import Box from "./components/Box";

function App() {

  const [boxes, setBoxes] = useState([]);
  const addBox = box => setBoxes([...boxes, box]);

  return (
<>

  <BoxForm onNewBox={ addBox }/>
  {
    boxes.map((box, i) => <Box key={ i } color={box.color} />)
  }

</>
  );
}

export default App;
