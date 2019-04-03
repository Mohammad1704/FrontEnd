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
        
 {this.state.businesses.map(business => (
            <div className=" card elevation-2dp">
           
                <div>
              <h3>  {business.shop_name}</h3>
                <h5>  {business.location}</h5>
                <h5>  {business.opining_time}</h5>
                <h6>  {business.closing_time}</h6>
                {/* {business.menu} */}
                <h6>  {business.phone_number}</h6>
             </div>
             <img src={business.menu} className="mx-auto rounded mx-auto d-block"/>
          </div>
      ))}
      </React.Fragment>
    )
  }
}

export default Profile;


{/* <div className="card elevation-3dp">
	<div className="title">
		Testing 3dp
	</div>
	<div className="supporting-text">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
	</div> */}