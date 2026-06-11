import List from './List.jsx'

function App() {
   const fruits = [{id:1, name:"Apple",calories:95},
        {id:2, name:"Mango",calories:45},
        {id:3, name:"Banana",calories:105},
        {id:4, name:"Coconut",calories:159}];



        const vegetables = [{id:5, name:"potatoes",calories:110},
        {id:6, name:"carrots",calories:25},
        {id:7, name:"corn",calories:63},
        {id:8, name:"brocoli",calories:50}];

  return(
    <>
    {fruits.length > 0 ? <List items = {fruits} category="fruits"/> :null}
    {vegetables.length > 0 ? <List items={vegetables} category="vegetables"/>:null}

    </>
  );
}

export default App
