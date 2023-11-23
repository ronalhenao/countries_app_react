import { useContext } from 'react';
import { CountriesContext } from '../../../Context'

import '../CountryDetail/styles.css'

function CountryDetail() {
  const context = useContext( CountriesContext )
  const { name, continent, photoImage, flagImage, capital, currency, languages } = context.countryToShow;
  
  return (
    <aside
      className={`${ context.isCountryDetailOpen ? 'flex': 'hidden' } flex-col fixed right-0 bg-white px-8 py-10 shadow-md country-detail`}>
      <span
        onClick={ () => context.closeCountryDetail() }
        className=' absolute right-2 top-2 font-semibold text-base cursor-pointer p-2 text-neutral-500'
      >X</span>
      <figure className='rounded-xl overflow-hidden mb-6'>
        <img src={ photoImage }  alt={ name } className=" h-72 w-full object-cover" />
      </figure>
      <div className='flex items-start gap-3 mb-2'>
        <img src={ flagImage } alt={ name } className=' h-9 w-12 object-cover' />
        <div>
          <h2 className=' text-blue-700 font-semibold leading-4'>{ name }</h2>
          <h3 className=' text-neutral-400 font-normal'>{continent && ( continent.name )}</h3>
        </div>
      </div>
      <p className='text-blue-700 font-semibold'>Capital: <span className='text-neutral-400 font-normal mb-1'>{ capital }</span></p>
      {languages && (<p className='text-blue-700 font-semibold'>Language: <span className='text-neutral-400 font-normal mb-1'>{languages.map(language => language.name).join(', ')}</span></p>)}
      <p className='text-blue-700 font-semibold'>Currency: <span className='text-neutral-400 font-normal mb-1'>{ currency }</span></p>

    </aside>
  )
}

export default CountryDetail