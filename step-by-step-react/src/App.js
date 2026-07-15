import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Component1 from './2_Props/Component1'; 
import Component2 from './2_Props/Component2'
import State1Number from './3_State/State1Number'
import State2String from './3_State/State2String';
import State3Array from './3_State/State3Array';
import State4Object from './3_State/State4Object'

function App() {
  return (
    <>
      {/* <Component1 studentName="Dustin" studentAge="32" studentCourse="React" />
      <Component1 studentName="Kelvin" studentAge="29" studentCourse="Html" />
      <Component1 studentName="Milies" studentAge="28" studentCourse="css"/>

      <Component2 studentName="Dustin" studentAge="32" studentCourse="React" />
      <Component2 studentName="Kelvin" studentAge="29" studentCourse="Html" /> */}

      {/* <State1Number /> */}
      {/* <State2String /> */}
      {/* <State3Array /> */}
      <State4Object />
    </>
  );
}

export default App;
