import Header from "../components/Header"
import Main from "../components/Main"
import NavBar from "../components/Navbar"

const Layout = ({ children, title }) => {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Main title={title}>{children}</Main>
    </>
  )
}

export default Layout
