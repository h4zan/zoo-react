import './Error.css';
import errorImg from '../../assets/squirrel-g1f489203a_1280.png';

import { Navbar } from '../../components/Navbar/Navbar';

export const Error = () => {
  return (
    <>
      <div className="ErrorPage">
        <Navbar></Navbar>
        <div className="errorPageInfo">
          <div className="errorImgContainer">
            <img
              src={errorImg}
              alt="Cartoon of a squirrel holding a book"
              className="errorImg"
            ></img>
          </div>
          <p>Kontrollera sökvägen, vänligen försök igen!</p>
        </div>
      </div>
    </>
  );
};
