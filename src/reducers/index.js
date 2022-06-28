//Below, just returns an array object of songs. It's an overkill, but it's for the purpose of using Redux.
const songsReducer = () => {
  return [
    { title: "Fade to Black", duration: "7:45" },
    { title: "Peace Sells", duration: "5:10" },
    { title: "Walk with me in Hell", duration: "5:45" },
    { title: "Nothing Else Matters", duration: "6:20" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};
