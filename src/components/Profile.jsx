/* eslint-disable react/prop-types */
import "../assets/styles/profile.css";

export const Profile = (props) => {
    console.log(props)
  return (
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
  );
};
