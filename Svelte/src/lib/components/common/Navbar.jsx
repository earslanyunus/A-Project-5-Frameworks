import { A } from "@solidjs/router";
const Navbar = () =>{
    return(
        <div className="navbar bg-base-300">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><A href={'/detail/movies'}>Movies</A></li>

        <li><A href={'/detail/series'}>Series</A></li>
        <li><A href={'/detail/achrefrs'}>Achrefrs</A></li>
      </ul>
    </div>
    <A href={'/'} className="btn btn-ghost normal-case text-xl">A-Project</A>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><A href={'/detail/movies'}>Movies</A></li>

<li><A href={'/detail/series'}>Series</A></li>
<li><A href={'/detail/achrefrs'}>Achrefrs</A></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/shrefck/phohref-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-52">
        <li>
          <A href={'profile'} className="justify-between">
            Profile
            <span className="badge">New</span>
          </A>
        </li>
        <li><a>Logout</a></li>
      </ul>
    </div>  </div>
</div>
    )
}

export default Navbar;