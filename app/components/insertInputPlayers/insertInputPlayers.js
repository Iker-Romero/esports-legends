import { searchInput } from "../searchInput/searchInput";
import { getPlayers } from "../getPlayers/getPlayers";

export const insertInputPlayers = () => {
  const input = document.querySelector("#searchInput")
  input.addEventListener("input", async () => {
      console.log(input.value)
      const playersArray = await getPlayers("http://localhost:3000/players");
      console.log(playersArray)
      const playersMatch = playersArray.filter((player) => {
        return player.nickname.toLowerCase().includes(input.value.toLowerCase());
      });
      console.log(playersMatch);
      return playersMatch;
  });
};

// export const insertInputPlayers = () => {
//   const input = document.querySelector("#searchInput")
//   input.addEventListener("input", async () => {
//     try {
//       console.log(input.value)
//       const playersArray = await getPlayers();
//       const playersMatch = await playersArray.map((player) => {
//         player.nickname.includes(input.value);
//       });
//       console.log(playersMatch);
//       return playersMatch;
//     } catch (error) {
//       console.log(error);

//     }
//   });
// };

  // for (const player of playersMatch) {
  //   let teamsString = "Teams: ";
  //   for (const team of player.teams) {
  //     teamsString += `➡️ ${team}`;
  //   }
  //   div.innerHTML += `
  //           <figure class="player">
  //               <figcaption>${player.nickname}</figcaption>
  //               <div class="player-image-container">
  //                 <img src="${player.image}" alt="" />
  //               </div>
  //               <div class="player-info">
  //                 <p>${player.name}</p>
  //                 <p>${player.nationality}</p>
  //                 <p>${player.birthday}</p>
  //                 <p>${player.lastGame}</p>
  //                 <p>${player.status}</p>
  //                 <p>${teamsString}</p>
  //               </div>
  //           </figure> 
  //               `;
  // }
  // document.body.appendChild(div);
// };
