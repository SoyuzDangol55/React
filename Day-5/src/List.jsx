function List(){
    const fruits = [{name:"Apple",calories:95},
        {name:"Mango",calories:45},
        {name:"Banana",calories:105},
        {name:"Coconut",calories:159}];
    const listItems = fruits.map(fruits => <li>{fruits.name}</li>);
    return(<ol>{listItems}</ol>);
}
export default List;