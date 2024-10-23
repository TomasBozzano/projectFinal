import { FaSignOutAlt } from "react-icons/fa";
import { FaStar, FaUser } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {ClearUser} from '../../../store/user'
export function NavBar() {
  const userLog = useSelector((state)=> state.user.userLogged);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const handleLogOut = (e)=>{
    e.preventDefault();
    localStorage.clear('accessToken')
    dispatch(ClearUser())
    nav('/login')
  }
  return (
    <nav className="bg-yellow-300 flex items-center justify-between gap-4">
        <div className="flex items-center justify-center p-4 gap-1">
           <img src="../../appgalery.svg" alt="logo"/>
           <h1>E-Commerce</h1>
        </div>
        <section className=" flex items-center justify-center gap-4 p-4">
            <Link to={'/'}>Home</Link>
            {
              userLog && userLog.name ? (
                  <div className="flex justify-center items-center gap-2">
                    <Link to={'./favorite'} className="flex items-center p-2 gap-1">
                    <FaStar/>
                    Favoritos</Link>
                    <p className="flex items-center justify-center gap-1">{userLog.name}</p>
                    <button className="flex items-center justify-center gap-1" onClick={handleLogOut}><FaSignOutAlt/>Log Out</button>
                  </div>
            ) : <Link to={'./login'}>
              <FaUser/>
              </Link>
            }
        </section>
    </nav>
  )
}
