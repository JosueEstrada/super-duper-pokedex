import { useCallback, useEffect, useState } from "react";
import type { Pokemon } from "../types/pokemon";

export function usePokemon(query: string | number) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchPokemon = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${query.toString().toLowerCase()}`,
      );

      if (!response.ok) {
        throw new Error("Pokemon not found");
      }

      const data = await response.json();
      setPokemon(data);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("Error fetching pokemon"),
      );
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  return { pokemon, loading, error };
}
