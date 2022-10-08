import './style.css';
import { insertNavbar } from './components/insertNavbar/insertNavbar';
import { insertPlayers } from './components/insertPlayers/insertPlayers';
// import { insertFooter } from './components/insertFooter/insertFooter';

const triggerComponents = () => {
    insertNavbar('ESPORTS LEGENDS');
    insertPlayers();
    // insertFooter();
}

triggerComponents();