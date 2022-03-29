import logo from './logo.svg';
import './App.css';
import axios from 'axios'; 
import {Routes, Route } from 'react-router-dom';
import { Nav } from './pages/Nav';
// import { H2 } from './components/H2';
// import { Props1 } from './components/Props1';
// import { Formvalidation } from './components/Formvalidation';
// // import { EmployeeRegistration } from './components/EmployeeRegistration';
// import {UserAPI} from './components/UserAPI'
// import{UserDetailApi} from './components/UserDetailApi'
// import{RoleApi} from './components/RoleApi'
// import{RelativeApi} from './components/RelativeApi'
// import{RelationApi} from './components/RelationApi'
// import{ParticipantsApi} from './components/ParticipantsApi'
// import{LeaveApi} from './components/LeaveApi'
// import{CelebrationApi} from './components/CelebrationApi'
// import{AppDemo} from './components/AppDemo'
// import{ApiDemo3} from './components/ApiDemo3'
// import { Update } from './components/Update';
// import { Delete } from './components/Delete';
// import Redirect from './components/Redirect';
// import { ContactUs } from './components/ContactUs';
// import { About } from './components/About';
// import { Home } from './components/Home';
// import{FileUpload} from './components/FileUpload'
// // import{FormDemo} from './components/FormDemo'
// import {SelectDemo} from './components/SelectDemo'
// import {Login} from './components/Login'

// import { ToastContainer } from 'react-toastify';
// import { Profile } from './components/Profile';
// import { LogOut } from './components/LogOut';
// import { Update } from './components/Update';
import {Login1} from './components/Login1';


function App() {
  return (
 <div>
 {/* <Nav/> */}
   {/* <EmployeeRegistration/>
   {/* {<UserAPI/>}
   {<RoleApi/>}
   {<UserDetailApi/>}
   {<RelativeApi/>}
   {<RelationApi/>}
   {<ParticipantsApi/>}
   {<LeaveApi/>}
   <CelebrationApi/> 
  
   {/* <ApiDemo3/> */}
   {/* <FileUpload/> */}
   {/* <FormDemo/> */}
   {/* <SelectDemo/> */}
{/* <Login/>    */}
{/* <Profile/> */}
{/* <LogOut/> */}

{/* <Props1/> */}
{/* <Props2/> */}
{/* <Formvalidation/> */}
{/* <Update/> */}
{/* <Delete/> */}
{/* <Redirect/> */}
{/* <Home/> */}
{/* <ToastContainer/> */}
{/* <H2/> */}
{/* <AppDemo/> */}
<Login1/>


    


{<Routes>
 {/* <Route path='/Login' element={<Login/>}/> */}
{/* <Route path='/Profile' element={<Profile/>}/> */}
{/* <Route path='/LogOut' element={<LogOut/>}/>  */}
{/* <Route path='/update/:userId' element={<Update/>}/> */}
{/* <Route path='/delete/:userId' element={<Delete/>}/> */}
{/* <Route path='/FileUpload' element={<FileUpload/>}/> */}
{/* <Route path='/SelectDemo' element={<SelectDemo/>}/> */}
{/* <Route path='/ApiDemo3' element={<ApiDemo3/>}/>  */}
{/* <Route path='/Home' element={<Home/>}/> */}
{/* <Route path='/About' element={<About/>}/> */}
{/* <Route path='/ContactUs' element={<ContactUs/>}/> */}

</Routes>}

  
  </div>
  );
}

export default App;
