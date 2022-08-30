import { useState, useEffect } from "react"
import Layout from "../layout/Layout"

const Home = () => {
  //states
  const [title, setTitle] = useState("")

  //didMount
  useEffect(() => {
    fetchData()
  }, [])

  // methodes
  const fetchData = async () => {
    const request = await fetch("http://localhost:5000/")
    const response = await request.json()
    setTitle(response)
  }

  return <Layout title={title} />
}
export default Home
