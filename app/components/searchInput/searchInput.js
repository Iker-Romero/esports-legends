import { getPlayers } from "../getPlayers/getPlayers";
import { insertPlayers } from "../insertPlayers/insertPlayers";

export const searchInput = (url) => {
  document.querySelector("nav").insertAdjacentHTML(
    "afterend",
    `
      <input type="text" class="searchInput" id="searchInput" />
      `
  );
  const input = document.querySelector("#searchInput")
  input.addEventListener("input", async () => {
      const playersArray = await getPlayers(url);
      const playersMatch = playersArray.filter((player) => {
        return player.nickname.toLowerCase().includes(input.value.toLowerCase());
      });
      console.log(playersMatch);
      document.querySelector('.players-container').remove();
      return insertPlayers(playersMatch);
  });
};
