// import Login from './components/Login';
// import Person from './components/Person';

// import UseEffectDemo from './components/UseEffectDemo';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Menu from './Routing/Menu';
import Home from './Routing/Home';
import Todo from './components/Todo';
import PageNotFound from './Routing/PageNotFound';
import Login from './components/Login';
import ApiUser from './Routing/ApiUser';
import UserDetails from './Routing/UserDetails';
import AddUser from './Routing/AddUser';
import EditUser from './Routing/EditUser';
import ReactForm from './Routing/ReactForm';
import Quiz from './QuizApp/Quiz';

function App() {
  

  return (
     <BrowserRouter>
          <Menu/>
          <Routes>
               <Route path='/' element={<Navigate to='/home'/>}/>
               <Route path='/home' element={<Home/>} />
               <Route path='/todo' element={<Todo/>} />
               <Route path='/users' element={<ApiUser/>} />
               <Route path='/users/details' element={<UserDetails/>} />
               <Route path='/users/create' element={<AddUser/>} />
               <Route path='/users/edit' element={<EditUser/>} />
               <Route path='/form' element={<ReactForm/>} />
               <Route path='/login' element={<Login/>} />
               <Route path='/quiz' element={<Quiz/>} />
               <Route path='*' element={<PageNotFound/>} />
          </Routes>
     </BrowserRouter>
     
  );
}

export default App;

