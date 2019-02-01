import React, {Component} from "react";
import SubmitForm from '../SubmitForm/SubmitForm'

class FishList extends Component {
  constructor(props){
    super(props)
    this.state = {
      fish: []
    }
  }
  //get request to grab all the fish from databse
  async componentDidMount() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/fish`, {
      method: 'GET',
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        'Accept': 'application/JSON',
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()
    this.setState({
      ...this.state,
      fish: json
    })
  }

  render() {
    //map over fish array from API to dynamically create selection items
    let listFish = this.state.fish.map(fish => (
      <option key={fish.id} value={fish.id}>{fish.fish_name}</option>
    ));
    return (
      <div>
        <SubmitForm listFish={listFish}/>
      </div>
    );
  }
}
export default FishList;
