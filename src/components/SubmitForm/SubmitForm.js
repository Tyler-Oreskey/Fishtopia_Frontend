import React, { Component } from 'react';
import { FormControl, Button, ControlLabel } from 'react-bootstrap'
import { Container } from 'reactstrap'
import './SubmitForm.css'
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
        month: '',
        day: '',
        fish_pic: '',
        comments: ''
      },
      months: [
        {id: 0, name: 'January'},
        {id: 1, name: 'February'},
        {id: 2, name: 'March'},
        {id: 3, name: 'April'},
        {id: 4, name: 'May'},
        {id: 5, name: 'June'},
        {id: 6, name: 'July'},
        {id: 7, name: 'August'},
        {id: 8, name: 'September'},
        {id: 9, name: 'October'},
        {id: 10, name: 'November'},
        {id: 11, name: 'December'}
      ],
    }
  }

  render() {

    let listMonths = this.state.months.map(v => (
      <option value={v.id}>{v.name}</option>
    ));

    return (
      <Container className='form-container'>
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

            <div className="spacing">
              <ControlLabel>Select Fish Caught</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="select">select</option>
                <option value="other">{}</option>
              </FormControl>
            </div>

            <div className="spacing">
              <ControlLabel>Select Fishing Type</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="select">select</option>
                <option value="other">Spin Fishing</option>
                <option value="other">Fly Fishing</option>
              </FormControl>
            </div>

            <div className="date">
              <ControlLabel>Month:</ControlLabel>
                <select className="date" value={this.state.value} onChange={this.handleChange}>
                  {listMonths}
                </select>

              <ControlLabel>Day:</ControlLabel>
                <select className="date" value={this.state.value} onChange={this.handleChange}>
                  {listMonths}
                </select>
            </div>

            <div className="spacing">
              <ControlLabel>Picture Of Fish</ControlLabel>
                <FormControl
                  id="formControlsFile"
                  type="file"
                  label="File"
                />
            </div>

            <div className="spacing">
              <ControlLabel>Comments</ControlLabel>
              <FormControl componentClass="textarea" placeholder="comments" />
            </div>

            <div className="submit">
              <Button type="submit" onClick={this.onClickSave}>Submit</Button>
            </div>
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
