import './Assets/App.css';
import Navbar from './Components/navbar/Navbar';
import Router from './Router/Router'
import ErrorBoundary from './Components/errorBoundary/ErrorBoundary'


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
