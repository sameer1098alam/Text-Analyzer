import './Appa.css';
import Navbar from '.src/Navbar';
import TextForm from '.src/TextForm';


function App() {
  return (
    <>
      <div className="App">   
        <Navbar title="my-app"/>
        <div className="container">
          <TextForm heading="Enter the text to analyze"/>
        </div>
      </div>    
    </>
  );
}

export default App;
