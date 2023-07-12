import { Navbar } from '../components/Navbar';
import introImg from '../assets/joshua-lee-7nKv6HMsNEc-unsplash.jpg';

export const Home = () => {
  return (
    <>
      <div className="homePage">
        <Navbar></Navbar>
        <main>
          <div className="heroImgContainer">
            <img
              src={introImg}
              alt="a tiger looking through a leafy area"
              className="heroImg"
            ></img>
          </div>
          <section className="introText">
            <h1>Välkommen Till DjurParken!</h1>

            <p>
              Här kan du vandra genom olika habitat och se allt från
              majestätiska lejon och elefanter till söta lemurer och färgglada
              fåglar. Vi har också många roliga aktiviteter och evenemang för
              både stora och små, såsom utfodringar, guidade turer och
              barnprogram. Kom och spendera en dag med oss och upptäck djurriket
              på ett helt nytt sätt!
            </p>
          </section>
        </main>
      </div>
    </>
  );
};
