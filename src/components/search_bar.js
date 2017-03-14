import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {
      userName : ''
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Enter a Github User's name"
          value={this.state.userName}
          onChange={ event =>  this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(userName) {
    this.setState({userName});
    this.props.onSearchTermChange(userName);
  }

}

export default SearchBar;
