import React from 'react';
import './Profile.scss';
import blueMap from '../../assets/map-background.png';

import Window from '../../components/Window/Window';
import AccountProfile from '../../components/AccountProfile/AccountProfile';
import CreateProfile from '../../components/CreateProfile/CreateProfile';
import MapSearch from '../../components/MapSearch/MapSearch';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container_profile">
        <svg className="logo_home"><use xlinkHref="/many_svg.svg#logo"/></svg>
        <img className="blue-map" src={blueMap} alt="Dots map"/>
        <Window/>
      </div>
    );
  }
}
export default Profile;
