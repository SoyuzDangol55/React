function List(props){
    // const fruits = [{id:1, name:"Apple",calories:95},
    //     {id:2, name:"Mango",calories:45},
    //     {id:3, name:"Banana",calories:105},
    //     {id:4, name:"Coconut",calories:159}];

        //Filtering the Array
        // const lowCaloriesfoods = fruits.filter(fruits => fruits.calories<100);  
        //const highcalfruits = fruits.filter(fruits => fruits.calories >=100);

        const category = props.category;
        const itemList = props.items;
        


    const listItems = itemList.map(itemList => <li key={itemList.id}>{itemList.name}: {itemList.calories}</li>);



    return(<>
    <h3>{category}</h3>
    <ol>{listItems}</ol>
        </>);
}
export default List;