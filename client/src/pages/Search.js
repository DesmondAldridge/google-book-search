import React, { Component } from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import { Container, Row, Col } from '../components/Grid/Grid';
import Form from '../components/Form/Form';
import ResultsList from '../components/ResultsList/ResultsList';

class Search extends Component {
  state = {
    search: '',
    books: [],
    error: '',
    message: '',
  };

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    API.searchGoogleBooks(this.state.search)
      .then((res) => {
        if (res.data.items === 'error') {
          throw new Error(res.data.items);
        } else {
          let results = res.data.items;

          results = results.map((result) => {
            result = {
              key: result.id,
              id: result.id,
              title: result.volumeInfo.title,
              author: result.volumeInfo.authors,
              description: result.volumeInfo.description,
              image: result.volumeInfo.imageLinks.thumbnail,
              link: result.volumeInfo.infoLink,
            };
            return result;
          });

          this.setState({ books: results, error: '' });
        }
      })
      .catch((err) => this.setState({ error: err.items }));
  };

  handleSavedButton = (event) => {
    event.preventDefault();
    console.log(this.state.books);
    let savedBooks = this.state.books.filter(
      (book) => book.id === event.target.id
    );
    savedBooks = savedBooks[0];
    API.saveBook(savedBooks)
      .then(this.setState({ message: alert('Your book is saved') }))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>Google Book Search</h1>
        </Jumbotron>
        <Container>
          <Row>
            <Col size='12'>
              <Form
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>
        </Container>
        <br></br>
        <Container>
          <ResultsList
            books={this.state.books}
            handleSavedButton={this.handleSavedButton}
          />
        </Container>
      </Container>
    );
  }
}

export default Search;
