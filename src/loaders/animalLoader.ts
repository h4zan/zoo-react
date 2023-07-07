import { IAnimal } from '../models/IAnimal';
import axios from 'axios';

let allAnimals: IAnimal[] = [];

export interface Loader {
  animals: IAnimal[];
}

export const animalLoader = async () => {
  const LsAnimals = localStorage.getItem('theAnimals');
  if (LsAnimals) {
    allAnimals = JSON.parse(LsAnimals);
  } else {
    let res = await axios.get<IAnimal[]>(
      `https://animals.azurewebsites.net/api/animals`
    );
    const animalData = res.data;
    localStorage.setItem('theAnimals', JSON.stringify(res.data));
    allAnimals = animalData;
  }

  const data: Loader = { animals: allAnimals };

  return data;
};
