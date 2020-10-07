import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Container } from 'reactstrap';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Profile from './components/Profile';
import Users from './components/Users';
import Login from './components/Login';
import Register from './components/Register';
import Category from './components/Category';
import FileUpload from './components/FileUpload';
import Blog from './components/Blog';
import BlogForm from './components/BlogForm';
import BlogDetail from './components/BlogDetail';

function App() {
  return (
    <div >
      <Header />
      <Container fluid ={true}>
      <Route path='/' exact={true} component={Home} />
      <Route path='/about' component={About} />
      <Route path='/products' component={Products} />
      <Route path='/profile' component={Profile} />
      <Route path='/users' component={Users} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/category' component={Category} />
      <Route path='/blog' component={Blog} />
      <Route path='/blogform' component={BlogForm} />
      <Route path='/blog/:id' component={BlogDetail} />
      <Route path='/fileupload' component={FileUpload} />
     </Container>

      <Footer />
    </div>
  );
}

export default App;
