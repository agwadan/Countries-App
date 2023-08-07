import { useState, useEffect } from 'react';
import Header from './components/header';
import Countries from './components/countries';
import ThemeProvider from './theme-provider';

function App() {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    const getCountries = async () => {
      const res = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital');
      const fetchedCountries = await res.json();
      console.log(fetchedCountries);
      setCountries(fetchedCountries);
      setLoading(false);
    }
    getCountries();
  }, []);

  return (
    <ThemeProvider>
      <Header
        search={search}
        setSearch={setSearch}
        region={region}
        setRegion={setRegion}
      />
      {loading ? <p>Loading...</p> :
      
      <Countries
        countries={countries}
        search={search}
        region={region}
      />}
    </ThemeProvider>
  )
}

export default App;
