import "./style.css";
import { insertNavbar } from "./components/insertNavbar/insertNavbar";
import { getPlayers } from "./components/getPlayers/getPlayers";
import { insertPlayers } from "./components/insertPlayers/insertPlayers";
import { searchInput } from "./components/searchInput/searchInput";
import { sortPlayers } from "./components/sortPlayers/sortPlayers";
// import { insertFooter } from './components/insertFooter/insertFooter';

const triggerComponents = () => {
  insertNavbar("ESPORTS LEGENDS");
  insertPlayers(getPlayers("http://localhost:3000/players"));
  searchInput("http://localhost:3000/players");
  sortPlayers();
//   insertFooter();
};

triggerComponents();
