import React from "react";

const authenticatedOptions = (changeActivePage, onSignout) => (
  <React.Fragment>
    <head>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>

      <link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Permanent+Marker|Righteous" rel="stylesheet"/></head>
    {/* CHANGE PASSWORD */}
    <li
      className="nav-item"
      onClick={() => changeActivePage("change-password")}
    >
      <div className="nav-link">Change Password</div>
    </li>
    {/* SIGN OUT */}
   

    {/* ADD B */}
    <li className="nav-item" onClick={() => changeActivePage("add-b")}>
      <div className="nav-link">Add Shop</div>
    </li>
    <div className="navbar-right" >
     <li className="nav-item navbar-right" onClick={() => onSignout()}>
      {/* <div className="nav-link">Sign Out</div> */}
      <button className="btn btn-danger navbar-btn ">Sign Out</button>
    </li>
    </div>
  </React.Fragment>
);

const unauthenticatedOptions = changeActivePage => (
  <React.Fragment>
    <ul className="nav navbar-nav navbar-right">
    <li className="glyphicon glyphicon-log-in" onClick={() => changeActivePage("sign-in")}>
      <div className="nav-link">Login</div>
    </li>
    <li className="glyphicon glyphicon-user" onClick={() => changeActivePage("sign-up")}>
      <div className="nav-link">Sign Up</div>
    </li>
</ul>
    


  </React.Fragment>
);

const alwaysOptions = changeActivePage => (
  <React.Fragment>
    <div className="input-group">
    <input type="text" className="form-control" placeholder="Search"/>
    <div className="input-group-btn">
      <button className="btn btn-default" type="submit">
        <i className="glyphicon glyphicon-search"></i>
      </button>
    </div>
  </div>
    <li className="nav-item" onClick={() => changeActivePage("home")}>
      <div className="nav-link "><i className="glyphicon glyphicon-home"></i> </div>
    </li>
    <li className="nav-item" onClick={() => changeActivePage("profile")}>
      <div className="nav-link "><i className="glyphicon glyphicon-user"></i> </div>
    </li>
    
    
  </React.Fragment>
);

const Nav = ({ user, changeActivePage, onSignout }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className=" navbar-brand brand header-left">On Your Way!</div>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {alwaysOptions(changeActivePage)}

        {user
          ? authenticatedOptions(changeActivePage, onSignout)
          : unauthenticatedOptions(changeActivePage)}
        {/* {user && (
          <li className="nav-item">
            <div className="nav-link"> Hola, {user.email.split("@")[0]}</div>
          </li>
        )} */}
      </ul>
    </div>
  </nav>
);

export default Nav;
