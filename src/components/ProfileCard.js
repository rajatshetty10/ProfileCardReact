import Counter from './Counter';
import Social from './Social';
import me from '../pic.jpg';

const icons = [
  {
    id: 1,
    link: 'https://github.com/rajatshetty10',
    icon: 'fab fa-github fa-2x',
  },
  {
    id: 2,
    link: 'https://www.linkedin.com/in/rajat-shetty-7920b1154/',
    icon: 'fab fa-linkedin fa-2x',
  },
  {
    id: 3,
    link: 'rajatshetty10@gmail.com',
    icon: 'fab fa-google-plus-g fa-2x',
  },
  {
    id: 4,
    link: 'https://www.instagram.com/rajat.shetty10/',
    icon: 'fab fa-instagram fa-2x',
  },
];

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="image">
        <img src={me} />
      </div>
      <div className="name">
        <h2>Rajat Shetty</h2>
        <h4>
          An aspiring Front-end Developer from <b>India</b>
        </h4>
      </div>

      {/* Location */}
      <div className="location">
        <i className="far fa-map-marker-alt"></i>&nbsp;&nbsp;
        <h5>Pune, Maharashtra</h5>
      </div>

      {/* Social Links */}
      <div className="icons">
        {icons.map((icon) => {
          return <Social link={icon.link} icon={icon.icon} key={icon.id} />;
        })}
      </div>

      {/* Counter */}
      <Counter />
    </div>
  );
};

export default ProfileCard;
