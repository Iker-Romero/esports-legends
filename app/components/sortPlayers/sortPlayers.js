import { getPlayers } from "../getPlayers/getPlayers";
import { insertPlayers } from "../insertPlayers/insertPlayers";

export const sortPlayers = async () => {
  try {
    const playersArray = await getPlayers("http://localhost:3000/players");
    const playersMatch = await playersArray.filter((player) => {
      return player.nickname
        .toLowerCase()
        .includes(document.querySelector("#searchInput").value.toLowerCase());
    });

    const unsortedPlayers = await playersArray || await playersMatch;

    for (const player of unsortedPlayers) {
      const date = new Date(player.birthday);
      const unsortedWithDate = unsortedPlayers.slice();
      unsortedWithDate.birthday = date;
    }

    const select = document.querySelector("#sortBy");

    select.addEventListener("change", async () => {
      try {
        switch (select.value) {
          case "oldToYoung":
            const oldToYoung = await unsortedPlayers.sort(
              (playerX, playerY) => {
                return new Date(playerX.birthday) - new Date(playerY.birthday);
              }
            );
            document.querySelector(".players-container").remove();
            return insertPlayers(oldToYoung);
          case "youngToOld":
            const youngToOld = await unsortedPlayers.sort(
              (playerX, playerY) => {
                return new Date(playerY.birthday) - new Date(playerX.birthday);
              }
            );
            document.querySelector(".players-container").remove();
            return insertPlayers(youngToOld);
        }
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
