
import './App.css';

import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

function App() {
  return (
    <>
     {/* navbar is componenent */}
    <Navbar title="TextUtils" abouttext="About TextUtils"/>
    <div className="container my-3">
    <TextForms heading="Enter the text to analyze below"/>
    </div>

    </>
  );
}

export default App;
