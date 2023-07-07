import { Navbar } from '../components/Navbar';
import introImg from '../assets/joshua-lee-7nKv6HMsNEc-unsplash.jpg';

export const Home = () => {
  return (
    <>
      <div className="homePage">
        <Navbar></Navbar>
        <main>
          <h1>Välkommen Till DjurParken!</h1>
          <div className="heroImgContainer">
            <img
              src={introImg}
              alt="tiger walking towards on green leaf plant during daytime"
              className="heroImg"
            ></img>
          </div>
          <section className="introText">
            <h3>Välkommen till vår djurpark! </h3>
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
