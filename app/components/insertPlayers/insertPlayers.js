import { getPlayers } from "../getPlayers/getPlayers";

export const insertPlayers = async () => {
  try {
    const div = document.createElement("div");
    const players = await getPlayers("http://localhost:3000/players");
    for (const player of players) {
      let teamsString = "Teams: ";
      for (const team of player.teams) {
        teamsString += `➡️ ${team}`;
      }
      div.innerHTML += `
          <figure>
              <figcaption>${player.nickname}</figcaption>
              <img src="" alt="" />
              <p>${player.name}</p>
              <p>${player.nationality}</p>
              <p>${player.birthday}</p>
              <p>${player.lastGame}</p>
              <p>${player.status}</p>
              <p>${teamsString}</p>
          </figure> 
              `;
    }
    document.body.appendChild(div);
  } catch (error) {
    console.log(error);
  }
};
