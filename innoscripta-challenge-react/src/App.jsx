import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Category from "./pages/category.jsx";
import Article from "./pages/article.jsx";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/category/:slug'} element={<Category/>}/>
                <Route path={'/article/:slug'} element={<Article/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
