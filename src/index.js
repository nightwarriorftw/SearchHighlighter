import React from "react";
import ReactDOM from "react-dom";

/*eslint-env jquery*/
class SearchArea extends React.Component {
  // Constructor
  constructor() {
      super()
      this.state = {txt: '', results: 0}
      this.update = this.update.bind(this)
    }
    // Update is bound to input's onClick event
  update(e) {
      // Helper vars
      var search = e.target.value
      var regex = new RegExp(search, "gi")
      var str = $('pre').text()
        // Print occurances
      output(
          str,
          regex,
          document.querySelector('pre')
        )
        // Find num matches
      var matches = document.querySelectorAll('#hl').length
        // Set state accordingly
      this.setState({
        txt: e.target.value,
        results: (matches === str.length + 1) ? 0 : matches // Hack 
      });
    }
    // Render 
  render() {
    return ( 
      <div>
      <SearchBox txt={this.state.txt} update={this.update}/> 
      <SearchResults result={this.state.results} /> 
      </div>
    );
  }
}

/**
 * Search Box component
 */
const SearchBox = (props) => {
  return ( 
    <div id="searchbox">
    <input type="text"
    onChange={props.update}/> 
    </div>
  );
}

/**
 * Search Box component
 */
const SearchResults = (props) => {
  return ( 
    <div id="results">
      <p>{props.result} results found. </p> 
    </div>
  );
}

/**
 * (ES6) Prints the text and
 * highlights the search query
 * if found. Uses regex.
 */
const output = (str, regex, target) => {
  target.innerHTML =
  str.replace(
    regex,
    str =>
    `<span id="hl">${str}</span>`
  );
}

ReactDOM.render(<SearchArea />,
    document.getElementById('searcharea')
);
