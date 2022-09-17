export interface Origin {
  name: string;
  link: string;
}

export interface Location {
  name: string;
  link: string;
}

export const status = ["Alive", "Dead", "unknown"] as const;
export type CharacterStatus = typeof status[number];

export const genders = ["Female", "Male", "Genderless", "unknown"] as const;
export type CharacterGender = typeof genders[number];

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
