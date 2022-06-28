import React from "react";
import { connect } from "react-redux"; //using connect here, because this partiular component needs to pull in the data (i.e list of songs)

class SongList extends React.Component {
  render() {
    return <div>SongList</div>;
  }
}

export default connect()(SongList); //yes this is valid syntax - calling a function inside a function.
