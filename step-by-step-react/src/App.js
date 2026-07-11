import './App.css';
import Header from './Component/Header'
import Footer from './Component/Footer'
import R1SingleParent from './1_JsxRules/R1SingleParent';
import R2JavaScriptExecution from './1_JsxRules/R2JavaScriptExecution';
import R3Listing from './1_JsxRules/R3Listing';
import R4Class from './1_JsxRules/R4Class';
import Component1 from './Component/2_Props/Component1'; 
import Component2 from './Component/2_Props/Component2'

function App() {
  return (
    <>
      {/* <R1SingleParent /> */}
      {/* <R2JavaScriptExecution /> */}
      {/* <R3Listing /> */}
      {/* <R4Class /> */}

      <Component1 studentName="Dustin" studentAge="32"  />
      <Component1 studentName="Kelvin" studentAge="29" />
      <Component1 studentName="Milies" studentAge="28" />

      <Component2 studentName="Dustin" studentAge="32" />
      <Component2 studentName="Kelvin" studentAge="29" />
    </>
  );
}

export default App;
