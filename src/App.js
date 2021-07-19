import './App.css';
import ironhackLogo from './images/ironhack-logo.svg';
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import Card from './Components/Card/Card';



function App() {
  return (
    <div className="App">
      <header className="bg-dark">
        <div className="collapse" id="navbarToggleExternalContent">    
          <div className="bg-dark p-4">
            <h5 className="text-white h4">Collapsed content</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
          <img src={ironhackLogo} alt="Ironhack Logo"/>
            <button className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarToggleExternalContent" 
            aria-controls="navbarToggleExternalContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
        <main className='Main container'>
          <h1 className='mt-5'>Say Hello to<br/>
          ReactJS</h1><br/>
          <p className=''>You will learn how to use<br/>
          the most popular frontend library,<br/>
          and become a super Ninja developer.</p>
          <button type='button' className='btn btn-light mt-5 mb-5 p-3'>Awesome</button>
        </main>
      </header>
      <Card 
        image={icon1}
        tittle="Declarative"
        text="React makes it painless to create interactive UIs."
      />
      <Card 
        image={icon2}
        tittle="Components"
        text="Build ecapsulated components that manage their state."
      />
      <Card 
        image={icon3}
        tittle="Single-Way"
        text="A set of immutable values are passed to the component's."
      />
      <Card 
        image={icon4}
        tittle="JSX"
        text="Statically-typed, designed to run on modern browsers."
      />
    </div>
  );
}

export default App;
