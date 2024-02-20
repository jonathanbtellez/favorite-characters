/* eslint-disable react/prop-types */
import "../assets/styles/profile.css";
import { Counter } from "./Counter";

export const Profile = (props) => {
  console.log(props);
  return (
    <div className="container">
      <div className="profile-container">
        <div className="profile-image-container">
          <img
            className="profile-image"
            src={`../src/assets/img/profile-${props.img}.png`}
            alt={`Image of ${props.zoro}`}
          />
        </div>
        <div className="profile-info-container">
          <p>
            <b>Name: </b>
            {props.name}
          </p>
          <p>
            <b>Pais: </b>
            {props.country}
          </p>
          <p>
            <b>Charge: </b>
            {props.charge}, company {props.company}
          </p>

          <div>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
      <div className="profile-buttons">
        <Counter network={'facebook'} url={props.facebook}>Seguir en facebook</Counter>
        <Counter network={'twitter'} url={props.twitter}>Seguir en twitter</Counter>
        <Counter network={'youtube'} url={props.youtube}>Seguir en youtube</Counter>
      </div>
    </div>
  );
};
