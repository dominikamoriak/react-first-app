import Container from './components/Container/Container.js';
import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js';
import Favorite from './components/Favorite/Favorite.js';
import About from './components/About/About.js';
import { Routes, Route } from 'react-router-dom';
import NoMatch from './components/NoMatch/NoMatch.js';
import List from './components/List/List.js';
import NoCards from './components/NoCards/NoCards.js';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="/noCards" element={<NoCards />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;