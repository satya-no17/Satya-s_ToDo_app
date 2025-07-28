import React, { useEffect, useState, useRef } from "react";
import "./mainc.css";
const Mainc = ({Mode}) => {
  const [showInput, setshowInput] = useState(false);
  const [showOptions, setShowOptions] = useState(null);
  const [todos, seTtodos] = useState([]);
  const inputRef = useRef(null);
  const [editindex, setEditindex] = useState(null);
  const firsttime = useRef(true)

  useEffect(() => {
    const savedTodos = localStorage.getItem("todolist");
      console.log("Loaded from localStorage:", savedTodos);
    if (savedTodos) {
      seTtodos(JSON.parse(savedTodos));
    }
  }, []);
  const inputshow = () => {
    setshowInput(!showInput);
  };
  const taskchange = (index) => {
    if (showOptions ===index) {
        setShowOptions(null)
    }
    else{setShowOptions(index);}
  };
  const handleAddtask = () => {
    const value = inputRef.current.value.trim();
    if (!value) return;

    if (editindex !== null) {
      let newtodos = [...todos];
      newtodos[editindex].todo = value;
      seTtodos(newtodos);
      setEditindex(null);
    } else {
      seTtodos([...todos, { todo: value, isCompleted: false }]);
    }
    inputRef.current.value = "";
    setshowInput(!showInput);
  };
  const handleEdit = (index) => {
    setEditindex(index);
    setshowInput(true);
  };
  const handleDelete = (index) => {
    let newtodos = todos.filter((_, i) => i !== index);
    seTtodos(newtodos);
  };
  useEffect(() => {
    if (showInput && editindex !== null && inputRef.current) {
      inputRef.current.value = todos[editindex].todo;
      inputRef.current.focus();
    }
  }, [showInput, editindex]);
  const workdone = (index) => {
    let donework = [...todos];
    donework[index].isCompleted = !donework[index].isCompleted;
    seTtodos(donework);
  };
  useEffect(() => {
    if (firsttime.current){
        firsttime.current = false
        console.log("first time th to andar nhi dala next time se ") 
        return
    }
     console.log("Saving to localStorage:", todos);
    localStorage.setItem("todolist", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={`mainbox ${Mode ? " dark":""}`}>
      <div className="box">
        <div className="taskBox">
          <p>Add a task</p>
          <div className="add" onClick={inputshow}>
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
        <div className="taskList">
          {todos.map((item, index) => (
            <div key={index} className="realTasks flex align-middle">
              <div
                className={`tasks ${showOptions ===index? "showoption" : ""}`}
                onClick={()=>taskchange(index)}
              >
                <input
                  type="checkbox"
                  checked={item.isCompleted}
                  onClick={(e) => e.stopPropagation()}
                  onChange={() => workdone(index)}
                />
                <p className={item.isCompleted ? "completed" : ""}>
                  {item.todo}
                </p>
              </div>
              {showOptions===index && (
                <div className="options">
                  <button className="btn" onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button className="btn" onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {showInput && (
        <div className="overlay" onClick={inputshow}>
          <div className="inputBox" onClick={(e) => e.stopPropagation()}>
            <input type="text" placeholder="Enter your Task" ref={inputRef} />
            <button className="add" onClick={handleAddtask}>
              <i className="fa-solid fa-check"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mainc;
