// import { BrowserRouter } from 'react-router-dom';

import { Navbar } from './components';
import { AppRouter } from './components/AppRouter';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';
import { Loader } from './components/Loader';
import { Context } from './main';

function App() {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {/* <BrowserRouter basename="/chat_fb"> */}
      <Navbar />
      <AppRouter />
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
