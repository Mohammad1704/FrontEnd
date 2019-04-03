import React from "react";
import apiUrl from "../apiConfig";
import EditProfile from "./EditProfile"
import { getUser } from "../services/AuthService";
class Profile extends React.Component {
  state = {
    user: {
      business: []
    }
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

  handleDeleteBusiness = businessId => {
    let url = `${apiUrl}/business/${businessId}`;  //`${apiUrl}/user/${getUser().id}/businesses/${this.props.id}`;

    fetch(url, {
      mode: "cors",
      credentials: "include",
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
      // window.location.reload()
      this.props.changeActivePage("Home")
      this.props.changeActivePage("profile")
      if (data.status > 299) 
        this.setState({ err: data.message});
      else {
        console.log(data);
  //       (index, event) => {
  //   const user = {...this.state.user}
  //   user.business.splice(index, 1)    
  //   this.setState({ user : user })
  // }
  
      }
    })
      .catch(e => console.log(e));
  };
  // handleClickIndex(index, event){
  //   eval(this[event.target.name]).bind(this)(index, event)
  // }
  
  render() {
    // console.log(this.state.user.car_pic, "sss")
    // var imageName = require(`{this.state.user.car_pic}`)

    const { user, activePage } = this.state;
    return (
      
      <React.Fragment>
      {/* ----->create business button will send u to form  */}
      
        <div>Profile
          {/* profile-card */}
          <aside className="">  
            <div className="container">
              <div className="row">
                <div className="col-md-6">

                  <img src={this.state.user.car_pic} alt={this.state.user.car_pic} className="profile-pic img-thumbnail"/>
                </div>
                <div className="col-md-6 details">
                  <blockquote>
                    <h5>{this.state.user.name}</h5>

                    <small>{this.state.user.email}<i className="icon-map-marker"></i></small>
                    
                    <small>{this.state.user.phone_number}<i className="icon-map-marker"></i></small>
                    <h6>additional info</h6>
                    <p>{this.state.user.additional_info}</p>
                    {/* <div className="container">
                    <ul>
                      {this.state.user.business.map(business=> (
                        <div>
                          <h1>{business.shop_name}</h1>
                          <h3>{business.location}</h3>
                          <button onClick={()=>this.props.changeActivePage('edit-business', business.id)}>Edit</button>
                          <button>Delete</button>  
                        </div>
                      ))}
                    </ul></div> */}
                  </blockquote>
                </div>
              </div>
            </div>
          </aside>
        </div>

       
        <EditProfile changeActivePage={this.props.changeActivePage}/>

 {this.state.user.business.map(business=> (
            <div className="card elevation-2dp">
           
                <div>
              <h3>  {business.shop_name}</h3>
                <h5>  {business.location}</h5>
                <h5>  {business.opining_time}</h5>
                <h6>  {business.closing_time}</h6>
                <h6>  {business.phone_number}</h6>
                <image src= {business.menu}/> 
                <button className="btn btn-secondary" onClick={()=>this.props.changeActivePage('edit-business', business.id)}><i className="glyphicon glyphicon-pencil"></i></button>
                <button className="btn btn-danger"  onClick={()=>this.handleDeleteBusiness(business.id)}><i className="glyphicon glyphicon-trash"></i> </button>  
             </div>
          </div>
      ))}
      </React.Fragment>
    )
  }
}

export default Profile;
