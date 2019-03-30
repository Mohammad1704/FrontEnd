import React from "react";


const Profile = () => 
<React.Fragment>

<div>Profile
    <head>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<aside class="profile-card">
<div class="container">
  <div class="row">
    <div class="col-md-6 img">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzOpl3-kqfNbPcA_u_qEZcSuvu5Je4Ce_FkTMMjxhB-J1wWin-Q"  alt="" class="img-rounded"/>
    </div>
    <div class="col-md-6 details">
      <blockquote>
        <h5>Fiona Gallagher</h5>
      </blockquote>
      <p>
        fionagallager@shameless.com <br/>
        www.bootsnipp.com <br/>
        June 18, 1990
      </p>
    </div>
    <button type="button" class="btn btn-outline-dark btn-sm">Edit</button>
  </div>
</div>
</aside>
</div>
</React.Fragment>


export default Profile;
