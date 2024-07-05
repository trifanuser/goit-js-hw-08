
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

function saveCurrentTime(data) {
  localStorage.setItem(LOCAL_STORAGE_KEY, data.seconds);
}

player.on('timeupdate', throttle(saveCurrentTime, 1000));

const savedTime = localStorage.getItem(LOCAL_STORAGE_KEY);
if (savedTime) {
  player.setCurrentTime(savedTime).catch(error => {
    console.error('Failed to set current time:', error);
  });
}