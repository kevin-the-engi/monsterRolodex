import React from 'react';
import './Search.css';

// class Search extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       search: ''
//     }

//     this.searchHandle = this.searchHandle.bind(this);
//   }

//   searchHandle(e) {
//     e.preventDefault();

//     const { name, value } = e.target;

//     this.setState({
//       [name]: value
//     }, () => {
//       this.props.filter(this.state.search);
//     })
//   }

//   render () {
//     const { search } = this.state;

//     return (
//       <div className="search">
//         <input
//           type="text"
//           name="search"
//           value={search}
//           onChange={this.searchHandle}
//         />
//       </div>
//     )
//   }
// }

const Search = ({ placeholder, filter }) => {
  return (
    <input
      type="text"
      name="search"
      placeholder={placeholder}
      onChange={filter}
    />
  )
}

export default Search;