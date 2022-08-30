import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="">
      <ul className="flex gap-12 text-m text-gray-700 font-semibold">
        <li className="title-hover">
          <Link to="/">Home</Link>
        </li>
        <li className="title-hover">
          <Link to="/new-article">New Article</Link>
        </li>
        <li className="title-hover">
          <Link to="/new-category">New Category</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
