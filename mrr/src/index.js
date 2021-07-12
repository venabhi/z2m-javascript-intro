import react from 'react';
import reactDom from 'react-dom';

//  create a react component a fun / class

const myr = () => {
  return (
    <div> welcome to my react </div>
  );
}

//  dispaly the component on the screen

reactDom.render(
  <myr / > ,
    document.querySelector("#root")
);

// const rrr = () => {
//   return (
//     <div>
//       <label className='label'>Firstname</label>
//       <input id="name" type="text" />
//       <button  style="background-color: blue; color:white"  />
// style = "background-color: red; color:red;"
  //  style = {{backgroundColor: "red", color: "blue", font: "10px"}}
//  style is different in jsx and html 
//  style = "background-color: blue";
//  in jsx style = {{backgroundColor : "blue"}}
//     </div>
//   );S
// }

// reactDom.render(
//   <rrr />,
//   document.querySelector('#root')
// );

//  referncing  inside js variables to the jsx 
const app = () => {
  const vars = "clickme";
  return (
    <div>
       <label className='label'>Firstname</label>
//       <input id="name" type="text" />
//       <button  style="background-color: blue; color:white" > {clickme} </button>
// style = "background-color: red; color:red;"
  //  style = {{backgroundColor: "red", color: "blue", font: "10px"}}
//  style is different in jsx and html 
//  style = "background-color: blue";
//  in jsx style = {{backgroundColor : "blue"}}
    </div>

  );
}

//  referencing outside  js functions in the jsx by calling th function

function abhi() {
  return "clickme";
}

const app = () => {
  const vars = "clickme";
  return (
    <div>
       <label className='label'>Firstname</label>
//       <input id="name" type="text" />
//       <button  style="background-color: blue; color:white" > {abhi()} </button>
// style = "background-color: red; color:red;"
  //  style = {{backgroundColor: "red", color: "blue", font: "10px"}}
//  style is different in jsx and html 
//  style = "background-color: blue";
//  in jsx style = {{backgroundColor : "blue"}}
    </div>

  );
}

//  referencing array and object 
const arr = [10, 'name'];
const objs = {
  name: "abhi"
}

{ arr } we are referencing arry to jsx
{objs.name} we are referencing objects to jsx 