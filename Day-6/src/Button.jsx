function Button(){
    const handleClick = function ouch () { console.log("Ouch")};

     function stopClick(name) {console.log(`${name} Stop Clicking me`);}
    return(
    <button onClick={() => stopClick("Bro")}>Click Me</button>);
}
export default Button