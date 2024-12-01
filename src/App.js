import './App.css';
import Navbar from './Views/Navbar';
import Cover_div from './Views/Cover_div';
import Season_Collections from './Views/Season_Collections.jsx';
import Best_Seller from './Views/Best_Seller.jsx';
import Get_50_Off from './Views/Get_50%_Off.jsx';
import OurProduct from './Views/OurProduct.jsx'
import Our_Featured_Collections from './Views/Our_Featured_Collections.jsx';
import What_They_Said from './Views/What_They_Said.jsx';
import Contact_Us from './Views/Contact_Us.jsx';
import Footer from './Views/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cover_div/>
      <Season_Collections/>
      <Best_Seller/>
      <Get_50_Off/>
      <OurProduct/>
      <Our_Featured_Collections/>
      <What_They_Said/>
      <Contact_Us/>
      <Footer/>
    </div>
  );
}

export default App;

// https://www.figma.com/design/jeRUJrALJ8v4cqpIpjRol9/MEJIWOO-Fashion---E-commerce-Website-Landing-Page-(Community)?node-id=1-2&t=AYrVNu7bppGdeLBw-1