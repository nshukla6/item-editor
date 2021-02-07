import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Aside from './components/Aside';


function App() {
  return (
    <div>
      <Header heading="Item Editor" />
      <div className="main-page">
        <Sidebar />
        <Aside />
      </div>
      
    </div>
  );
}

export default App;
