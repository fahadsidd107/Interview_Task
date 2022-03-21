import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function Input({ value, setValue, all, setAll ,edit,setEdit}) {
const updateval=(title,id,completed)=>{
    const newval = all.map((all)=>
        all.id === id ? {title,id,completed} : all
    )
    setAll(newval);
    setEdit('')
}
useEffect(()=>{
    if(edit){
        setValue(edit.title)
    }
    else{
        setValue('')
    }
},[edit,setValue])

  const change = (event) => {
    setValue(event.target.value);
  };
  const add = (event) => {
    event.preventDefault();
if(!edit){
    setAll([...all, { id: uuidv4(), title: value, completed: false }]);
    setValue("");
}
else{
    updateval(value,edit.id,edit.completed)
}
    
  };

  return (
    <div>
      <form onSubmit={add}>
        <input
          type="text"
          placeholder="Enter your task"
          className="inputfield"
          value={value}
          onChange={change}
          required
        />
        <button className="addButton" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default Input;
