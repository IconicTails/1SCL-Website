import List from './pages/List.js';
import LegacyList from './pages/LegacyList.js';
import Leaderboard from './pages/Leaderboard.js';
import Roulette from './pages/Roulette.js';

export default [
    { path: '/', component: List },
    { path: '/legacylist', component: LegacyList },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/roulette', component: Roulette },
];
