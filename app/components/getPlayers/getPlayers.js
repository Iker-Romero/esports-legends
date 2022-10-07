export const getPlayers = async (url) => {
  try {
    const rawPlayers = await fetch(url);
    const jsonPlayers = await rawPlayers.json();
    return jsonPlayers;
  } catch (error) {
    console.log(error);
  }
};
