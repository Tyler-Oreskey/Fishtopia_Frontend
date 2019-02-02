import React, { Component } from 'react';
import { FormControl, ControlLabel } from 'react-bootstrap'
import { Container } from 'reactstrap'
import './SubmitForm.css'

class SubmitForm extends Component {
  constructor (props){
    super(props)

    this.state = {
      //state for form
      name: '', //autofilled from oauth
      fish_name: '',
      fish_size: '',
      fishing_type: '', //either fly or spin
      dry_fly: '',
      dry_size: '',
      wet_fly: '',
      wet_size: '',
      month: '',
      day: '',
      fish_pic: '',
      comments: '',
      lat: this.props.position.lat,
      lng: this.props.position.lng,

      //state for api arrays
      fish: [],
      wet: [],
      dry: [],
      post: [],

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
  }

//   // allow user to post to db
//   async postFish(id) {
//   const response = await fetch (`${process.env.REACT_APP_API_URL}/users_post`, {
//     method: 'POST',
//     mode: "cors",
//     cache: "no-cache",
//     credentials: "same-origin",
//     headers: {
//       'Accept': 'application/JSON',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       fish_id: fish.id,
//       fish_size: ,
//       fishing_type: ,
//       dry_fly: ,
//       dry_size: ,
//       wet_fly: ,
//       wet_size: ,
//       month: ,
//       day: ,
//       fish_pic: ,
//       comments: ,
//       lat: lat,
//       lng: lng,
//     })
//   })
//   const json = await response.json()
//   console.log(json)
// }

//handle user name input
handleName = (e) => {
  if (!e.target.value) {
    return ''
  }else {
    this.setState({
      name: e.target.value
    })
  }
  console.log('my name',this.state.name);
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
  if (!e.target.value || typeof e.target.value !== 'number') {
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
  if (!e.target.value || typeof e.target.value !== 'number') {
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
  if (!e.target.value || typeof e.target.value !== 'number') {
    return ''
  }else {
    this.setState({
      day: e.target.value
    })
  }
}

//handle month selection
handleFishPic = (e) => {
  if (!e.target.value) {
    return ''
  }else {
    this.setState({
      fish_pic: e.target.value
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

    const position = this.props.position
    const { lat, lng } = position
    //map over fish array from API to dynamically create selection items
    let listFish = this.state.fish.map(fish => (
      <option key={fish.id} value={fish.fish_name}>{fish.fish_name}</option>
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
          <h1>Submit Your Fish!</h1>
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              id="formControlsName"
              type="text"
              label="First Name"
              placeholder="Enter Name"
              onChange={this.handleName}
              value={this.state.name}
            />

            <div className="spacing form">
              <ControlLabel>Select Fish Caught</ControlLabel>
              <select className="fish form-control" value={this.state.value} onChange={this.handleFishCaught}>
              <option value='' disabled selected>Select Fish</option>
                {listFish}
              </select>
            </div>

            <ControlLabel>Fish Size (inches)</ControlLabel>
            <FormControl
              id="formControlsFishSize"
              type="number"
              label="Fish Size"
              placeholder="Fish Size"
              onChange={this.handleFishSize}
              value={this.state.value}
            />

            <div className="spacing">
              <ControlLabel>Select Fishing Type</ControlLabel>
              <FormControl componentClass="select" placeholder="select" onChange={this.handleFishingType}>
                <option value='' disabled selected>Select Fishing Type</option>
                <option value='Spin Fishing'>Spin Fishing</option>
                <option value='Fly Fishing'>Fly Fishing</option>
              </FormControl>
            </div>

            <div className="dry">
              <ControlLabel>Dry Fly</ControlLabel>
                <select className="dry form-control" value={this.state.value} onChange={this.handleDryFly}>
                <option value='' disabled selected>Select Dry Fly</option>
                  {listDry}
                </select>
            </div>

            <ControlLabel>Dry Fly Size</ControlLabel>
            <FormControl
              id="formControlsDryFlySize"
              type="number"
              label="Dry Fly Size"
              placeholder="Dry Fly Size"
              onChange={this.handleDryFlySize}
              value={this.state.value}
            />

            <div className="wet">
              <ControlLabel>Wet Fly</ControlLabel>
                <select className="wet form-control" value={this.state.value} onChange={this.handleWetFly}>
                <option value='' disabled selected>Select Wet Fly</option>
                  {listWet}
                </select>
            </div>

            <ControlLabel>Wet Fly Size</ControlLabel>
            <FormControl
              id="formControlsWetFlySize"
              type="number"
              label="Wet Fly Size"
              placeholder="Wet Fly Size"
              onChange={this.handleWetFlySize}
              value={this.state.value}
            />

            <div className="date">
              <ControlLabel>Month</ControlLabel>
                <select className="date form-control" value={this.state.value} onChange={this.handleMonth}>
                <option value='' disabled selected>Select Month</option>
                  {listMonths}
                </select>

              <ControlLabel>Day</ControlLabel>
                <select className="date form-control" value={this.state.value} onChange={this.handleDay}>
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
                  onChange={this.handleFishPic}
                />
            </div>

            <div className="spacing">
              <ControlLabel>Comments</ControlLabel>
              <FormControl componentClass="textarea" onChange={this.handleComments} placeholder="comments 255 characters max" />
            </div>
          </form>
        </Container>
    );
  }
}

export default SubmitForm;
