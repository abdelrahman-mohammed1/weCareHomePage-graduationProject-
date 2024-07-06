
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'
import SignUp from './pages/SignUp'
export default function App() {
  const location = useLocation();
  console.log(location);
  const currentLocation = location.pathname.split('/')[1];

  console.log(currentLocation)
  return (
    <div>
      <Header currentLocation={currentLocation} />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{ marginTop: '80px' }} />
    </div>
  )
}

