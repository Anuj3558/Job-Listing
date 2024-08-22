
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import CallToAction from './Components/CallToAction';
import FeatureCategories from './Components/FeatureCatArea';
import Footer from './Components/Footer';

import PostArea from './Components/PostArea';
import FindJobs from './Pages/FindJobs';

function App() {
  return (
    <BrowserRouter>
   
      <div className="App">
        <FindJobs />
        <FeatureCategories />
        {/* <PostArea/> */}
        <CallToAction />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
