import './styles/App.css';
import { Outlet } from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <NavigationBar />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
