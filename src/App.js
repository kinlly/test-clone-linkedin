import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import { auth } from './firebase';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdTop from './Adstop';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        //logfed out
        dispatch(logout());
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Header />
        {!user ? (
          <Login />
        ) : (
          <>
            <AdTop/>
            <div className="app__body">

              <Switch>
                <Route path='/settings' >

                </Route>

                <Route path='/' >
                  <Sidebar />
                  <Feed />
                  <Widgets />
                </Route>

              </Switch>

            </div>
            </>
          )
        }
      </div>
    </Router>
  );
}

export default App;
