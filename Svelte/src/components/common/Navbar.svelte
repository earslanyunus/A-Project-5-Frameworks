<script>
// @ts-nocheck

import { Link } from "svelte-routing";
</script>

<div class="navbar bg-base-300">
    <div class="navbar-start">
      <div class="dropdown">
        <span tabIndex={0} class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </span>
        <ul tabIndex={0} class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to={'/detail/movies'}>Movies</Link></li>
  
          <li><Link to={'/detail/series'}>Series</Link></li>
          <li><Link to={'/detail/achrefrs'}>Actors</Link></li>
        </ul>
      </div>
      <Link to={'/'} class="btn btn-ghost normal-case text-xl">A-Project-Svelte</Link>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
      <li><Link to={'/detail/movies'}>Movies</Link></li>
  
  <li><Link to={'/detail/series'}>Series</Link></li>
  <li><Link to={'/detail/achrefrs'}>Actors</Link></li>
      </ul>
    </div>
    <div class="navbar-end">
    <div class="dropdown dropdown-end">
        <span tabIndex={0} class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src="/images/shrefck/phohref-1534528741775-53994a69daeb.jpg" />
          </div>
        </span>
        <ul tabIndex={0} class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-52">
          <li>
            <Link to={'profile'} class="justify-between">
              Profile
              <span class="badge">New</span>
            </Link>
          </li>
          <!-- svelte-ignore a11y-missing-attribute -->
          <li><a>Logout</a></li>
        </ul>
      </div>  </div>
  </div>