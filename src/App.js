import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogPage from './Pages/BlogPage/BlogPage';
import Home from './Pages/Home/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog/:title" element={<BlogPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
