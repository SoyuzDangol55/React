function Student(props){
    return(
        <div>
            <p>Name: {props.name} age={props.age}</p>
            {/* using ternary Operator */}
            <p>Student={props.isStudent ? "Yes" : "No"}</p> 
        </div>
    );
}
export {Student};