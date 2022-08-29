import logo from './logo.svg';
import './App.css';
import React, { Component, useContext } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Switch, Route, Redirect } from 'react-router-dom';
import Feed from './components/feed';
import Forget from './components/Forget';
import PageNotFound from './components/PageNotFound';
import Profile from './components/Profile';
import { AuthContext, AuthContextProvider } from './components/AuthContext';
import Kinara from './components/kinara';
import NavBar from './components/NavBar';

function App() {
  return (
    
    <AuthContextProvider>
      
      <Switch>
        
        

        <PrivateRoute comp = {Feed} path = '/feed'>
  
        </PrivateRoute>
        {/* <Route path='/feed'>
          <Feed></Feed>
        </Route> */}

        <Route path='/forget'>
        
          <Forget></Forget>
           
        </Route>

        <RedirectToFeed path='/signin' comp = {SignIn}>

        </RedirectToFeed>
        {/* <Route path='/signin'>
          <SignIn></SignIn>
        </Route> */}

        <RedirectToFeed path = '/signup' comp = {SignUp}>

        </RedirectToFeed>
        {/* <Route path='/signup'>
          <SignUp></SignUp>
        </Route> */}

        <PrivateRoute comp = {Profile} path = '/profile'>

        </PrivateRoute>
        {/* <Route path='/profile'>
          <Profile></Profile>
        </Route> */}

        <Route path = '/kinara'>
          <Kinara></Kinara>
        </Route>

        <Route path='/navbar' component={NavBar}></Route>

        <Route>
          <PageNotFound></PageNotFound>
          
        </Route>
      </Switch>
    </AuthContextProvider>
  );
}

export default App;

function PrivateRoute(props){
  let Component = props.comp;
  let cUser = useContext(AuthContext);

  return(
    <Route
    {...props}
      render={
        (props) =>{
          return cUser != null ? <Component {...props} > </Component>: <Redirect {...props} to="/signin"></Redirect>
        }
      }
      ></Route>
  )
}

function RedirectToFeed(props){
  let Component = props.comp;
  let cUser = useContext(AuthContext);

  return (
    <Route
      {...props}
      render={
        (props) =>{
          return  cUser == null ? <Component></Component> : <Redirect to='/profile'></Redirect>
        }
      }
      ></Route>
  )
}


