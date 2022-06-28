//Action creator
export const selectSong = (song) => {
  //Return a song
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
