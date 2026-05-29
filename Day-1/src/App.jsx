import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx' //While importing the default export there is no need of specific name llike
//import Food from './Food.jsx' // here instead of Food i can write Flower anything but in below one
import {Listname} from './Food.jsx' // here we must use exact name inside {}
function App() {
  return (
    <>
     <Header />
     <hr />
     <Food />
     <Footer/>
      <Listname/>
    </>
  );
}

export default App
