import React, { Component } from "react";
import Nav from "./components/Nav";
import "./App.css";
import { getUser, Signout } from "./services/AuthService";
import SigninForm from "./components/authForm.js/SigninForm";
import SignupForm from "./components/authForm.js/SignupForm";
import ChangePasswordForm from "./components/authForm.js/ChangePasswordForm";
import Home from "./components/Home";
import Profile from "./components/Profile";
import CreateBusiness from "./components/createBusiness";
import EditBusiness from "./components/EditBusiness";
import backgroundImage from './components/cover_photo_2.png';

class App extends Component {
  state = {
    user: null,
    activePage: "home",
    businessId: null
  };
  componentDidMount() {
    // check if we have a token in the local storage
    const user = getUser();
    if (user) {
      this.setState({ user });
    }
  }

  changeActivePage = (activePage, businessId) => {
    this.setState({ activePage: activePage, businessId: businessId });
  };
  onSignin = () => {
    this.setState({ user: getUser() });
    this.changeActivePage("profile");
  };
  onSignout = () => {
    console.log("sigin out");
    this.setState({ user: null });
    Signout();
  };
  render() {
      let background = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    
  }
  
    const { user, activePage } = this.state;
    return (
      <div style={{
    backgroundColor: "#F5F5F5",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}>
        <Nav
          user={user}
          changeActivePage={this.changeActivePage}
          onSignout={this.onSignout}
        />

        <div className="container">
          {activePage === "home" ? <Home /> : ""}
          {activePage === "sign-in" ? (
            <SigninForm onSignin={this.onSignin} />
          ) : (
            ""
          )}
          {activePage === "sign-up" ? (
            <SignupForm onSignin={this.onSignin} />
          ) : (
            ""
          )}
          {activePage === "change-password" ? (
            <ChangePasswordForm changeActivePage={this.changeActivePage} />
          ) : (
            ""
          )}
          {activePage === "profile" ? <Profile changeActivePage={this.changeActivePage} /> : ""}
          {activePage === "add-b" ? <CreateBusiness changeActivePage={this.changeActivePage} /> : ""}
          {activePage === "edit-business" ? <EditBusiness id={this.state.businessId} changeActivePage={this.changeActivePage} /> : ""}
        </div>
      </div>
    );
  }
}

export default App;
