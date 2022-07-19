import './App.css';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { AllRoutes } from './components/allroutes';


function App() {
  return (
    <div className="App">
      
      <AllRoutes></AllRoutes>
      <Footer></Footer>
    </div>
  );
}

export default App;
