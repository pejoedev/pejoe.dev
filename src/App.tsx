import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Image from './pages/Image/Image'
import './App.css'

const catImage = '/IMG_1015.JPG'

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/images/cat.jpg" element={<Image imageUrl={catImage} />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App