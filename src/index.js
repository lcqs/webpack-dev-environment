import './styles/main.scss';
import img from './assets/ghAvatarKub.jpg'


//utils
const getElement = selector => document.querySelector(selector)

//img display
const divImg = getElement("#avatar-container")
divImg.src = img
