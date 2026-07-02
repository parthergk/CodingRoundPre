import React from "react";

const Child = React.memo( () => {
  console.log("i am child");
  

  return (
    <div className="dark">
        child
    </div>
  )
})

export default Child