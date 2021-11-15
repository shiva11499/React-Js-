import React from "react";
import react from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div>
            <label>Image search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
