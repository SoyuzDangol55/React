//props = read-only properties that are shared between components
// A parent component can send data to a child component
//<Component key=value>
import { Student } from './Student.jsx'
// import propTypes from 'Prop-Types'
function App() {
  return (
    <>
      {/* Sending Data to Student.jsx Function Student */}
      <Student name="Soyuz Dangol" age={23} isStudent="true" />
      <Student name="Dikshya Maharjan" age={22} isStudent="true" />
      <Student name="Laxmi Singh" age={42} isStudent="false" />
      <Student name="Saraswoti Singh" age={45} isStudent="false" />

    </>
  );
}



export default App
