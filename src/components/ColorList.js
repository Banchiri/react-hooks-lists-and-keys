import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
    "red",
    "green"
  ];
  const colorElements = colors.map((color) => {
    return <ColorItem key={color} color={color} />;
  });


  return (
    <div>
      <h1>Top 6 CSS Colors</h1>
      <ol>
        {colorElements}

      </ol>
      {userHeadings}
      {fibList}
      
    </div>
  );
}
function ColorItem(props) {
  return <li style={{color:props.color}}>{props.color}</li>
}
const users =[
  { id:1, firstName:"Duane", lastName:"Watson"},
  { id:2, firstName:"Duane", lastName:"Johnson"},

];
const userHeadings = users.map((user) => {
  return <h1 key={user.id} >{user.firstName}</h1>
});
const fib = [0,1,1,2,3,5,7,9];
const fibList = fib.map((number, index) => {
  return <div key={index}>{number}</div>
})

export default ColorList;
