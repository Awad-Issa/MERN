import logo from './logo.svg';
import './App.css';
import AuthorList from "./components/AuthorList";
import AuthorForm from "./components/AuthorForm";
import AuthorEdit from "./components/AuthorEdit";
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">

          <Routes>
              <Route path="*" element={<AuthorList />} />
              <Route path="/players/addplayer" element={<AuthorForm />} />
              <Route path="/authors/edit/:id" element={<AuthorEdit />} />
          </Routes>

      </header>
    </div>
  );
}

export default App;
