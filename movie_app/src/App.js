import React from "react";
import Potato from './Potato';

// Food 컴포넌트는 인자를 받는다.
function Food(props){
  console.log(props);
  return (
    
    <h1>I like {props.fav}</h1>
  );
}
function App() {
  return (
    <div>
      <h1>Hello!!!!!</h1>
      <Potato />
      {/* Food 컴포넌트에 props 전달한다. */}
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samiopsal" />
    </div>
  );

}

export default App;