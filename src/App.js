import logo from './logo.svg';
import './App.css';
import axios from 'axios'; 
import {Routes, Route } from 'react-router-dom';
import { Nav } from './pages/Nav';
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
// import{FileUpload} from './components/FileUpload'
// import{FormDemo} from './components/FormDemo'
// import {SelectDemo} from './components/SelectDemo'
import {Login} from './components/Login'
import { Profile } from './components/Profile';


function App() {
  return (
 <div>
 <Nav/>
   {/* <EmployeeRegistration/>
   {/* {<UserAPI/>}
   {<RoleApi/>}
   {<UserDetailApi/>}
   {<RelativeApi/>}
   {<RelationApi/>}
   {<ParticipantsApi/>}
   {<LeaveApi/>}
   {<CelebrationApi/>} * */}
   {/* {<AppDemo/>} */}
   {/* <ApiDemo3/> */}
   {/* <FileUpload/> */}
   {/* <FormDemo/> */}
   {/* <SelectDemo/> */}
<Login/>   
<Profile/>

    


<Routes>
<Route path='/Login' element={<Login/>}/>
<Route path='/Profile' element={<Profile/>}/>
  
</Routes>
  
  </div>
  );
}

export default App;
