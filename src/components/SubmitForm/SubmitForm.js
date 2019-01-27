import React, { Component } from 'react';
import { FormControl, Button, ControlLabel } from 'react-bootstrap'
import { Container } from 'reactstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class SubmitForm extends Component {
  constructor (props, context){
    super(props)

    this.state = {
      form: {
        first_name: '', //autofilled from oauth
        fish_id: null, //pulled in from fish api
        fishing_type: '', //either fly or spin
        year: [],
        months: [],
        day: [],
        fish_pic: '',
        comments: ''
      },
      months: [
        {id: 0, month: 'January'},
        {id: 1, month: 'February'},
        {id: 2, month: 'March'},
        {id: 3, month: 'April'},
        {id: 4, month: 'May'},
        {id: 5, month: 'June'},
        {id: 6, month: 'July'},
        {id: 7, month: 'August'},
        {id: 8, month: 'September'},
        {id: 9, month: 'October'},
        {id: 10, month: 'November'},
        {id: 11, month: 'December'}
      ]
    }
  }

  render() {

    return (
      <Container>
        <form>
          <h1>Submit Your Fish!</h1>
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              id="formControlsName"
              type="text"
              label="First Name"
              placeholder="Enter Name"
              onChange={this.onChange}
              value={this.state.value}
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

            <ControlLabel>Year</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">{}</option>
            </FormControl>

            <ControlLabel>Month</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">{}</option>
            </FormControl>

            <ControlLabel>Day</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>

            <ControlLabel>Picture Of Fish</ControlLabel>
            <FormControl
              id="formControlsFile"
              type="file"
              label="File"
              help="Example block-level help text here."
            />

            <ControlLabel>Comments</ControlLabel>
            <FormControl componentClass="textarea" placeholder="textarea" />

            <Button
            type="submit"
            onClick={this.onClickSave}
            >
            Submit</Button>

          </form>
        </Container>
    );
  }
}

SubmitForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  first_name: PropTypes.array.isRequired
}


function mapStateToProps(state, ownProps){
  return {
    first_name: this.first_name
  }
}

export default connect(mapStateToProps)(SubmitForm);
