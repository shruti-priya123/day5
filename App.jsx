import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // For icons
import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome for fa icons (need to install or CDN)
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <div className="min-vh-100 bg-light">
      <Resume />
    </div>
  );
}

export default App;
