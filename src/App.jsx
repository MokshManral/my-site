import './App.css'
import {Routes,Route} from 'react-router-dom'
import { AboutPage } from './Pages/AboutPage';
import { HomePage } from './Pages/HomePage';
import { ContactPage } from './Pages/ContactPage';
import { NotFoundPage } from './Pages/NotFoundPage';

function App() {
  return(
    <>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='about' element={<AboutPage/>}/>
      <Route path='contacts' element={<ContactPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </>
  );
}

export default App;