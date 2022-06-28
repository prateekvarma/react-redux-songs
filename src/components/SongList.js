import React from "react";
import { connect } from "react-redux"; //using connect here, because this partiular component needs to pull in the data (i.e list of songs)

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return(
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      ) 
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs }; //this is equivalent to 'props.songs === { songs: state.songs }' being injected into the SongList component above. And this is how the data is passed from the REDUX store into a REACT component.
};

export default connect(mapStateToProps)(SongList); //yes this is valid syntax - calling a function inside a function.
