import {BrowserRouter, Route, Routes } from "react-router-dom";
import AddDevs from "./components/Admin/AddDevs";
import Admin from "./components/Admin/Admin";
import Header from "./components/Layouts/Header/Header";
import Profile from "./components/Team/Profile/Profile";
import Team from "./components/Team/Team";

function App() {
  return (
    <>
    
     <BrowserRouter>
     <Header/>
     <Routes>
       <Route path="/" element={<Team></Team>}/>
       <Route path="/profile/:username" element={<Profile></Profile>}/>
       <Route path="/admin" element={<Admin></Admin>}/>
       <Route path="/add-devs" element={<AddDevs></AddDevs>}/>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
