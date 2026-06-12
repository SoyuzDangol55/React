function Button(){
    const handleClick = function ouch () { console.log("Ouch")};


    let count = 0;
    const handleClick2 = (name2) => {
        if(count<3){
            count++;
            console.log(`${name2} You Clicked me`);
        }else{
            console.log(`${name2}Stop Clicking me`);
        }
    }


     function stopClick(name) {console.log(`${name} Stop Clicking me`);}



    return(
        <>
    <button onClick={() => stopClick("Bro")}>Click Me</button><br />
    <button onClick={()=> handleClick2("Soyuz")}>Click me Again</button>
    </>
    );
}
export default Button