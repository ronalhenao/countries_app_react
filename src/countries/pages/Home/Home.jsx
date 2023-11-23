import { useContext } from 'react';
import { CountriesContext } from '../../../Context';
import Country from '../../components/Country/Country';
import SearchBar from "../../components/SearchBar/SearchBar"
import CountriesLayout from "../../layout/CountriesLayout"
import CountryDetail from '../../components/CountryDetail/CountryDetail';

function Home() {
  const context = useContext( CountriesContext );

  const renderView = () => {
    if( context.searchByTitle?.length > 0 ) {
      if( context.filteredCountries?.length > 0 ) {
        return (
          context.filteredCountries?.map( country => (
            <Country key={country.code} country={country} />
          ) )
        )
      } else {
        return (
          <p>No Countries Found</p>
        )
      }
    } else {
      return (
        context.countriesList?.map(country => (
          <Country key={country.code} country={country} />
        ))
      )
    }
  };

  return (
    <CountriesLayout>
      <SearchBar />
      <section className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8'>
        { renderView() }
      </section>
      <CountryDetail />
    </CountriesLayout>
  )
}

export default Home