import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  const [value, setValue] = useState("");
  const [all, setAll] = useState([]);
  const [edit,setEdit] = useState(null);
  return (
    <div className="App">
      <h1 className="title">Interview Task</h1>
      <Input value={value} setValue={setValue} all={all} setAll={setAll} edit={edit} setEdit={setEdit}/>
      <div>
        <List all={all} setAll={setAll} setEdit={setEdit} />
      </div>
    </div>
  );
}

export default App;
