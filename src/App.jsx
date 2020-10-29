import AudioPlayer from './components/AudioPlayer';
import Gallery from './components/Gallery';
import './App.scss';
import myImage from './assets/img/bahl/1i.png';

const songs = [
  {
    id: 0,
    name: 'Main Theme',
    img: 'bahl/1i.png',
    filename: '01. main01.mp3',
  },
  {
    id: 1,
    name: 'Sakaba',
    img: 'bahl/1i.png',
    filename: '02. sakaba_lp.mp3',
  },
  {
    id: 2,
    name: 'Kanasimi',
    img: 'bahl/2i.png',
    filename: '03. kanasimi_lp.mp3',
  },
  {
    id: 3,
    name: 'Yujo 2',
    img: 'bahl/3i.png',
    filename: '04. yujo2_lp.mp3',
  },
  {
    id: 4,
    name: 'Arpeggio 1',
    img: 'bahl/li.png',
    filename: '05. arpeggio01_lp.mp3',
  },
];
const characters = [
  {
    name: 'Bahl',
    folderName: 'bahl',
    gallery: ['j1i', 'j2i', 'j3i', 'jli'],
  },
];

export default function App() {
  return (
    <div id="App">
      <AudioPlayer playlist={songs} />
      <img src={myImage} alt="" />
      <Gallery characters={characters} />
    </div>
  );
}
