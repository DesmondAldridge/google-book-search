import React from 'react';
import './Form.css';

const Form = (props) => {
  return (
    <form>
      <div>
        <br></br>
        <input
          className='col-12 input-box'
          value={props.search}
          type='text'
          name='searchBook'
          placeholder="Please enter the name of the book"
          onChange={props.handleInputChange}
        />
      </div>
      <button
        type='submit'
        className='submitBtn'
        onClick={props.handleFormSubmit}
      >
        Search
      </button>
    </form>
  );
};

export default Form;
