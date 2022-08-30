import { useState } from "react"
import Layout from "../layout/Layout"
import Form from "../components/Form"

const NewCategory = () => {
  // states
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [errors, setErrors] = useState("")

  // didMount, didUpdate
  // useEffect(() => {
  // }, [])
  // methodes

  // const fetchCategories = async () => {
  //   const request = await fetch("http://localhost:5000/categories")
  //   const response = await request.json()
  //   const currentOptions = [
  //     { slug: "", name: "Select a category" },
  //     ...response,
  //   ]
  //   setOptions(currentOptions)
  // }
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const handleCategorySubmit = async (e) => {
    e.preventDefault()
    const NewCategory = {
      name,
      description,
    }
    const request = await fetch("http://localhost:5000/categories/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(NewCategory),
    })
    const response = await request.json()
    if (request.status === 200) {
      setName("")
      setDescription("")
      setErrors([])
    } else {
      console.log(response)
    }
  }
  return (
    <Layout title="New Category">
      <Form
        // options={options}
        formTitle="Category"
        handleSubmit={handleCategorySubmit}
        // handleCategoryChange={handleCategoryChange}
        errors={errors}
        inputsProps={[
          {
            label: "Category name",
            handleChange: handleNameChange,
            value: name,
            type: "text",
            placeholder: "enter the category name..",
          },
        ]}
        textAreasProps={[
          {
            rows: 5,
            handleChange: handleDescriptionChange,
            placeholder: "Write the category description..",
            label: "Description",
            value: description,
          },
        ]}
      />
    </Layout>
  )
}

export default NewCategory
