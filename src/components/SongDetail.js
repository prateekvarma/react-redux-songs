import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
    if(!song) {
        //this is because the initial value of the selected song is 'null'
        return <div>Please select a song!</div>;
    }
  return (
    <div>
        <h3>Song Details:</h3>
        <p>Title: {song.title}</p>
        <p>Duration: {song.duration}</p>
    </div>
  )
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
