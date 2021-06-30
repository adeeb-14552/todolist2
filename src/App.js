import React, { useState } from "react";
import "./styles.css";
import Inputsection from "./components/Inputsection";
import Listsection from "./components/Listsection";

const App = () => {
  const [mainList, setMainList] = useState([
    "Waking early in the morning",
    "Going to gym"
  ]);

  const addToMyList = (element) => {
    if (element === -1) {
      setMainList(["Waking early in the morning", "Going to gym"]);
    } else {
      let newArray = [...mainList];
      newArray.push(element);
      setMainList(newArray);
    }
  };

  const removeElementFromMainList = (index) => {
    let newArray = [...mainList];
    newArray.splice(index, 1);
    setMainList(newArray);
  };
  return (
    <div className="App" style={{ backgroundColor: "" }}>
      <h1>To Do Lists</h1>
      <Inputsection dataUpdate={(element) => addToMyList(element)} />
      <Listsection
        data={mainList}
        dataRemove={(index) => removeElementFromMainList(index)}
      />
    </div>
  );
};

export default App;
