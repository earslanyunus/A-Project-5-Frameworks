import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {supabase} from "../../supabase/client.js";
import { useState } from "react";
import { onInput } from "../../store/searchstore.js";

const Navbar = () => {
  const [search, setSearch] = useState('')
const dispatch = useDispatch()
  const user = useSelector((state) => state.authStore.user)
  
  const onSignOut = ()=>{
    supabase.auth.signOut()
  }
  const onType = (e)=>{
    dispatch(onInput(e.target.value))
    setSearch(e.target.value)


           
  }
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to={'/'} className="btn btn-ghost normal-case text-xl">A-Project-React</Link>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      
      <input type="text" value={search} onChange={onType} placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navbar;