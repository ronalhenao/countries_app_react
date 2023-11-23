import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ViewOne from '../pages/ViewOne/ViewOne';
import ViewTwo from '../pages/ViewTwo/ViewTwo';


function CountriesRoutes() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/view-one' element={ <ViewOne /> } />
      <Route path='/view-two' element={ <ViewTwo /> } />
    </Routes>
  )
}

export default CountriesRoutes