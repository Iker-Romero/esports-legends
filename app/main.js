import "./style.css";
import { insertNavbar } from "./components/insertNavbar/insertNavbar";
import { searchInput } from "./components/searchInput/searchInput";
import { sortPlayers } from "./components/sortPlayers/sortPlayers";
import { insertFooter } from './components/insertFooter/insertFooter';

const triggerComponents = () => {
  insertNavbar("ESPORTS LEGENDS");
  insertFooter();
  searchInput("http://localhost:3000/players");
  sortPlayers();
};

triggerComponents();
