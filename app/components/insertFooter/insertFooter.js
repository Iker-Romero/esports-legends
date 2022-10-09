import { insertPlayers } from "../insertPlayers/insertPlayers";
import { getPlayers } from "../getPlayers/getPlayers";

const contactInfo = [
  {
    name: "Iker Romero Caramés",
    socialNetworks: {
      github: {
        icon: "public/GitHub-Mark/PNG/GitHub-Mark-32px.png",
        link: "https://github.com/Iker-Romero",
      },
      linkedin: {
        icon: "public/174857.png",
        link: "https://www.linkedin.com/in/iker-romero-645b70251/",
      },
    },
  },
  {
    name: "afdafasgsag",
    socialNetworks: {
      github: {
        icon: "public/GitHub-Mark/PNG/GitHub-Mark-32px.png",
        link: "https://github.com/Iker-Romero",
      },
      linkedin: {
        icon: "public/174857.png",
        link: "https://www.linkedin.com/in/iker-romero-645b70251/",
      },
    },
  },
];

// console.log(contactInfo[0].socialNetworks.github.icon);

// const insertContactsList = () => {
//   let icon;
//   let link;
//   let listItems;
//   for (const person of contactInfo) {
//     for (const socialNetwork in person.socialNetworks) {
//       console.log(socialNetwork);
//       for (const key in contactInfo[contactInfo.indexOf(person)].socialNetworks[socialNetwork]) {
//         // console.log(key);
//         console.log(socialNetwork[key])
//         if (key === "icon") {
//           icon = socialNetwork.key;
//           //   console.log(key)
//         }
//         if (key === "link") {
//           link = socialNetwork.key;
//         }
//       }
//     }
//     listItems += `
//           <li>
//             <a href="${link}" target="_blank">
//               <img src="${icon}" alt="" />
//             </a>
//           </li>
//           `;
//     console.log(listItems);
//   }
//   return listItems;
// };

// console.log(insertContactsList());

export const insertFooter = async () => {
  try {
    await insertPlayers(getPlayers("http://localhost:3000/players"));
    document.body.innerHTML += `
    <footer>
      <p class="copyright">© 2022 | Developed by: ${contactInfo[0].name}.</p>
      <ul class="contact-icons">

      </ul>
    </footer>
    `;
  } catch (error) {
    console.log(error);
  }
};
