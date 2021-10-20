import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './Components/About/About';
import Error from './Components/Error/Error';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Description from './Components/Health/Description/Description';
import Health from './Components/Health/Health';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import ThumbsUp from './Components/ThumbsUp/ThumbsUp';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className='top-space'>
     <AuthProvider>
     <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={['/','/home']}>
            <Home />
          </Route>
          <Route exact path='/health'>
            <Health />
          </Route>
          <PrivateRoute exact path='/description'>
            <Description />
          </PrivateRoute>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <PrivateRoute exact path='/thumbs-up'>
            <ThumbsUp />
          </PrivateRoute>
          <Route>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
