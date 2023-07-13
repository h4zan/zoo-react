import { IAnimal } from '../../models/IAnimal';

export const feedAnimals = (animalName: string) => {
  const lsAnimals = localStorage.getItem('theAnimals');
  if (lsAnimals) {
    const parseAnimals: IAnimal[] = JSON.parse(lsAnimals);

    parseAnimals.forEach((animal) => {
      if (animal.name === animalName) {
        animal.isFed = true;
        const currentDate = new Date().toLocaleString();
        if (currentDate !== 'Invalid Date') {
          animal.lastFed = currentDate;
        } else {
          animal.lastFed = '';
        }
      }
    });

    localStorage.setItem('theAnimals', JSON.stringify(parseAnimals));
    window.location.reload();
    return parseAnimals;
  } else {
    return [];
  }
};
