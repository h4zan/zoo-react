import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { Loader } from '../../loaders/animalLoader';
import errorImg from '../../assets/errorImg.jpg';
import { feedAnimals } from '../../components/FeedAnimals/FeedAnimals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDrumstickBite, faPaw } from '@fortawesome/free-solid-svg-icons';
import './ViewAnimal.css';
import { useState } from 'react';
import { ErrorPage } from '../Error/ErrorPage';
import { DateTime } from 'luxon';
import { formatDate } from '../../components/FormatDate/FormatDate';

export const ViewAnimal = () => {
  const params = useParams();
  const { animals } = useLoaderData() as Loader;
  const [current, setCurrent] = useState(
    animals.find((animal) => animal.name === params.name)
  );

  const handleFeedClick = () => {
    if (current) {
      const lastFedTime = DateTime.fromISO(current.lastFed);
      const currentTime = DateTime.now();

      const isOverThreeHours =
        currentTime.diff(lastFedTime, 'hours').hours >= 3;

      if (!current.isFed || isOverThreeHours) {
        feedAnimals(current.name);
        const updatedAnimal = {
          ...current,
          isFed: true,
          lastFed: currentTime.toISO() || '',
        };
        setCurrent(updatedAnimal);
      }
    }
  };

  if (!current) {
    return (
      <>
        <Navbar></Navbar>
        <ErrorPage></ErrorPage>
      </>
    );
  } else {
    const lastFedTime = DateTime.fromISO(current.lastFed);
    const currentTime = DateTime.now();
    const isOverThreeHours = currentTime.diff(lastFedTime, 'hours').hours >= 3;

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
            <p>Åt senast: {formatDate(current.lastFed)}</p>
            {isOverThreeHours && (
              <p className="feedNotification">{current.name} behöver matas!</p>
            )}
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
                    Mata {current.name}{' '}
                    <FontAwesomeIcon icon={faPaw} className="paw" />
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
