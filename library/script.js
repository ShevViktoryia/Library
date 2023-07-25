import './index.html';
import './assets/sass/pages/_index.sass';
import sliderData from './assets/data/sliderData';

const burger_menu = document.querySelector('.burger_menu');
const nav = document.querySelector('.header_nav');
burger_menu.onclick = () => nav.classList.toggle('open_menu');

const slider_list = document.querySelector('.slider_track');
sliderData.forEach(item => {
  const slider_item = document.createElement('div');
  slider_item.className = 'slider_item';
  slider_item.id = item.id;
  slider_item.style.backgroundImage = "url("+`${item.img}`+")";
  slider_list.append(slider_item);
})

let slider_dots = document.querySelector('.slider_dots');
let slider_dote = [...document.querySelectorAll('.dot')];
let wrap = document.querySelector('.slider_track');
let slider_item = [...document.querySelectorAll('.slider_item')];
let right_arrow = document.querySelector('.right_arrow');
let left_arrow = document.querySelector('.left_arrow');


slider_dote.forEach(item => {
  item.onclick = e => {
    slider_dote.forEach(item => item.classList.remove('active_dot'));
    e.target.classList.add('active_dot');
    switch(e.target.id) {
      case 'dot_1':
        switch(count) {
          case 0:
            count = 5;
            wrap.prepend(slider_item[count-1]);
            count--;
          break;
          default:
            wrap.lastChild.remove();
            wrap.prepend(slider_item[count-1]);
            count--;
          break;
        }
        break;
      case 'dot_2':
      case 'dot_3':
        switch(count) {
          case 5:
            count = 0;
            wrap.append(slider_item[count]);
            count++;
          break;
          default:
            wrap.firstChild.remove();
            wrap.append(slider_item[count]);
            count++;
          break;
        }
        break;
      default:
        break;
    }
  }
});

let count = 0;
right_arrow.onclick = () => {
  switch(count) {
    case 5:
      count = 0;
      wrap.append(slider_item[count]);
      count++;
    break;
    default:
      wrap.firstChild.remove();
      wrap.append(slider_item[count]);
      count++;
    break;
  }
}

left_arrow.onclick = () => {
  switch(count) {
    case 0:
      count = 5;
      wrap.prepend(slider_item[count-1]);
      count--;
    break;
    default:
      wrap.lastChild.remove();
      wrap.prepend(slider_item[count-1]);
      count--;
    break;
  }
}