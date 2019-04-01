import React from "react";
import apiUrl from "../apiConfig";

class Profile extends React.Component {
  state = {
    businesses: []
  };
  componentDidMount() {
    // check if we have a token in the local storage
    let url = `${apiUrl}/businesses`;

    fetch(url, {
      mode: "cors",
      credentials: "include",
      method: "GET",
      headers: {
        "Content-type": "application/json"
      },
    })
    .then(res => res.json())
    .then(data => {
      if (data.status > 299) 
        this.setState({ err: data.message});
      else {
        console.log(data)
        this.setState({ businesses: data.businesses});

      }
    })
    .catch(e => console.log(e));
  }
  render() {
    const { user, activePage } = this.state;
    return (
      <React.Fragment>
      {/* ----->create bussnises button will send u to form  */}
        <head>
      </head>
            <ul>
              {this.state.businesses.map(business => <li>{business.shop_name}</li>)}
              {this.state.businesses.map(business => <li>{business.location}</li>)}
              {this.state.businesses.map(business => <li>{business.opining_time}</li>)}
              {this.state.businesses.map(business => <li>{business.closing_time}</li>)}
              {this.state.businesses.map(business => <li>{business.menu}</li>)}
              {this.state.businesses.map(business => <li>{business.phone_number}</li>)}
            </ul>
      </React.Fragment>
    )
  }
}

export default Profile;
