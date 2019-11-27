import React from 'react';
import './App.css';
import Axios from 'axios';

class Display_Book extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };

     this.fetchData = this.fetchData.bind(this);
     this.renderData = this.renderData.bind(this);
     this.fetchData();
  }

  render() {
    
  return (
    <div className="text-center">
    <h4 id='title'>List of Books</h4>
    <table className="table">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">AUTHOR</th>
            <th scope="col">COST</th>
            </tr>
        </thead>
       <tbody>
         {this.renderData()}
       </tbody>
    </table>
 </div>
  );
  }


fetchData() {
    Axios.get("http://localhost:8082/library/books").then(response => {
      this.setState({books : response.data});
     })
}

renderData() {
  return this.state.books.map((book, index) =>{
    return(
      <tr>
        <td>{book.id}</td>
        <td>{book.name}</td>
        <td>{book.author}</td>
        <td>{book.cost}</td>
      </tr>
    )
  })
} 
}

export default Display_Book;
