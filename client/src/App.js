import About from './pages/About'
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import PagenotFound from './pages/PagenotFound'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Dashboard from './pages/user/Dashboard'
import PrivateRoute from './components/Routes/Private'
import ForgotPasssword from './pages/Auth/ForgotPassword'
import AdminRoute from './components/Routes/AdminRoute'
import AdminDashboard from './pages/Admin/AdminDashboard'
// import {ToastContainer} from "react-toastify"

function App() {
  return (
    <>
      <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/dashboard' element={<PrivateRoute/>}>
            <Route path="user" element={<Dashboard/>}/>
          </Route>
         <Route path='/dashboard' element={<AdminRoute/>}>
         <Route path="admin" element={<AdminDashboard/>}/>
         </Route>
         <Route path='/forgot-password' element={<ForgotPasssword/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/policy' element={<Policy/>}/>
         <Route path="*" element={<PagenotFound/>}/>
      </Routes>
        
     
    </>
  );
}

export default App;
