import './App.css';
import PersonCard from "./components/PersonCard";

function App() {
  return (

      <>

          <PersonCard firstName={"Awad"} lastName={"Issa"} age={22} hairColor={"yellow"}/>
          <PersonCard firstName={"Oday"} lastName={"Iseed"} age={18} hairColor={"yellow"}/>
          <PersonCard firstName={"Houda"} lastName={"Attiyeh"} age={27} hairColor={"yellow"}/>
          <PersonCard firstName={"Kareem"} lastName={"Taha"} age={27} hairColor={"yellow"}/>


      </>

  );
}

export default App;
