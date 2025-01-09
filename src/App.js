import logo from './logo.svg';
import './App.css';
import Aboutus from './pages/aboutus/aboutus';
import { isLogin, isOtpLogin } from './utils/helper';
import Registration from './pages/registration/registration';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './pages/loginPage/loginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';
import Signup from './pages/signup/signup';
import Welcome from './pages/welcomePage/welcome';

function App() {

  function PublicRoute({children, redirectTo}) {
    return !isLogin() ? <Navigate to= {redirectTo} /> : children
  }

  function PrivateRoute({children, redirectTo}) {
    return isLogin() ? <Navigate to= {redirectTo} /> : children
  }

  function ProtectedRoute({children, redirectTo}) {
    return !isOtpLogin() ? <Navigate to= {redirectTo} /> : children
  }

  return (
    <div className="App">
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registration />} />
          <Route path='/register' element={<PrivateRoute redirectTo={'/about-us'}><LoginPage /></PrivateRoute>} />
          <Route path='/login' element={<PrivateRoute redirectTo={'/about-us'}><Signup /></PrivateRoute>} />
          <Route path="/registration" element = {<PublicRoute redirectTo={'/'}><Registration /></PublicRoute>} />
          <Route path="/about-us" element = {<PublicRoute redirectTo={'/'}><Aboutus /></PublicRoute>} />
          <Route path="/home" element = {<ProtectedRoute redirectTo={'/'}><Welcome /></ProtectedRoute>} />
          {/* <Route path="/" element = {<Aboutus />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
