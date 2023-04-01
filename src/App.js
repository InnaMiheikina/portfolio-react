import './App.css';
import Header from "./header/header";
import Main from "./main/Main";
import Skills from "./skils/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";



function App() {
  return (
    <div className="App">
    <Header />
      <Main />
      <Skills />
      <Projects/>
      <Contacts />
    </div>
  );
}

export default App;
