import React, { Component } from "react";
import apiUrl from "../apiConfig";

class EditBusiness extends Component {
    state = {
        formData: {
     
            shop_name:null,
            location: null,
            opining_time:null,
            closing_time:null,
            phone_number:null,
            menu: null
        },
        err: null
      }
  
    handleUpdateRequest = user => {
        let url = `${apiUrl}/EditBusiness`;
  
      console.log(url);
      fetch(url, {
        mode: "cors",
        credentials: "include",
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then(data => {
          if (data.status > 200) this.setState({ err: data.message });
          else {
            this.setState({ err: null });
            this.props.changeActivePage('profile')
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
          <h1>Edit shop name</h1>
          {this.state.err ? (
            <div className="alert alert-danger"> {this.state.err} </div>
          ) : (
            ""
          )}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>location </label>
              <input
                name="location"
                className="form-control"
                onChange={this.handleChange}
              />
              <label>opining_time</label>
              <input
                name="opining_time"
                className="form-control"
                type="text"
                onChange={this.handleChange}
              />
             <label>closing_time</label>
              <input
                name="closing_time"
                className="form-control"
                type="text"
                onChange={this.handleChange}
              />
   
               <label>phone_number</label>
              <input
                name="phone_number"
                className="form-control"
                type="text"
                onChange={this.handleChange}
              />
            
               <label>menu</label>
              <input
                name="menu"
                className="form-control"
                type="text"
                onChange={this.handleChange}
              />
            
            </div>
  
            <button type="submit" className="btn btn-primary" onClick={this.handleChange}>
              Update Business
            </button>
          </form>
        </div>
      );
    }
  }

  export default EditBusiness;