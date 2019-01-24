import React, { Component } from 'react';
import { FormControl, Button, ControlLabel } from 'react-bootstrap'
import { Container, Row, Col } from 'reactstrap'

class SubmitForm extends Component {
  render() {
    return (
      <Container>
        <form>
          <h1>Submit Your Fish!</h1>

            <ControlLabel>Your Name</ControlLabel>
            <FormControl
              id="formControlsName"
              type="text"
              label="First Name"
              placeholder="Enter Name"
            />

            <ControlLabel>Select Fish Caught</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>

            <ControlLabel>Select Fishing Type</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">Spin Fishing</option>
              <option value="other">Fly Fishing</option>
            </FormControl>

            <ControlLabel>Picture Of Fish</ControlLabel>
            <FormControl
              id="formControlsFile"
              type="file"
              label="File"
              help="Example block-level help text here."
            />

            <ControlLabel>Textarea</ControlLabel>
            <FormControl componentClass="textarea" placeholder="textarea" />

            <Button type="submit">Submit</Button>
          </form>
        </Container>
    );
  }
}

export default SubmitForm;
