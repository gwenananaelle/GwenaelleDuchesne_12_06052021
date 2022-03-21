import './styles/App.css';
import NavigationBar from './components/NavigationBar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <NavigationBar />
      <Sidebar />
      <h1>Bonjour Thomas</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default App;
