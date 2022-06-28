import React from "react";
import { connect } from "react-redux"; //using connect here, because this partiular component needs to pull in the data (i.e list of songs)
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//Below this function gets called on each data change.
const mapStateToProps = (state) => {
  console.log(state); //this console.log will have the value of current selected song - since mapStateToProps will re-run on each data change.
  return { songs: state.songs }; //this is equivalent to 'props.songs === { songs: state.songs }' being injected into the SongList component above. And this is how the data is passed from the REDUX store into a REACT component.
};

export default connect(mapStateToProps, { selectSong })(SongList); //yes this is valid syntax - calling a function inside a function. The selectSong is key-value pair form of ES6.
