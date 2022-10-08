import { getPlayers } from "../getPlayers/getPlayers";

const div = document.createElement("div");
div.classList.add("players-container");

export const insertPlayers = async () => {
  try {
    const players = await getPlayers("http://localhost:3000/players");
    for (const player of players) {
      let teamsString = "Teams: ";
      for (const team of player.teams) {
        teamsString += `➡️ ${team}`;
      }
      div.innerHTML += `
          <figure class="player">
              <figcaption>${player.nickname}</figcaption>
              <div class="player-image-container">
                <img src="${player.image}" alt="" />
              </div>
              <div class="player-info">
                <p>${player.name}</p>
                <p>${player.nationality}</p>
                <p>${player.birthday}</p>
                <p>${player.lastGame}</p>
                <p>${player.status}</p>
                <p>${teamsString}</p>
              </div>
          </figure> 
              `;
    }
    document.body.appendChild(div);
  } catch (error) {
    console.log(error);
  }
};
