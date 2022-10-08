import './style.css';
import { insertNavbar } from './components/insertNavbar/insertNavbar';
import { insertPlayers } from './components/insertPlayers/insertPlayers';
import { searchInput } from './components/searchInput/searchInput';
import { insertInputPlayers } from './components/insertInputPlayers/insertInputPlayers';
// import { insertFooter } from './components/insertFooter/insertFooter';

const triggerComponents = () => {
    insertNavbar('ESPORTS LEGENDS');
    insertPlayers();
    // insertFooter();
    searchInput();
    insertInputPlayers();
}

triggerComponents();