import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

//define variables and objects/ state to be called
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  
  {/* have the button change when clicked to Light mode 
    isDarkMode => !isDarkMode: This is a function that takes the current state (isDarkMode)
     and returns the opposite value, effectively toggling the dark mode state.*/}

    function handleDarkModeClick() {
      setIsDarkMode((isDarkMode) => !isDarkMode);    
    } 

// replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle featured
  const appClass = isDarkMode? "App dark" : "App light"



  return (
    
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>

        {/* add event listener for the button */}
        <button onClick={handleDarkModeClick}>{isDarkMode ? "Dark" : "Light"} Mode </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;


