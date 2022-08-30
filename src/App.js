import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Article from "./pages/Article"
import Articles from "./pages/Articles"
import Category from "./pages/Category"
import Categories from "./pages/Categories"
import NewArticle from "./pages/NewArticle"
import NewCategory from "./pages/NewCategory"
import NotFound from "./pages/NotFound"

import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<Article />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:slug" element={<Category />} />
        <Route path="/new-category" element={<NewCategory />} />
        <Route path="/new-article" element={<NewArticle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
