import React, { Component } from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import { Container } from '../components/Grid/Grid';
import SavedList from '../components/SavedList/SavedList';

class MySavedBooks extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    API.getBooks()
      .then((res) => this.setState({ savedBooks: res.data }))
      .catch((err) => console.log(err));
  }

  handleDeleteButton = (id) => {
    API.deleteBook(id)
      .then((res) => this.componentDidMount())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container fluid className='container'>
        <Jumbotron />
        <Container>
          <SavedList
            savedBooks={this.state.savedBooks}
            handleDeleteButton={this.handleDeleteButton}
          />
        </Container>
      </Container>
    );
  }
}

export default MySavedBooks;
