// routes.js

import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import About from './components/About.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/about', component: About },
];

export default routes;