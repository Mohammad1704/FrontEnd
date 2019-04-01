import React from "react";
import apiUrl from "../apiConfig";
import EditProfile from "./EditProfile"
import { getUser } from "../services/AuthService";
import EditBusiness from "./EditBusiness";
class Profile extends React.Component {
  state = {
    user: {}
  };
  componentDidMount() {
    // check if we have a token in the local storage
    let url = `${apiUrl}/user/${getUser().id}`;

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
        this.setState({ user: data.user}); 

      }
    })
    .catch(e => console.log(e));
  }
  render() {
    const { user, activePage } = this.state;
    return (
      <React.Fragment>
      {/* ----->create business button will send u to form  */}

        <div>Profile
          {/* profile-card */}
          <aside className="">  
            <div className="container">
              <div className="row">
                <div className="col-md-6 img">
                  <img src={this.state.user.car_pic} alt={this.state.user.car_pic} className="img-rounded"/>
                </div>
                <div className="col-md-6 details">
                  <blockquote>
                    <h5>{this.state.user.name}</h5>

                    <small><cite title="email">{this.state.user.email}<i className="icon-map-marker"></i></cite></small>
                    
                    <small><cite title="phone_number">{this.state.user.phone_number}<i className="icon-map-marker"></i></cite></small>
                    <h6>additional info</h6>
                    <p>{this.state.user.additional_info}</p>
                  </blockquote>
                </div>
              </div>
            </div>
          </aside>
        </div>
        <EditProfile changeActivePage={this.props.changeActivePage}/>
        <EditBusiness changeActivePage={this.props.changeActivePage}/>
      </React.Fragment>
    )
  }
}

export default Profile;
