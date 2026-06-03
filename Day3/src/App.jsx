//props = read-only properties that are shared between components
// A parent component can send data to a child component
//<Component key=value>
import {Student} from './Student.jsx'
function App() {
 return(
    <Student name="Soyuz Dangol" age={23}/> //Sending Data to Student.jsx Function Student
 );
}

export default App
