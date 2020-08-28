
import React from 'react';
import Container from '@material-ui/core/Container';
import './Support.css';

export default function Support() {
  return (
    <React.Fragment>
      <Container maxWidth="md" component="main">
        Support
        <div className="container">
  <header className="header">
    <h1 id="title" className="text-center">iCode Support Form</h1>
    <p id="description" class="description text-center">
      Thank you for taking the time
    </p>
  </header>
  <form id="survey-form">
    <div className="form-group">
      <label id="name-label" for="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        class="form-control"
        placeholder="Enter your name"
        required
      />
    </div>
    <div className="form-group">
      <label id="email-label" for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        class="form-control"
        placeholder="Enter your Email"
        required
      />
    </div>
    <div className="form-group">
      <label id="number-label" for="number"
        >Age<span class="clue">(optional)</span></label>
      <input
        type="number"
        name="age"
        id="number"
        min="10"
        max="99"
        class="form-control"
        placeholder="Age"
      />
    </div>
    <div className="form-group">
      <p>Which option best describes your current role?</p>
      <select id="dropdown" name="role" class="form-control" required>
        <option disabled selected value>Select current role</option>
        <option value="student">Student</option>
        <option value="job">Full Time Job</option>
        <option value="learner">Full Time Learner</option>
        <option value="preferNo">Prefer not to say</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div className="form-group">
      <p>Would you like to recieve our news through email?</p>
      <label>
        <input
          name="user-recommend"
          value="definitely"
          type="radio"
          class="input-radio"
          checked
        />Yes sure</label>
      <label>
        <input
          name="user-recommend"
          value="not-sure"
          type="radio"
          class="input-radio"
        />No thanks</label>
    </div>
    <div className="form-group">
      <p>What is your issue?</p>
      <textarea
        id="comments"
        class="input-textarea"
        name="comment"
        placeholder="Enter your message here..."
      ></textarea>
    </div>

    <div className="form-group">
      <button type="submit" id="submit" class="submit-button">
        Submit
      </button>
    </div>
  </form>
</div>
      </Container>
    </React.Fragment>
  )
}