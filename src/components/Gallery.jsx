import PropTypes from 'prop-types';
import './Gallery.scss';
import * as bahlImages from '../assets/img/bahl';

function Gallery({ characters }) {
  return (
    <ul className="Gallery">
      {characters.map((char) => {
        return (
          <li key={char.name}>
            <h4>{char.name}</h4>
            {char.gallery.map((pic) => {
              return <img src={bahlImages[pic]} alt="" key={pic} />;
            })}
          </li>
        );
      })}
    </ul>
  );
}

Gallery.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
};
Gallery.defaultProps = {
  characters: [],
};

export default Gallery;
