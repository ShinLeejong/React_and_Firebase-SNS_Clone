import { useEffect, useState } from 'react';
import { authentication } from 'myFireBase';
import { createStore } from 'redux';
import reducer, { ADD, DESTROY } from './Reducer';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';

// In this reducer, state stands for the informations of current user
export const store = createStore(reducer);

function App() {
  const [init, setInit] = useState(false);

  const getInfo = store.getState();

  useEffect(() => {
    authentication.onAuthStateChanged((user) => {
      if(user){   
        const isLoggedIn = true;
        const {email, emailVerified, uid, metadata:{creationTime, lastSignInTime}, photoURL, displayName, isAnonymous} = user;
        const dispatcher = {type: ADD, email, emailVerified, uid, creationTime, lastSignInTime, photoURL, displayName, isAnonymous, isLoggedIn};
        store.dispatch(dispatcher);
      }
      setInit(true);
    });
    return () => store.dispatch({type: DESTROY});
  }, []);
  
  return (
    <div id="background" className="min-h-screen bg-gradient-to-b from-white via-yellow-100 to-green-50">
      <section id="wrap" className="ml-3 mr-3 mt-3 bg-transparent text-base caret-transparent">
        <Header getInfo={getInfo} /> 
        <Container init={init} />
        <Footer />      
      </section>      
    </div>
  );
}

export default App;
