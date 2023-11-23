import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <aside className=" bg-blue-700 fixed top-0 left-0 z-40 w-64 h-screen py-6 px-6">
      <h1 className="bg-white rounded-lg text-center font-bold w-auto mx-auto p-4 mb-5 text-xl">Countries App</h1>
      <nav>
        <ul>
          <li className="text-base text-white font-semibold mb-2">
              <NavLink to='/' >Home</NavLink>
          </li>
          <li className="text-base text-white font-semibold mb-2">
              <NavLink to='/view-one'>Vista 1</NavLink>
          </li>
          <li className="text-base text-white font-semibold mb-2">
              <NavLink to='/view-two'>Vista 2</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Navbar