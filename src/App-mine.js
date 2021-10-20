import NavBar from './NavBar.js';
import Hero from './Hero.js';

function App() {
  return (
    <div>
      <NavBar Link1 = "Home" Link2 = "About" Link3 = "Products" Link4 = "Contact us" Link5 = "FAQs"></NavBar>
      <Hero Title="This is a new title" Desc="This is a new description"></Hero>
    </div>
  );
}

export default App;
