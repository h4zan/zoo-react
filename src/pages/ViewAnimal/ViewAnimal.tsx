import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { Loader } from '../../loaders/animalLoader';
import errorImg from '../../assets/errorImg.jpg';
import { feedAnimals } from '../../components/FeedAnimals/FeedAnimals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDrumstickBite, faPaw } from '@fortawesome/free-solid-svg-icons';
import './ViewAnimal.css';

export const ViewAnimal = () => {
  const params = useParams();
  const { animals } = useLoaderData() as Loader;
  const current = animals.find((animal) => animal.name === params.name);

  const handleFeedClick = (): boolean => {
    if (current) {
      feedAnimals(current.name);
      window.location.reload();
      return true;
    } else {
      return false;
    }
  };

  if (!current) {
    return (
      <>
        <Navbar></Navbar>
        <p>Här finns det inge djur, försök igen!</p>
      </>
    );
  } else {
    return (
      <>
        <div className="animalPage">
          <Navbar></Navbar>
          <img
            className="animalPageImg"
            src={current.imageUrl}
            alt={`Photograph of ${current.latinName}`}
            onError={(e) => {
              (e.target as HTMLImageElement).src = errorImg;
              (
                e.target as HTMLImageElement
              ).alt = `Error: Failed to load image for ${current.latinName}, placement image: a landscape with trees and mountains.`;
            }}
          ></img>
          <div className="animalDescription">
            <h3> {current.name}</h3>
            <p>{current.longDescription}</p>
            <p>Född: {current.yearOfBirth}</p>
            <p>Åt senast: {current.lastFed}</p>
            {current && (
              <button onClick={handleFeedClick} disabled={current.isFed}>
                {current.isFed ? (
                  <>
                    {' '}
                    {current.name} är Matad
                    <FontAwesomeIcon
                      icon={faDrumstickBite}
                      className="drumstickBite"
                    />
                  </>
                ) : (
                  <>
                    Mata {current.name}
                    <FontAwesomeIcon icon={faPaw} className="hungry" />
                  </>
                )}
              </button>
            )}
            <Link key={current.name} to="/animals">
              <button>Tillbaka</button>
            </Link>{' '}
          </div>
        </div>
      </>
    );
  }
};
