interface PokemonType {
  type: {
    name: string;
  };
}

interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  types: PokemonType[];
  stats: PokemonStat[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  weight: number;
  height: number;
}

export type PokemonTypeNames =
  | "normal"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dark"
  | "dragon"
  | "steel"
  | "fairy";

export interface TypeEmoji {
  name: PokemonTypeNames;
  emoji: string;
  color: string;
}

export interface TypeBadgeProps {
  type: PokemonTypeNames;
  size?: "sm" | "md" | "lg";
}

export const typeEmojis: Record<PokemonTypeNames, TypeEmoji> = {
  normal: { name: "normal", emoji: "⭕", color: "bg-gray-400" },
  fire: { name: "fire", emoji: "🔥", color: "bg-red-500" },
  water: { name: "water", emoji: "💧", color: "bg-blue-500" },
  grass: { name: "grass", emoji: "🌱", color: "bg-green-500" },
  electric: { name: "electric", emoji: "⚡", color: "bg-yellow-400" },
  ice: { name: "ice", emoji: "❄️", color: "bg-blue-200" },
  fighting: { name: "fighting", emoji: "👊", color: "bg-red-700" },
  poison: { name: "poison", emoji: "☠️", color: "bg-purple-500" },
  ground: { name: "ground", emoji: "🌍", color: "bg-yellow-600" },
  flying: { name: "flying", emoji: "🦅", color: "bg-blue-300" },
  psychic: { name: "psychic", emoji: "🔮", color: "bg-pink-500" },
  bug: { name: "bug", emoji: "🐛", color: "bg-green-600" },
  rock: { name: "rock", emoji: "🪨", color: "bg-yellow-800" },
  ghost: { name: "ghost", emoji: "👻", color: "bg-purple-700" },
  dark: { name: "dark", emoji: "🌑", color: "bg-gray-800" },
  dragon: { name: "dragon", emoji: "🐉", color: "bg-indigo-600" },
  steel: { name: "steel", emoji: "⚙️", color: "bg-gray-500" },
  fairy: { name: "fairy", emoji: "✨", color: "bg-pink-300" },
};

export const typeBackground: Record<PokemonTypeNames, string> = {
  fire: "bg-fire",
  grass: "bg-grass",
  steel: "bg-steel",
  water: "bg-water",
  psychic: "bg-psychic",
  ground: "bg-ground",
  ice: "bg-ice",
  flying: "bg-flying",
  ghost: "bg-ghost",
  normal: "bg-normal",
  poison: "bg-poison",
  rock: "bg-rock",
  fighting: "bg-fighting",
  dark: "bg-dark",
  bug: "bg-bug",
  dragon: "bg-dragon",
  electric: "bg-electric",
  fairy: "bg-fairy",
};
