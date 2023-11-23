import { createContext, useState, useEffect } from 'react';
import {ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const CountriesContext = createContext();

export const CountriesContextProvider = ({ children }) => {
  // Country Detail - Open/close
  const [isCountryDetailOpen, setIsCountryDetailOpen] = useState(false);
  const openCountryDetail = () => setIsCountryDetailOpen( true );
  const closeCountryDetail = () => setIsCountryDetailOpen( false );

  // Country Detail - Show Country
  const [countryToShow, setCountryToShow] = useState({})

  // Get Countries
  
  // initialize a GraphQL client
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com'
  });

  // write a GraphQL query that asks for names and codes for all countries
  const LIST_COUNTRIES = gql`
    {
      countries(filter: {code: {in: ["AR", "ES", "PE", "IT", "FR", "CO", "CN", "AD", "GB", "EG", "AU", "CH", "CL", "DE", "UY", "PT"]}}) {
        code
        name
        capital
        currency
        languages {
          name
        }
        continent {
          name
        }
      }
    }
  `;
  
  const PIXABAY_API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
  const PIXABAY_API_URL = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=`;

  const RESTCOUNTRIES_API_URL = `https://restcountries.com/v3.1/name`;

  const [countriesList, setCountriesList] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  // Get Countries by Title
  const [searchByTitle, setSearchByTitle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await client.query({
          query: LIST_COUNTRIES,
        });

        if (data) {
          const updatedCountriesList = [];

          // Fetch images from Pixabay
          for (const country of data.countries) {
            const photoResponse = await fetch(`${PIXABAY_API_URL}&q=${country.name} city&image_type=photo&orientation=horizontal`);
            const photoImageData = await photoResponse.json();
            const photoImageURL = photoImageData.hits.length > 0 ? photoImageData.hits[0].webformatURL : null;

            // Fetch flag images 
            const flagResponse = await fetch(`${RESTCOUNTRIES_API_URL}/${country.name}?fields=flags`);
            const flagData = await flagResponse.json();

            const flagImageURL = flagData[0]?.flags?.svg || null ;

            const countryWithImages = {
              ...country,
              photoImage: photoImageURL,
              flagImage: flagImageURL,
            };

            updatedCountriesList.push(countryWithImages);
          }

          setCountriesList(updatedCountriesList);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [client])

  const filteredCountriesByTitle = (countries, searchByTitle) => {
    return countries?.filter( country => country.name.toLowerCase().includes( searchByTitle.toLowerCase() ) )
  }

  useEffect(() => {
    if( searchByTitle ) setFilteredCountries( filteredCountriesByTitle(countriesList, searchByTitle) )
  
  }, [countriesList, searchByTitle ])

  return (
    <CountriesContext.Provider value={{
      openCountryDetail,
      closeCountryDetail,
      isCountryDetailOpen,
      countryToShow,
      setCountryToShow,
      countriesList,
      setCountriesList,
      searchByTitle,
      setSearchByTitle,
      filteredCountries
    }}>
      { children }
    </CountriesContext.Provider>
  )
}