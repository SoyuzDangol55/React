function List(){
    const fruits = [{id:1, name:"Apple",calories:95},
        {id:2, name:"Mango",calories:45},
        {id:3, name:"Banana",calories:105},
        {id:4, name:"Coconut",calories:159}];

        //Filtering the Array
        const lowCaloriesfoods = fruits.filter(fruits => fruits.calories<100);
    const listItems = lowCaloriesfoods.map(lowCaloriesfoods => <li key={lowCaloriesfoods.id}>{lowCaloriesfoods.name}: {lowCaloriesfoods.calories}</li>);



    return(<ol>{listItems}</ol>);
}
export default List;