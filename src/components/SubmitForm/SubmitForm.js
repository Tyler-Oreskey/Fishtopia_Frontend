import React, { Component } from 'react';
import { FormControl, ControlLabel } from 'react-bootstrap'
import { Container } from 'reactstrap'
import './SubmitForm.css'

class SubmitForm extends Component {
  constructor (props){
    super(props)

    this.state = {
      first_name: '', //autofilled from oauth
      fishing_type: '', //either fly or spin
      month: '',
      day: '',
      fish_pic: '',
      comments: '',
      fish: [],
      tackle: [],
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

  //get request to grab all the fish from databse
  async componentDidMount() {
    const fishResponse = await fetch(`${process.env.REACT_APP_API_URL}/fish`, {
      method: 'GET',
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        'Accept': 'application/JSON',
        'Content-Type': 'application/json'
      }
    })
    const fishJson = await fishResponse.json()
    this.setState({
      ...this.state,
      fish: fishJson
    })
    //get request to grab all the tackle from databse
    const tackleResponse = await fetch(`${process.env.REACT_APP_API_URL}/tackle`, {
      method: 'GET',
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        'Accept': 'application/JSON',
        'Content-Type': 'application/json'
      }
    })
    const tackleJson = await tackleResponse.json()
    this.setState({
      ...this.state,
      tackle: tackleJson
    })
  }

  render() {
    //map over fish array from API to dynamically create selection items
    let listFish = this.state.fish.map(fish => (
      <option key={fish.id} value={fish.id}>{fish.fish_name}</option>
    ));

    //map over tackle array from API to dynamically create selection items
    let listTackle = this.state.tackle.map(tackle => (
      <option key={tackle.id} value={tackle.id}>{tackle.name}</option>
    ));

    //map over months object and dynamically create selection items
    let listMonths = this.state.months.map(month => (
      <option key={month.id} value={month.id}>{month.name}</option>
    ));

    //loop over an array to display days in a month
    let listDays = []
    for (let i = 1; i <= 31; i++) {
      listDays.push(<option key={i} value={i}>{i}</option>)
    }

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

            <div className="spacing form">
              <ControlLabel>Select Fish Caught</ControlLabel>
              <select className="fish form-control" value={this.state.value} onChange={this.handleChange}>
              <option value='' disabled selected>Select Fish</option>
                {listFish}
              </select>
            </div>

            <div className="spacing">
              <ControlLabel>Select Fishing Type</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value='' disabled selected>Select Fishing Type</option>
                <option value="other">Spin Fishing</option>
                <option value="other">Fly Fishing</option>
              </FormControl>
            </div>

            <div className="dry">
              <ControlLabel>Dry Fly</ControlLabel>
                <select className="dry form-control" value={this.state.value} onChange={this.handleChange}>
                <option value='' disabled selected>Select Dry Fly</option>
                  {listTackle}
                </select>
            </div>

            <div className="wet">
              <ControlLabel>Wet Fly</ControlLabel>
                <select className="wet form-control" value={this.state.value} onChange={this.handleChange}>
                <option value='' disabled selected>Select Wet Fly</option>
                  {listTackle}
                </select>
            </div>

            <div className="date">
              <ControlLabel>Month</ControlLabel>
                <select className="date form-control" value={this.state.value} onChange={this.handleChange}>
                <option value='' disabled selected>Select Month</option>
                  {listMonths}
                </select>

              <ControlLabel>Day</ControlLabel>
                <select className="date form-control" value={this.state.value} onChange={this.handleChange}>
                <option value='' disabled selected>Select Day</option>
                  {listDays}
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
              <FormControl componentClass="textarea" placeholder="comments 255 characters max" />
            </div>
          </form>
        </Container>
    );
  }
}

export default SubmitForm;
