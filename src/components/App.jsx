
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx';
import { useEffect, useState } from 'react';
import { api }from '../utils/api.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log("No se logró obtener la información del usuario:", err);
      });
  }, []);
  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header />
          <Main />
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </>
  )
}

export default App
