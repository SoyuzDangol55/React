function Food(){

    const food1 = "Pizza";
    const food2 = "Momo";
    const food3 = "Fried Rice"

    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food3.toUpperCase()}</li>
            <li>{food2.toLowerCase()}</li>
        </ul>
    );
}

export default Food