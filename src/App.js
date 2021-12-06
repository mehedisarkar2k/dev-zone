import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import BlogPage from './Pages/BlogPage/BlogPage';
import Contact from './Pages/Contact/Contact';
import Faq from './Pages/Faq/Faq';
import Content from './Pages/Home/Content/Content';
import Home from './Pages/Home/Home';
import Latest from './Pages/Home/Latest/Latest';
import Top from './Pages/Home/Top/Top';
import ReadingList from './Pages/ReadingList/ReadingList';
import Sponsors from './Pages/Sponsors/Sponsors';
import Tags from './Pages/Tags/Tags';
import Videos from './Pages/Videos/Videos';
import ZoneShop from './Pages/ZoneShop/ZoneShop';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="/" element={<Content />} />
                    <Route path="/latest" element={<Latest />} />
                    <Route path="/top" element={<Top />} />
                </Route>
                <Route path="/readinglist" element={<ReadingList />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/tags" element={<Tags />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/shop" element={<ZoneShop />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* blog */}
                <Route path="/blog/:title" element={<BlogPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
