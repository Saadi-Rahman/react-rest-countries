import './App.css';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

/* function LoadCountries() {
  const [countries, setCountries] = useState([]);

  // useEffect( ()=>{}, []);
  useEffect( ()=>{

    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))

  }, []);

  return (
    <div>
      <h2>Available Countries: {countries.length}</h2>
      {
        countries.map(country => <Country name={country.name} population={country.population}></Country>)
      }
    </div>
  )
}

function Country(props){
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Population: {props.population}</p>
    </div>
  )
} */

export default App;
