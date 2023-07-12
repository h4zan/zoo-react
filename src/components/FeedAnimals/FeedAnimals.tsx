import { IAnimal } from '../../models/IAnimal';
import './FeedAnimals.css';

export const feedAnimals = (animalName: string) => {
  const lsAnimals = localStorage.getItem('theAnimals');
  if (lsAnimals) {
    const parseAnimals: IAnimal[] = JSON.parse(lsAnimals);

    parseAnimals.forEach((animal) => {
      if (animal.name === animalName) {
        animal.isFed = true;
        animal.lastFed = new Date().toLocaleString();
      }
    });

    localStorage.setItem('theAnimals', JSON.stringify(parseAnimals));
    window.location.reload();
    return parseAnimals;
  } else {
    return [];
  }
};
