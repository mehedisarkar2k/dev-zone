import Content from './Pages/Home/Content/Content';
import LeftNav from './Pages/Home/LeftNav/LeftNav';
import RightNav from './Pages/Home/RightNav/RightNav';

function App() {
    return (
        <div>
            <div className="my-container">
                <div>
                    <LeftNav />
                </div>
                <div>
                    <Content />
                </div>
                <div>
                    <RightNav />
                </div>
            </div>
        </div>
    );
}

export default App;
