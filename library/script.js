import './index.html';
import './assets/sass/pages/_index.sass';
import sliderData from './assets/data/sliderData';
import winterData from './assets/data/seasonsData/winterData';
import springData from './assets/data/seasonsData/springData';
import summerData from './assets/data/seasonsData/summerData';
import autumnData from './assets/data/seasonsData/autumnData';

function whatSeason(cur_season) {
  let books_list = document.querySelector('.books_list');
  let prev_season = [...document.querySelectorAll('input[type=radio]')];
  books_list.innerHTML = '';
  prev_season.forEach(item => {item.checked ? item.checked = false : cur_season.checked = true});
  switch(cur_season.id) {
    case 'winter':
      winterData.forEach(item => {
        const book = document.createElement('div');
        book.className = 'book';
        const publishing_house = document.createElement('p');
        publishing_house.className = 'publishing_house';
        const span = document.createElement('span');
        publishing_house.textContent = item.publishing_house;
        const book_name = document.createElement('p');
        book_name.className = 'book_name';
        book_name.textContent = item.name;
        const author = document.createElement('p');
        author.className = 'author';
        author.textContent = item.author;
        const about_book = document.createElement('div');
        about_book.className = 'about_book';
        const description = document.createElement('p');
        description.className = 'description';
        description.textContent = item.description;
        const button = document.createElement('button');
        button.className = 'book_button';
        button.textContent = item.button_value;
        const book_img = document.createElement('img');
        book_img.className = 'book_img';
        book_img.src = `${item.image}`;
        book_img.alt = item.name;
        publishing_house.appendChild(span);
        book.append(publishing_house);
        book.append(book_name);
        book.append(author);
        description.append(button);
        about_book.append(description);
        about_book.append(book_img);
        book.append(about_book);
        books_list.append(book);
      });
      break;
    case 'spring':
      springData.forEach(item => {
        const book = document.createElement('div');
        book.className = 'book';
        const publishing_house = document.createElement('p');
        publishing_house.className = 'publishing_house';
        const span = document.createElement('span');
        publishing_house.textContent = item.publishing_house;
        const book_name = document.createElement('p');
        book_name.className = 'book_name';
        book_name.textContent = item.name;
        const author = document.createElement('p');
        author.className = 'author';
        author.textContent = item.author;
        const about_book = document.createElement('div');
        about_book.className = 'about_book';
        const description = document.createElement('p');
        description.className = 'description';
        description.textContent = item.description;
        const button = document.createElement('button');
        button.className = 'book_button';
        button.textContent = item.button_value;
        const book_img = document.createElement('img');
        book_img.className = 'book_img';
        book_img.src = `${item.image}`;
        book_img.alt = item.name;
        publishing_house.appendChild(span);
        book.append(publishing_house);
        book.append(book_name);
        book.append(author);
        description.append(button);
        about_book.append(description);
        about_book.append(book_img);
        book.append(about_book);
        books_list.append(book);
      });
      break;
      case 'summer':
        summerData.forEach(item => {
          const book = document.createElement('div');
          book.className = 'book';
          const publishing_house = document.createElement('p');
          publishing_house.className = 'publishing_house';
          const span = document.createElement('span');
          publishing_house.textContent = item.publishing_house;
          const book_name = document.createElement('p');
          book_name.className = 'book_name';
          book_name.textContent = item.name;
          const author = document.createElement('p');
          author.className = 'author';
          author.textContent = item.author;
          const about_book = document.createElement('div');
          about_book.className = 'about_book';
          const description = document.createElement('p');
          description.className = 'description';
          description.textContent = item.description;
          const button = document.createElement('button');
          button.className = 'book_button';
          button.textContent = item.button_value;
          const book_img = document.createElement('img');
          book_img.className = 'book_img';
          book_img.src = `${item.image}`;
          book_img.alt = item.name;
          publishing_house.appendChild(span);
          book.append(publishing_house);
          book.append(book_name);
          book.append(author);
          description.append(button);
          about_book.append(description);
          about_book.append(book_img);
          book.append(about_book);
          books_list.append(book);
        });
        break;
        case 'autumn':
          autumnData.forEach(item => {
            const book = document.createElement('div');
            book.className = 'book';
            const publishing_house = document.createElement('p');
            publishing_house.className = 'publishing_house';
            const span = document.createElement('span');
            publishing_house.textContent = item.publishing_house;
            const book_name = document.createElement('p');
            book_name.className = 'book_name';
            book_name.textContent = item.name;
            const author = document.createElement('p');
            author.className = 'author';
            author.textContent = item.author;
            const about_book = document.createElement('div');
            about_book.className = 'about_book';
            const description = document.createElement('p');
            description.className = 'description';
            description.textContent = item.description;
            const button = document.createElement('button');
            button.className = 'book_button';
            button.textContent = item.button_value;
            const book_img = document.createElement('img');
            book_img.className = 'book_img';
            book_img.src = `${item.image}`;
            book_img.alt = item.name;
            publishing_house.appendChild(span);
            book.append(publishing_house);
            book.append(book_name);
            book.append(author);
            description.append(button);
            about_book.append(description);
            about_book.append(book_img);
            book.append(about_book);
            books_list.append(book);
          });
          break;
        case 'default':
          break;
  }
}

const burger_menu = document.querySelector('.burger_menu');
const nav = document.querySelector('.header_nav');
burger_menu.onclick = () => {
  nav.classList.toggle('open_menu');
  burger_menu.classList.toggle('open_menu');
}

const slider_list = document.querySelector('.slider_track');
sliderData.forEach(item => {
  const slider_item = document.createElement('div');
  slider_item.className = 'slider_item';
  slider_item.id = item.id;
  slider_item.style.backgroundImage = "url("+`${item.img}`+")";
  slider_list.append(slider_item);
})

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


let season_buttons = [...document.querySelectorAll('input[type=radio]')];
whatSeason(season_buttons[0]);
season_buttons.forEach(item => item.onclick = () => whatSeason(item));


let book_buttons = [...document.querySelectorAll('.book_button')];
book_buttons.forEach(item => {
  if(item.textContent === 'Own') {
    console.log(item);
    item.style.color = '#BB945F';
    item.style.borderColor = '#BB945F';
    item.onmouseover = () => {
      item.style.color = '#0C0C0E';
    }
    item.onmouseout = () => {
      item.style.color = '#BB945F';
    }
  }
})