function Food(){

    const food1 = "Pizza";
    const food2 = "Momo";
    const food3 = "Fried Rice"
    const name = <h1>Soyuz Dangol</h1>

    return(
        // It returns only one parent element  
        // below <> </> are fragements
        <>
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food3.toUpperCase()}</li>
            <li>{food2.toLowerCase()}</li>
        </ul>

       

        <h1>name is : {name}</h1>
        </>
    );
}


function Listname(){
    const arr = [
        {Name:"Dikshya Maharjan"},
        {Name:"Zazzzz Maharjan"},
        {Name:"Kanxi Awale"}
    ];
    arr.push({Name : "SoyuzDangol" });
    return(
        <>
            <h3>Name: {arr[3].Name} </h3>
            <h3>Name: {arr[0].Name}</h3>
            <h3>Name: {arr[1].Name}</h3>
            <h3>Name: {arr[2].Name}</h3>   

        <p>Hello This is Soyuz Dangol .Trying React Second Time and is interesting . </p>
        </>
    );
}


//the file can have only one export
export default Food //only one default export per file
 export { Listname } //You can have multiple ones of this 