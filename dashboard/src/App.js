import './App.css';
import './dashboard.css'
import Sidebar from './components/sidebar.js'
import Reviews from './components/reviews.js'
import Average from './components/average.js'
import Analysis from './components/sanalysis.js'
import Visitors from './components/visitors.js'


function App() {
  return (
    <div className="App">
      <Sidebar />
      <Reviews reviewNum="2,500" />
      <Average ratingNum="5.0" />
      <Analysis sentimentNum="100" sentimentNum1="200" sentimentNum2="300" />
      <Visitors visitorNum="100" />
      
    </div>
  );
}

export default App;
