import React, { Component } from 'react';
import { FormControl, ControlLabel, Button } from 'react-bootstrap'
import { Container } from 'reactstrap'
import './SubmitForm.css'

import store from '../../Store';

class SubmitForm extends Component {
  constructor (props){
    super(props)

    this.onFormSubmit = this.onFormSubmit.bind(this)

    this.state = {
      show: store.getState().show,
      //state for form
      users_id: 1,
      name: '', //autofilled from oauth
      fish_name: '',
      fish_size: null,
      fishing_type: '', //either fly or spin
      dry_fly: '',
      dry_size: null,
      wet_fly: '',
      wet_size: null,
      month: '',
      day: null,
      comments: '',
      lat: this.props.position.lat,
      lng: this.props.position.lng,

      //state for api arrays
      users:[],
      fish: [],
      wet: [],
      dry: [],
      users_post: [],

      //state to create months array
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

  componentDidMount() {
  // hook up callback from store when it's changed
  this.unsubscribe = store.onChange(() => {
      this.setState({
        show: store.getState().show,
      })
    });
    store.setState({ handleClose: this.handleClose });
  }

  // get request to grab all the fish from databse
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
    //get request to grab all the wet flies from databse
    const wetResponse = await fetch(`${process.env.REACT_APP_API_URL}/wet`, {
      method: 'GET',
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        'Accept': 'application/JSON',
        'Content-Type': 'application/json'
      }
    })
    const wetJson = await wetResponse.json()
    this.setState({
      ...this.state,
      wet: wetJson
    })

    //get request to grab all the dry flies from databse
    const dryResponse = await fetch(`${process.env.REACT_APP_API_URL}/dry`, {
      method: 'GET',
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        'Accept': 'application/JSON',
        'Content-Type': 'application/json'
      }
    })
    const dryJson = await dryResponse.json()
    this.setState({
      ...this.state,
      dry: dryJson
    })

    //get request to grab all the dry flies from databse
    const usersResponse = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
      method: 'GET',
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        'Accept': 'application/JSON',
        'Content-Type': 'application/json'
      }
    })
    const usersJson = await usersResponse.json()
    this.setState({
      ...this.state,
      users: usersJson
    })
  }

  // allow user to post to db
  async onFormSubmit() {
  const response = await fetch (`${process.env.REACT_APP_API_URL}/users_post`, {
    method: 'POST',
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      'Accept': 'application/JSON',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      users_id: this.state.users_id,
      name: this.state.name,
      fish_name: this.state.fish_name,
      fish_size: this.state.fish_size,
      fishing_type: this.state.fishing_type,
      dry_fly: this.state.dry_fly,
      dry_size: this.state.dry_size,
      wet_fly: this.state.wet_fly,
      wet_size: this.state.wet_size,
      month: this.state.month,
      day: this.state.dat,
      comments: this.state.comments,
      lat: this.state.lat,
      lng: this.state.lng
    })
  })

  const json = await response.json()
  console.log(json)
  this.onSubmitSucess(response)
}

//give user success notification if successful post
onSubmitSucess = (response) => {
  if (response.status >= 200 && response.status <= 299) {
    this.handleClose()
    setTimeout( function ( ) { alert( "Your fish has been submitted!!!" ); }, 1000 )
  }else {
    throw "There was an error attempting to submit your post";
  }
}

//handle modal close after submit
handleClose(){
  store.setState({
    show: false
  })
}

//handle user name input
handleName = (e) => {
  if (!e.target.value) {
    return ''
  }else {
    this.setState({
      name: e.target.value
    })
  }
}

//handle fish caught selection
handleFishCaught = (e) => {
  if (!e.target.value) {
    return ''
  }else {
    this.setState({
      fish_name: e.target.value
    })
  }
}

//handle fish size
handleFishSize = (e) => {
  if (!e.target.value) {
    return null
  }else {
    this.setState({
      fish_size: e.target.value
    })
  }
}

//handle fishing type selection
handleFishingType = (e) => {
  if (!e.target.value) {
    return ''
  }else {
    this.setState({
      fishing_type: e.target.value
    })
  }
}

//handle dry fly selection
handleDryFly = (e) => {
  if (!e.target.value) {
    return ''
  }else {
    this.setState({
      dry_fly: e.target.value
    })
  }
}

//handle dry fly size selection
handleDryFlySize = (e) => {
  if (!e.target.value) {
    return ''
  }else {
    this.setState({
      dry_size: e.target.value
    })
  }
}

//handle wet fly selection
handleWetFly = (e) => {
  if (!e.target.value) {
    return ''
  }else {
    this.setState({
      wet_fly: e.target.value
    })
  }
}

//handle wet fly size selection
handleWetFlySize = (e) => {
  if (!e.target.value) {
    return ''
  }else {
    this.setState({
      wet_size: e.target.value
    })
  }
}

//handle month selection
handleMonth = (e) => {
  if (!e.target.value) {
    return ''
  }else {
    this.setState({
      month: e.target.value
    })
  }
}

//handle day selection
handleDay = (e) => {
  if (!e.target.value) {
    return ''
  }else {
    this.setState({
      day: e.target.value
    })
  }
}

//handle month selection
handleComments = (e) => {
  if (!e.target.value) {
    return ''
  }else {
    this.setState({
      comments: e.target.value
    })
  }
}

  render() {
    console.log('show', this.props.show);

    const position = this.props.position
    const { lat, lng } = position

    //map over users array
    let listUsers = this.state.users.map(users => (
      <option key={users.id} value={users.id}>{users.id}</option>
    ));

    //map over fish array from API to dynamically create selection items
    let listUsersPost = this.state.users_post.map(users_post => (
      <option key={users_post.id} value={users_post.id}>{users_post.id}</option>
    ));

    //map over fish array from API to dynamically create selection items
    let listFish = this.state.fish.map(fish => (
      <option key={fish.id} value={fish.id}>{fish.fish_name}</option>
    ));

    let fishID = this.state.fish.map(fish => (
      <option key={fish.id} value={fish.id}>{fish.id}</option>
    ));

    //map over dry array from API to dynamically create selection items
    let listDry = this.state.dry.map(dry => (
      <option key={dry.id} value={dry.id}>{dry.name}</option>
    ));

    //map over wet array from API to dynamically create selection items
    let listWet = this.state.wet.map(wet => (
      <option key={wet.id} value={wet.id}>{wet.name}</option>
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
          <h1 className="submitYourFish">Submit Your Fish!</h1>
            <FormControl
              id="formControlsName"
              type="text"
              label="First Name"
              placeholder="Enter First Name"
              onChange={this.handleName}
              value={this.state.name}
            />

            <div className="spacing form">
              <select className="fish form-control" value={this.state.value} onChange={this.handleFishCaught}>
              <option value='' disabled selected>Select Fish Caught</option>
                {listFish}
              </select>
            </div>

            <FormControl
              style={{'margin-top': '10px'}}
              id="formControlsFishSize"
              type="number" min="0"
              label="Fish Size"
              placeholder="Fish Size (inches)"
              onChange={this.handleFishSize}
              value={this.state.value}
            />

            <div className="spacing" style={{'margin-top': '10px'}}>
              <FormControl componentClass="select" placeholder="select" onChange={this.handleFishingType}>
                <option value='' disabled selected>Select Fishing Type</option>
                <option value='Spin Fishing'>Spin Fishing</option>
                <option value='Fly Fishing'>Fly Fishing</option>
              </FormControl>
            </div>

            <div className="dry" style={{'margin-top': '10px'}}>
                <select className="dry form-control" value={this.state.value} onChange={this.handleDryFly}>
                <option value='' disabled selected>Dry Fly Used (if any)</option>
                  {listDry}
                </select>
            </div>

            <FormControl
              style={{'margin-top': '10px'}}
              id="formControlsDryFlySize"
              type="number" min="0"
              label="Dry Fly Size"
              placeholder="Dry Fly Size"
              onChange={this.handleDryFlySize}
              value={this.state.value}
            />

            <div className="wet" style={{'margin-top': '10px'}}>
                <select className="wet form-control" value={this.state.value} onChange={this.handleWetFly}>
                <option value='' disabled selected>Wet Fly Used (if any)</option>
                  {listWet}
                </select>
            </div>

            <FormControl
              style={{'margin-top': '10px'}}
              id="formControlsWetFlySize"
              type="number" min="0"
              label="Wet Fly Size"
              placeholder="Wet Fly Size"
              onChange={this.handleWetFlySize}
              value={this.state.value}
            />

            <div className="month" style={{'margin-top': '10px'}}>
                <select className="date form-control" value={this.state.value} onChange={this.handleMonth}>
                <option value='' disabled selected>Select Month Caught</option>
                  {listMonths}
                </select>
              </div>

              <div className="day" style={{'margin-top': '10px'}}>
                <select className="date form-control" value={this.state.value} onChange={this.handleDay}>
                <option value='' disabled selected>Select Day Caught</option>
                  {listDays}
                </select>
            </div>

            <div className="spacing">
              <FormControl componentClass="textarea" onChange={this.handleComments} placeholder="comments 255 characters max" />
            </div>
            <Button className="submit" bsStyle="success" onClick={this.onFormSubmit}>Submit</Button>
          </form>
        </Container>
    );
  }
}

export default SubmitForm;
