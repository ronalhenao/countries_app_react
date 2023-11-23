import { Route, Routes } from 'react-router-dom';
import CountriesRoutes from '../countries/routes/CountriesRoutes';


function AppRouter() {
  return (
    <>
      <Routes>
        {/* CountriesApp */}
        <Route path='/*' element={ <CountriesRoutes /> } />
      </Routes>
      
    </>
  )
}

export default AppRouter