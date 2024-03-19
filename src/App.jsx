import './App.css';
import Add from './Components/Add';
import Admin from './Components/Admin';
import Edit from './Components/Edit';
import Footer from './Components/Footer';
import Header from './Components/Header';
import PageNotFound from './Components/PageNotFound';
import View from './Components/View';
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* http://localhost:3000 */}
        <Route path='/' element={<Admin />} />
        {/* http://localhost:3000/add */}
        <Route path='add' element={<Add />} />
        {/* http://localhost:3000/view/3 */}
        <Route path='view/:id' element={<View />} />
        {/* http://localhost:3000/edit/3 */}
        <Route path='edit/:id' element={<Edit />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;