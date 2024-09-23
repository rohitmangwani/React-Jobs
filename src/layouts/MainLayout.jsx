import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <>  <Navbar/>
        <Outlet></Outlet>
        <ToastContainer/>
    </>
  )
}

export default MainLayout
