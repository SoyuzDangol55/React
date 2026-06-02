function Button(){
    //internal CSS
     const style = {
        backgroundColor:"red",
        color:"white",
        paddding:"50px",
        border:"none",
        cursor:"pointer",
        }
 return(
    <button style={style}>Click Me</button>
 );   
}

export {Button};