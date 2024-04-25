import React, {useState} from 'react';
import { BrowserRouter,Route, Routes  } from 'react-router-dom';
 import Login from './Components/Login';
import StudentProfile from './Components/StudentProfile ';
import Parent from './Components/Parent';
import Profile from './Components/Profile';
import Teacher from './Components/Teacher';
import Loader from './Components/Loader';
import Bot from './Components/Bot';
import './App.css';
import Pending  from './Components/Pending';
import Submitted from './Components/Submitted';
import Evaluated from './Components/Evaluated';

function App() { 
  const [activeTab, setActiveTab] = useState('Pending');
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  }
  return (
<>
{/* <div contener>
    <div contener1>
        <div className="textimg">
            <h1 className="text">Your Homework<br></br>is here!</h1>
            <div className="img"></div>
        </div>
    </div>
    <div className="but1">
        <div className="buttons1">
            <div>
            <span className={activeTab === 'Pending' ? 'active pending' : 'hoverButton'} onClick={() => handleTabChange('Pending')}>Pending</span>
            </div>
            <div>
            <span className={activeTab === 'Submitted' ? 'active submitted' : 'hoverButton'} onClick={() => handleTabChange('Submitted')}>Submitted</span>
            </div>
            <div>
            <span className={activeTab === 'Evaluated' ? 'active evaluated' : 'hoverButton'} onClick={() => handleTabChange('Evaluated')}>Evaluated</span>
            </div>
        </div>
    </div>
    {activeTab === 'Pending' && <Pending />}
    {activeTab === 'Submitted' && <Submitted />}
    {activeTab === 'Evaluated' && <Evaluated />}
    </div>  */}
    <BrowserRouter>
   
    <Routes>
         <Route path='/Chat' element={<Bot/>} />
        <Route  path="/Login" element={<Login/>}/>
        <Route path="/" element={<Loader/>}/>
        <Route  path="/Student" element={<StudentProfile/>}/>
        <Route path="profile" element={<Profile/>} />
        <Route  path="/Parent" element={<Parent/>}/>
        <Route path ="/teacher" element={<Teacher/>}/>
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
