import './App.css';
import Hello from "./components/Hello";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import Groceries from "./components/Groceries";
import MessageDisplay from "./components/MessageDisplay";
import MessageForm from "./components/MessageForm";
import react,{useState} from "react";


function App() {


  const [currentMsg, setCurrentMsg] = useState("");
  const gotMsg = newMsg =>{
    setCurrentMsg(newMsg)
  }

    return (

    <div className="App">
      <>
        <Hello firstName={"Awad"} lastName={"Issa"} age={22}/><br/>
        <Counter/><br/>
        <UserForm/>
        <Groceries/>
        <MessageForm gotMsg = { gotMsg } />
        <MessageDisplay message={ currentMsg } />
      </>
    </div>
  );
}
export default App;
