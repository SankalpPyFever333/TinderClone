

import './App.css';
import Header from './Header';
import Swipebuttons from './Swipebuttons';
import TinderCards from './TinderCards';
function App() {
  return (
    <div className="App">
      {/* 1. Header 
          2. Tinder cards 
          3. Footer*/}
      <Header />
      <TinderCards />
      {/* swipe buttons */}
      <Swipebuttons/>
      {/* Till now we are done with front-end */}

      {/* Now, we hvae to create a express server which will connect with mongoDB */}
      {/* All the backend done in another folder. */}

      {/* You should go to that folder and type npm init. This command will initialise a node js application and ask some question and make a package.json file which contains the metadata of the project. */}
    </div>
  );
}

export default App;
