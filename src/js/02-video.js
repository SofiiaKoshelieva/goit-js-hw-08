import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);
player.on('timeupdate', throttle(playerOn, 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function() {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});;
function playerOn(data) {
    const time = data.seconds;
    localStorage.setItem('videoplayer-current-time', time);
}
