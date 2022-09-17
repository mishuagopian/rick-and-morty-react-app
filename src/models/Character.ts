export interface Origin {
  name: string;
  link: string;
}

export interface Location {
  name: string;
  link: string;
}

export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
