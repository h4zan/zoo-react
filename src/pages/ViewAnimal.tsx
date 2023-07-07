import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Loader } from '../loaders/animalLoader';
import errorImg from '../assets/errorImg.jpg';
import { feedAnimals } from '../components/FeedAnimals';

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
          <h3> {current.name}</h3>
          <img
            className="animalImg"
            src={current.imageUrl}
            alt={`Photograph of ${current.latinName}`}
            onError={(e) => {
              (e.target as HTMLImageElement).onerror = null;
              (e.target as HTMLImageElement).src = errorImg;
            }}
          ></img>
          <p>{current.latinName}</p>
          <p>{current.longDescription}</p>
          <p>{current.yearOfBirth}</p>
          <p> Åt senast: {current.lastFed}</p>
          {current && (
            <button onClick={handleFeedClick} disabled={current.isFed}>
              {current.isFed
                ? `${current.name} är Matad`
                : `Mata ${current.name}`}
            </button>
          )}
          <Link key={current.name} to="/animals">
            <button>Tillbaka</button>
          </Link>{' '}
        </div>
      </>
    );
  }
};
