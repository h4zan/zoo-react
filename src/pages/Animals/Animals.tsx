import { Link, useLoaderData } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { Loader } from '../../loaders/animalLoader';
import errorImg from '../../assets/errorImg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDrumstickBite, faPaw } from '@fortawesome/free-solid-svg-icons';

import './Animals.css';
import { DateTime } from 'luxon';

export const Animals = () => {
  const { animals } = useLoaderData() as Loader;

  return (
    <>
      <div className="animalsListPage">
        <Navbar></Navbar>

        <div className="animalsIntro">
          <h4>Här visas alla djur som finns på vår anläggning. </h4>
          <p>
            Vår samling består av djur från hela världen och vi är stolta över
            att kunna ge våra besökare möjlighet att uppleva dem på nära håll.
          </p>
        </div>
        <div className="animalsContainer">
          {animals.map((animal) => {
            const lastFedTime = DateTime.fromISO(animal.lastFed);
            const currentTime = DateTime.now();

            const isOverFourHours =
              currentTime.diff(lastFedTime, 'hours').hours >= 4;

            return (
              <div key={animal.id} className="animal">
                <div className="animalImgOnList">
                  <img
                    className="animalImg"
                    src={animal.imageUrl}
                    alt={`Photograph of ${animal.latinName}`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = errorImg;
                      (
                        e.target as HTMLImageElement
                      ).alt = `Error: Failed to load image for ${animal.latinName}, placement image: a landscape with trees and mountains.                        `;
                    }}
                  ></img>
                </div>
                <div className="animalInfo">
                  <h3>{animal.name}</h3>
                  <p>{animal.shortDescription}</p>
                  <p>Åt senast: {animal.lastFed}</p>
                  {isOverFourHours ? (
                    <p className="feedNotification">
                      {animal.name} behöver matas!{' '}
                      <FontAwesomeIcon icon={faPaw} className="paw" />
                    </p>
                  ) : (
                    <p>
                      {animal.name} är mätt{' '}
                      <FontAwesomeIcon
                        icon={faDrumstickBite}
                        className="drumstickBite"
                      />
                    </p>
                  )}{' '}
                  <Link to={animal.name}>
                    <button>Mer om {animal.name}</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
