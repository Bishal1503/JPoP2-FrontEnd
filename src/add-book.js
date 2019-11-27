import React from 'react';
import './App.css';
import Axios from 'axios';

class Add_Book extends React.Component {
  
  constructor(props){
    super(props);
    this.state =  {
      data : {
        name: "",
        author: "",
        cost: ""
      }
    };

    this.nameChange = this.nameChange.bind(this);
    this.authorChange = this.authorChange.bind(this);
    this.costChange = this.authorChange.bind(this);
    this.addBook = this.addBook.bind(this);
  }

  nameChange(event) {
    this.state.data.name = event.target.value;
  }

  authorChange(event) {
    this.state.data.author = event.target.value;
  }

  costChange(event) {
    this.state.data.cost = event.target.value;
  }

  render(){
  return ( 
    <div>
      <form onSubmit={this.addBook}>
        <div className="form-group">
            <label htmlFor="bookName">Name of the Book</label>
            <input type="text" className="form-control" id="bookName" aria-describedby="bookName" placeholder="Enter book name" onChange={this.nameChange}/>
        </div>
        <div className="form-group">
            <label htmlFor="author">Author</label>
            <input type="text" className="form-control" id="author" placeholder="Enter author name" onChange={this.authorChange}/>
        </div>
        <div className="form-group">
            <label htmlFor="cost">Cost</label>
            <input type="text" className="form-control" id="cost" placeholder="Enter cost" onChange={this.costChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>  
    </div>
  );
  }

  addBook(event) {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    Axios.post("http://localhost:8082/library/book", this.state.data , {headers} ).then(response => {
    if(response.status === 201){
       alert("Success");
     }
     })
     event.preventDefault();
  }
}

export default Add_Book;
