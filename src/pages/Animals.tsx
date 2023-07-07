import { Link, useLoaderData } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Loader } from '../loaders/animalLoader';
import errorImg from '../assets/errorImg.jpg';

export const Animals = () => {
  const { animals } = useLoaderData() as Loader;

  return (
    <>
      <div className="animalsListPage">
        <Navbar></Navbar>

        <h2>Här visas alla djur som finns på vår anläggning. </h2>
        <p>
          Vår samling består av djur från hela världen och vi är stolta över att
          kunna ge våra besökare möjlighet att uppleva dem på nära håll.
        </p>

        {animals.map((animal) => {
          return (
            <div key={animal.name} className="animalsContainer">
              <div className="animalImgOnList">
                <img
                  className="animalImg"
                  src={animal.imageUrl}
                  alt={`Photograph of ${animal.latinName}`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).onerror = null;
                    (e.target as HTMLImageElement).src = errorImg;
                  }}
                ></img>
              </div>
              <h3>{animal.name}</h3>
              <p>{animal.shortDescription}</p>
              <p>Åt senast: {animal.lastFed}</p>
              <Link to={animal.name}>
                <button>Mer om {animal.name}</button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};