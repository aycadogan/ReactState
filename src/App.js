import './style.css';
import Header from './Header'
import SampleState from './SampleState';
import SectionA from './Section/SectionA';
import SectionB from './Section/SectionB';
import SectionC from './Section/SectionC';

function App() {
  return (
    <div className="App">
     <Header />
     <SampleState />
     <hr />
     <SectionA /> 
     <SectionB />
     <SectionC />
    </div>
  );
}

export default App;
