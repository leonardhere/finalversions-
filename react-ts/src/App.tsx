import {Route, Routes} from 'react-router-dom'
import {ProductPage} from '../src/pages/ProductPage'
import {AboutPage} from '../src/pages/AboutPage'
import Navigation from './components/Navigation'


function App() {
  return(
    <>
    <Navigation/>
    <Routes>
      <Route path='/' element={<ProductPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
    </Routes>
    </>
  )
}

export default App;
