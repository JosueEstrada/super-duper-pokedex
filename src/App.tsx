import React, { useCallback, useState } from "react";
import { Loading } from "./components/Loading";
import { TypeBadge } from "./components/TypeBadge";
import { usePokemon } from "./hooks/usePokemon";
import { PokemonTypeNames, typeBackground } from "./types/pokemon";

function App() {
  const [searchQuery, setSearchQuery] = useState<string | number>(4);
  const [searchInput, setSearchInput] = useState<string>("");
  const { pokemon, loading, error } = usePokemon(searchQuery);
  const mainType = (pokemon?.types[0]?.type?.name ||
    "normal") as PokemonTypeNames;
  const bgClass = typeBackground[mainType];

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const parsedId = parseInt(searchInput);

      if (isNaN(parsedId)) {
        if (searchInput.trim()) {
          setSearchQuery(searchInput.trim().toLowerCase());
          setSearchInput("");
        }
      } else {
        if (parsedId >= 1 && parsedId <= 386) {
          setSearchQuery(parsedId);
          setSearchInput("");
        }
      }
    },
    [searchInput],
  );

  const handleRandomPokemon = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const randomId = Math.floor(Math.random() * 386) + 1;
    setSearchQuery(randomId);
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;
  if (!pokemon) return null;

  return (
    <>
      <div
        className={`min-h-screen ${bgClass} bg-gradient-to-b from-white/60 to-black/60 bg-blend-soft-light transition-all duration-500`}
      >
        <span className="pointer-events-none fixed inset-0 flex select-none items-center justify-center text-[30vw] font-black text-white/20">
          #{pokemon.id.toString().padStart(3, "0")}
        </span>

        <div className="container mx-auto flex flex-col items-center justify-center text-white">
          <header className="flex w-full max-w-4xl justify-between p-4">
            <form
              onSubmit={handleSearch}
              className="flex items-center gap-2 rounded-lg bg-white/20 p-2 backdrop-blur-sm"
            >
              <input
                type="search"
                name="search"
                value={searchInput}
                placeholder="Buscar aquí"
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full bg-transparent text-white placeholder:text-white/50 focus:outline-none"
              />
              <button type="submit" className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleRandomPokemon}
                className="text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </button>
            </form>
            <button>Filter</button>
          </header>

          <main className="container relative z-10 px-4">
            <article className="mx-auto max-w-4xl rounded-lg p-6">
              <div className="flex flex-col lg:flex-row lg:gap-8">
                <div className="lg:w-1/2">
                  <div className="mb-6">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {pokemon.types.map((type) => (
                        <TypeBadge
                          key={type.type.name}
                          type={type.type.name}
                          size="lg"
                        />
                      ))}
                    </div>
                    <div className="mb-2">
                      <span className="text-sm uppercase text-white/70">
                        {pokemon.types[0].type.name}
                      </span>
                    </div>
                    <h1 className="text-4xl font-bold capitalize">
                      {pokemon.name}
                    </h1>
                  </div>
                  <div className="mb-6">
                    <p className="mb-2">Height: {pokemon.height / 10} m</p>
                    <p>Weight: {pokemon.weight / 10} kg</p>
                  </div>
                  <div>
                    <h2 className="mb-4 text-2xl font-bold">Stats</h2>
                    <ul className="space-y-2">
                      {pokemon.stats.map((stat) => (
                        <li key={stat.stat.name} className="flex items-center">
                          <span className="w-32 capitalize">
                            {stat.stat.name}
                          </span>
                          <div className="ml-2 h-4 flex-1 rounded-full bg-gray-700/30">
                            <div
                              className="h-4 rounded-full bg-white"
                              style={{
                                width: `${(stat.base_stat / 255) * 100}%`,
                              }}
                            ></div>
                          </div>
                          <span className="ml-2 w-8 text-right">
                            {stat.base_stat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-center lg:mt-0 lg:w-1/2">
                  <img
                    src={
                      pokemon.sprites.other["official-artwork"].front_default
                    }
                    alt={pokemon.name}
                    className="h-64 w-64 lg:h-80 lg:w-80"
                  />
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
