import React , {useState} from 'react'
function MyComponent(){
const [name,setName] = useState("");
const[quantity,setQuantity] = useState();

function handleNameChange(event){
    setName(event.target.value);
}

function handleQuantityChange(event){
    setQuantity(event.target.value);
}
return(
    <>
    <div>
    <input type="text" value={name} onChange={handleNameChange} />   
   <p>Name:{name}</p>


   <input type="number"  onChange={handleQuantityChange} value={quantity} />
   <p>Quantity:{quantity}</p>
    </div>
 </>
);
}
export default MyComponent;