import { getPlayers } from "../getPlayers/getPlayers";
import { insertPlayers } from "../insertPlayers/insertPlayers";
import { searchFilter } from "../searchFilter/searchFilter";

export const searchInput = (url) => {
  document.querySelector("header").insertAdjacentHTML(
    "afterend",
    ` <div class="search-container">
        <label for="searchInput">Buscar jugador: </label>
        <input type="text" class="searchInput" id="searchInput" />
        ${searchFilter()}
        </div>
      `
  );
  const input = document.querySelector("#searchInput");
  input.addEventListener("input", async () => {
    const playersArray = await getPlayers(url);
    const playersMatch = playersArray.filter((player) => {
      return player.nickname.toLowerCase().includes(input.value.toLowerCase());
    });
    console.log(playersMatch);
    document.querySelector(".players-container").remove();
    return insertPlayers(playersMatch);
  });
};
