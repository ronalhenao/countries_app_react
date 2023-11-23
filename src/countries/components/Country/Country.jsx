import React, { useContext } from 'react';
import { CountriesContext } from '../../../Context'

function Country({ country }) {
  const context = useContext( CountriesContext );

  function showCountry ( countryDetail ) {
    context.openCountryDetail();
    context.setCountryToShow(countryDetail)
  }

  return (
    <article
      onClick={ () => showCountry(country) }
      className='rounded-xl shadow-md overflow-hidden cursor-pointer'>
      <img src={country.photoImage} alt={`${country.name}`} className=' h-48 w-full object-cover' />
      <div className='bg-white flex items-start px-6 py-3 gap-3'>
        <img src={country.flagImage} alt={`${country.name}`} className=' h-9 w-12 object-cover' />
        <div>
          <h2 className=' text-blue-700 font-semibold leading-4'>{country.name}</h2>
          <h3 className=' text-neutral-400 font-normal'>{country.continent.name}</h3>
        </div>
      </div>
    </article>
  )
}

export default Country