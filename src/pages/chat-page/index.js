import Handlebars from 'handlebars';
import './chat-page.scss';
export { default as ChatPage } from './chat-page.hbs?raw';

Handlebars.registerHelper('chat-page-list', () => {
  return [
    { current: true, name: 'Миша', message: 'Тестовое сообщение 1', reply:'тестовый ответ 1', time: '11:54', unread: '2' ,
      avatar: "../assets/1.png" },
    { name: 'Егор', message: 'Тестовое сообщение 2', time: '12:54', avatar: "../assets/2.png" },
    { name: 'Саша', message: 'Тестовое сообщение 3', time: '13:00', unread: '5' , avatar: "../assets/3.png" },
  ]
});
