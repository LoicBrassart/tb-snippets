import PropTypes from 'prop-types';
import './Gallery.scss';

function Gallery({ characters }) {
  return (
    <ul className="Gallery">
      {characters.map((char) => {
        return (
          <li>
            <h4>{char.name}</h4>
            {char.gallery.map((pic) => {
              return <img src={pic} alt="" />;
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
