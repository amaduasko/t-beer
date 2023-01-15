export type TBeer = {
  id: number;
  name: string;
  tagline: string;
  description: string;
  abv: number;
  image_url: string;
  food_pairing: string[];
};

export type TBeers = TBeer[];
