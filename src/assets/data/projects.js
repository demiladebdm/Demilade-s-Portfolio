import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Robo Friends',
    desc:
      'An application to search through an array of robots through real-time feed.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Background Generator',
    desc: 'An app that uses gradient to generate cool backgrounds.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Chat App',
    desc:
      'Used HTML, CSS, Django and AJAX to create a web app that allows users sign-in to a live forum to facilitate discussions in a real-time live feed.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'PayPal Clone',
    desc:
      'Used HTML5, CSS, and JavaScript to create a responsive user-friendly interface. Built for everyone who pays or gets paid. Allows users to make online payments, send money locally and abroad and get money from almost anyone.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Bank System App',
    desc:
      'Used Python 3 to create the project. Provides many features such as creating account, withdraw account, deposit, get balance and view account for new and existing registered users.',
    img: ProjectImg,
  },
];

export default projects;
