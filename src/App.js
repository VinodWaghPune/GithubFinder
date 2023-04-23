import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Alert from "./components/layouts/Alert";
import Notfound from "./pages/Notfound";
import User from "./pages/User";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

function App() {
  return (
   
    <GithubProvider>
     <AlertProvider>
    
    <Router>

      <div className="flex flex-col justify-between-screen">
        <Navbar/>
        <main className="container mx-auto px-3 pb-12">
          <Alert/>
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/user/:login' element={<User/>}/>
          <Route path='/*' element={<Notfound/>}/>
        </Routes>
           
           </main>
      <Footer/> 
      </div>    


      
      
      
      </Router>
     
     
      </AlertProvider>
      </GithubProvider>
      
  );
}

export default App;
