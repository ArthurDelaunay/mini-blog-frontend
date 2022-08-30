import { useState, useEffect } from "react"

import Layout from "../layout/Layout"
import Form from "../components/Form"

const NewArticle = () => {
  // states
  const [options, setOptions] = useState([])
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [errors, setErrors] = useState("")

  // didMount, didUpdate
  useEffect(() => {
    fetchCategories()
  }, [])
  // methodes

  const fetchCategories = async () => {
    const request = await fetch("http://localhost:5000/categories")
    const response = await request.json()
    const currentOptions = [
      { slug: "", name: "Select a category" },
      ...response,
    ]
    setOptions(currentOptions)
  }
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value)
  }
  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const handleArticleSubmit = async (e) => {
    e.preventDefault()
    const newArticle = {
      title,
      author,
      description,
      category,
    }
    const request = await fetch("http://localhost:5000/articles/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArticle),
    })
    const response = await request.json()
    // console.log(response)
    // console.log(request.status)
    if (request.status === 500) {
      console.log(response)
    } else {
      setTitle("")
      setAuthor("")
      setDescription("")
      setCategory("")
      setErrors([])
    }
  }
  return (
    <Layout title="New Article">
      <Form
        // options={options}
        formTitle="Article"
        handleSubmit={handleArticleSubmit}
        // handleCategoryChange={handleCategoryChange}
        errors={errors}
        selectsProps={[
          {
            label: "category",
            handleChange: handleCategoryChange,
            value: category,
            options: options,
          },
        ]}
        inputsProps={[
          {
            label: "title",
            handleChange: handleTitleChange,
            value: title,
            type: "text",
            placeholder: "enter your title..",
          },
          {
            label: "author",
            handleChange: handleAuthorChange,
            value: author,
            type: "text",
            placeholder: "enter your author..",
            errors: [],
          },
        ]}
        textAreasProps={[
          {
            rows: 10,
            handleChange: handleDescriptionChange,
            placeholder: "Write your article..",
            label: "Content",
            value: description,
          },
        ]}
      />
    </Layout>
  )
}

export default NewArticle
