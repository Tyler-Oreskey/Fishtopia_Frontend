import React, {Component} from "react";

class TackleList extends Component {
  constructor(props){
    super(props)
    this.state = {
      tackle: []
    }
  }
  //get request to grab all tackle from databse
  async componentDidMount() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/tackle`, {
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
      tackle: json
    })
  }

  render() {
    //map over tackle array from API to dynamically create selection items
    let listTackle = this.state.tackle.map(tackle => (
      <option key={tackle.id} value={tackle.id}>{tackle.name}{tackle.type}</option>
    ));

    return (
      <div>{listTackle}</div>
    );
  }
}
export default TackleList;
