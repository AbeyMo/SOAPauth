import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";

function App() {
    


return (
    <BrowserRouter>
    
        <Header></Header>
        
          <div className="container-fluid mt-5  w-50 p-3" >
          
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          
        </div>
      
      
    </BrowserRouter>
   
  )
 }

export default App;
