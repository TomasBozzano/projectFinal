import { FaSignOutAlt } from "react-icons/fa";
import { FaStar, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="bg-yellow-300 flex items-center justify-between gap-4">
        <div className="flex items-center justify-center p-4 gap-1">
           <img src="../../appgalery.svg" alt="logo"/>
           <h1>E-Commerce</h1>
        </div>
        <section className=" flex items-center justify-center gap-4 p-4">
            <Link to={'./home'}>Home</Link>
            <Link to={'./login'}>{
              <FaUser/> ? 'null' : (
              <Link to={'./favorite'}><FaStar/></Link>,
              <Link to={'./'}><FaSignOutAlt/></Link>
            ) 
            }</Link>
        </section>
    </nav>
  )
}
