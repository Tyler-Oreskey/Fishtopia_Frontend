import React, { Component } from 'react';
import { FormControl, Button, ControlLabel } from 'react-bootstrap'
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as nameActions from '../../actions/nameActions'

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
      }
    }
  }

  render() {
    //create months array
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

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
              <option value="other">...</option>
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
