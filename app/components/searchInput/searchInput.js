import { getPlayers } from "../getPlayers/getPlayers";

export const searchInput = () => {

    document.querySelector("nav").insertAdjacentHTML(
      "afterend",
      `
        <input type="text" class="searchInput" id="searchInput" />
        `
    );
};

// export const searchInput = async () => {
//     try {
//       document.querySelector("nav").insertAdjacentHTML(
//         "afterend",
//         `
//           <input type="text" class="searchInput" id="searchInput" />
//           `
//       );
//       const input = document.querySelector("#searchInput");
//       input.addEventListener("change", async () => {
//         try {
//           const playersArray = await getPlayers();
//           const playersMatch = await playersArray.map((player) => {
//             player.nickname.includes(input.value);
//           });
//           console.log(playersMatch);
//         } catch (error) {
//           console.log(error);
//         }
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };