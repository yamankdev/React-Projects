import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";

const API = "https://pokeapi.co/api/v2/pokemon?limit=100";
const header = { type: "application/json" };

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  //   Pokemon Data Fetching Function
  const fetchPokemon = async () => {
    try {
      const res1 = await fetch(API, header);
      const data1 = await res1.json();
      //   console.log(data1.results);

      const allAPIs = data1.results.map(async (currData) => {
        const res2 = await fetch(currData.url);
        const data2 = await res2.json();
        return data2;
      });
      //   console.log(detailedPokData);

      const detailedRes = await Promise.all(allAPIs);
      setPokemon(detailedRes);
      setLoading(false);
      //   console.log(detailedRes);
    } catch (err) {
      console.log(err.message);
      setError(err);
      setLoading(false);
    }
  };

  //   Removing Side effects while fetching the data
  useEffect(() => {
    fetchPokemon();
  }, []);

  //   Search Function
  const searchPokemon = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase()),
  );
  //   console.log(searchPokemon);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <>
      <section className="container">
        <header>
          <h1>Let's Catch Pokemon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="Search Your Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <ul className="cards">
            {/* return <li key={currPokemon.id}>{currPokemon.name}</li>; */}
            {/* fetchPokemon.map((currPokemon) => { */}
            {searchPokemon.map((currPokemon) => {
              return (
                <PokemonCard key={currPokemon.id} pokemonData={currPokemon} />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
