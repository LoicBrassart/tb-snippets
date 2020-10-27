import { useState } from 'react';
import PropTypes from 'prop-types';
// import icon from '../../public/img/bahl/1i.png';
import './AudioPlayer.scss';

function AudioPlayer({ playlist }) {
  const [current, setCurrent] = useState(playlist[0]);

  return (
    <>
      <audio id="audio">
        <source src={`../public/music/${current.filename}`} type="audio/mpeg" />
        <track kind="captions" src="" />
      </audio>
      <div id="AudioPlayer">
        <div className="controls">
          <img src={`../../public/img/${current.img}`} alt="" />
          <h4>{current.name}</h4>
        </div>
        <div className="tracklist">
          <ul>
            {playlist.map((song, i) => {
              return (
                <li key={playlist[i].name}>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrent(playlist[i]);
                    }}
                  >
                    {song.id} - {song.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
AudioPlayer.propTypes = {
  playlist: PropTypes.arrayOf(PropTypes.object),
};
AudioPlayer.defaultProps = {
  playlist: [],
};

export default AudioPlayer;
