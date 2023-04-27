import './Assets/App.css';
import ErrorBoundary from './Components/errorBoundary/ErrorBoundary';
import Navbar from './Components/navbar/Navbar';
import Router from './Router/Router'


function App() {
  return (
    <>
    <ErrorBoundary>
      <Navbar />
      <Router>
      </Router>
    </ErrorBoundary>
    </> 
  ); 
}

export default App;
