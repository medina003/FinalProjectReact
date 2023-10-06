import './App.css'; 
import { useDispatch, useSelector } from 'react-redux'; 
import All from './pages/All';
import Done from './pages/Done';
import Remainded from './pages/Remainded';
import Edit from './pages/Edit/Edit'; 
import ErrorPage from './error-page'; 
import {Route,Routes} from 'react-router-dom'
import {Link} from "react-router-dom"
import Buttons from "./Components/Buttons/Buttons"

function App() {  
  const tasks = useSelector(store=>store.checklistReducer)
  const dispatch = useDispatch();
  
  return ( 
     <>
        <Buttons/>
        <Link to="/"> </Link> 
        <Link to="/edit"> </Link> 
        <Link to="/done"> </Link> 
        <Link to="/remainded"> </Link> 
        <Routes>  
          <Route exact path="/" element={<All/>}></Route>
          <Route exact path="/done" element={<Done/>}></Route>
          <Route exact path="/remainded" element={<Remainded/>}></Route>
          <Route exact path="/edit/:taskId" element={<Edit />} />
          <Route exact path="/edit/:errorPage" element={<ErrorPage />} />
        </Routes>
     </>
  );
}
  
export default App;

