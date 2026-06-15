import React , {useState} from 'react';
function MyComponent(){
    const[name, setName] = useState("Guest");
    const[age , setAge] = useState(0);
    const[isEmployed , setEmp] = useState();


    function setN(){
        setName("Soyuz Dangol");
    }

    function setA(){
        setAge(age + 1);
    }



    function toggleEmployedStatus(){
        setEmp(!isEmployed);
    }
    return(
        <>
        <div>
            <p>Name:{name}</p>
            <button onClick={setN}>setName</button>

              <p>Age:{age}</p>
            <button onClick={setA}>Increment Age</button>


            <p>Employe:{isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Employement-Status</button>
        </div>
        </>
    );
}

export default MyComponent