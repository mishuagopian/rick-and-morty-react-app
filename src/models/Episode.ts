type Url = string;

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Url[];
  url: Url;
  created: string;
}
