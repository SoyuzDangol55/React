  //React HOok : Special function that allows functional components to use React features without writing class component
  //useState,useEffect,useContext,useReducer,useCallback, and more ........
  //useState() : A React hook that allows the creation of a stateful variable AND a setter function tp update its value in the Virtual DOM


import MyComponent from "./MyComponent.jsx"
import Counter from "./Counter.jsx"
  function App(){
    return(
      <>
    <MyComponent/>
    <Counter/>
    </>
    );
  }
  export default App
