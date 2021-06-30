import * as React from "react";
const Listsection = (props) => {
  return (
    <div style={{ backgroundColor: "lightblue", textAlign: "left" }}>
      {props.data && props.data.length > 0 ? (
        props.data.map((ele, index) => {
          return (
            //didnt understand the code//
            <div key={ele + index} onClick={() => props.dataRemove(index)}>
              <p>
                {index + 1}&nbsp;&nbsp;{ele.toUpperCase()}
              </p>
            </div>
          );
        })
      ) : (
        <p> no items in the list</p>
      )}
    </div>
  );
};
export default Listsection;
