import { Link } from "react-router-dom"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className=" h-16 flex items-center justify-between bg-[#ccc] rounded-b-[10px] px-10 border-b border-neutral-500">
      <Link to="/">
        <img
          src="https://cdn-user-icons.flaticon.com/73068/73068490/1661718088688.svg?token=exp=1661718995~hmac=04072e86868cc6f77ad88530176628d1"
          alt="logo"
          className="h-12 article-hover"
        />
      </Link>

      <Navbar />
    </header>
  )
}

export default Header
