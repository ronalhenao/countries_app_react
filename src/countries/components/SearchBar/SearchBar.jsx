import { useContext }  from 'react'
import { CountriesContext } from '../../../Context';

const SearchBar = () => {
  const context = useContext( CountriesContext );

  return (
    <form className='relative mb-12 w-2/5 mx-auto'>
      <label className=' absolute text-xs font-light bottom-1 left-4 text-neutral-300'>Escribe el país que deseas ver</label>
      <input 
        type="text"
        placeholder='País'
        className='shadow-md rounded-xl w-full pt-2 px-4 pb-5  text-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700'
        onChange={ (e) => context.setSearchByTitle(e.target.value) }
      />
    </form>
  )
}

export default SearchBar