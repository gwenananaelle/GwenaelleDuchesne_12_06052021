import './styles/App.css';
import NavigationBar from './components/NavigationBar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <NavigationBar />
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
