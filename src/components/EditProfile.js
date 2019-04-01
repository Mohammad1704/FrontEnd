import React, { Component } from "react";
import apiUrl from "../apiConfig";
import { getUser } from "../services/AuthService";

class EditProfile extends Component {
    state = {
        formData: {
          name: null,
          car_pic:null,
          additional_info:null,
          phone_number: null
        },
        err: null
      }
  
    handleUpdateRequest = user => {
        let url = `${apiUrl}/EditProfile/${getUser().id}`;
      fetch(url, {
        mode: "cors",
        credentials: "include",
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({user: user})
      })
        .then(res => res.json())
        .then(data => {
          if (data.status > 200) {
            console.log(data.message);
            this.setState({ err: data.message });
          } else {
            this.setState({ err: null });
            console.log(data)
            this.props.changeActivePage('home')
          }
        })
        .catch(e => console.log(e));
    };
    handleSubmit = e => {
      e.preventDefault();
      this.handleUpdateRequest(this.state.formData);
    };
  
    handleChange = ({ currentTarget }) => {
      const formData = { ...this.state.formData };
      formData[currentTarget.name] = currentTarget.value;
      this.setState({ formData });
    };
  
    render() {
      return (
        <div className="pt-5 mt-5">
          <h1>Edit Profile</h1>
          {this.state.err ? (
            <div className="alert alert-danger"> {this.state.err} </div>
          ) : (
            ""
          )}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Email </label>
              <input
                name="email"
                className="form-control"
                onChange={this.handleChange}
              />
              <label>Name</label>
              <input
                name="name"
                className="form-control"
                type="text"
                onChange={this.handleChange}
              />
              <label>phone number</label>
              <input
                name="phone_number"
                className="form-control"
                type="text"
                onChange={this.handleChange}
              />
              <label>additional info</label>
              <input
                name="additional_info"
                className="form-control"
                type="text"
                onChange={this.handleChange}
              />
             <label>Car Pic (url)</label>
              <input
                name="Car_Pic"
                className="form-control"
                type="text"
                onChange={this.handleChange}
              />
            </div>
  
            <button type="submit" className="btn btn-primary">
              Update Profile
            </button>
          </form>
        </div>
      );
    }
  }

  export default EditProfile;