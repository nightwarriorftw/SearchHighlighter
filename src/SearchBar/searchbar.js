import React from "react";
import { Post } from "../Output/post";
import { getSearchResults } from "../Utils/searchbar-utils";


export class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "hello",
      searchResults: getSearchResults("hello")
    };
  }

  onKeyDown = event => {
    if (event.key === "Enter") {
      let term = event.target.value;
      this.setState({
        searchTerm: term,
        searchResults: getSearchResults(term)
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <input
            placeholder="Search"
            defaultValue="hello"
            onKeyDown={this.onKeyDown}
          />
        </div>
        {this.state.searchTerm && (
          <p>Search results for {this.state.searchTerm}</p>
        )}
        <div>
          {this.state.searchTerm &&
            this.state.searchResults.map((post, index) => (
              <Post key={post.id} content={post.content} index={index} />
            ))}
        </div>
      </div>
    );
  }
}
