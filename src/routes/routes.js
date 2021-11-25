import {
  Home, Location, Episode, CharacterDetail,
} from '../pages';

const routes = [
  { path: '/', component: { Home }, exact: true },
  { path: '/locations', component: { Location }, exact: false },
  { path: '/episodes', component: { Episode }, exact: false },
  { path: '/character/:charId', component: { CharacterDetail }, exact: false },
];

export default routes;
