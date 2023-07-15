import { IAnimal } from '../../models/IAnimal';
import { DateTime } from 'luxon';

export const feedAnimals = (animalName: string) => {
  const lsAnimals = localStorage.getItem('theAnimals');
  if (lsAnimals) {
    const parseAnimals: IAnimal[] = JSON.parse(lsAnimals);

    parseAnimals.forEach((animal) => {
      if (animal.name === animalName) {
        animal.isFed = true;
        const currentDate = DateTime.local();
        animal.lastFed = currentDate.toISO()!;
      }
    });

    localStorage.setItem('theAnimals', JSON.stringify(parseAnimals));
    window.location.reload();
    return parseAnimals;
  } else {
    return [];
  }
};
