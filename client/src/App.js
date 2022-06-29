import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { UserProvider } from '../context/user';

function App() {
  return (
    <div className="App">
      <UserProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        {/* <Route path="/posts/new">
            <PostForm />
          </Route>
          <Route path="/posts/:postId/comments">
            <CommentsList />
          </Route>
          <Route path="/posts/:id">
            <PostCard />
          </Route>
          <Route path="/posts">
            <PostsContainer />
          </Route> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/me">
            <Profile />
          </Route> */}
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/logout">
            <Logout />
          </Route> */}
          
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;