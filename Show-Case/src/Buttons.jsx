import "./Button.css";
function Buttons(){

return(
    <>
    <h1 className="Heading">Outputs</h1>
    <div className="main-div">
   <button onClick={()=>window.open("https://day-1-ten-lovat.vercel.app/" , "_blank")} className="btns">Day-1</button>
    <button onClick={()=>window.open("https://day-2-hazel.vercel.app/" , "_blank")}className="btns">Day-2</button>
     <button onClick={()=>window.open("https://day-3-dusky.vercel.app/" , "_blank")}className="btns">Day-3</button>
      <button onClick={()=>window.open("https://day-4-xi.vercel.app/" , "_blank")}className="btns">Day-4</button>
       <button onClick={()=>window.open("https://day-5-iota.vercel.app/" , "_blank")}className="btns">Day-5</button>
        <button onClick={()=>window.open("https://day-6-three-zeta.vercel.app/" , "_blank")}className="btns">Day-6</button>
         <button onClick={()=>window.open("https://day-7-rose.vercel.app/" , "_blank")}className="btns">Day-7</button>
          <button onClick={()=>window.open("https://day-8-eosin.vercel.app/" , "_blank")}className="btns">Day-8</button>
          <button onClick={()=>window.open("" , "_blank")}className="btns">Day-9</button>
          </div>
    </>
);
}
export default Buttons;