import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Countries from './components/countries';
import CountryDetails from './components/countries/countryDetails';
import ThemeProvider from './theme-provider';

function App() {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    const getCountries = async () => {
      const res = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital', {mode: 'cors'});
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
      <Router basename="/Countries-App">
        <Routes>
          <Route path="/" element={<Countries countries={countries} search={search} region={region} loading={loading} />} />
          <Route path="/country/:name" element={<CountryDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App;
