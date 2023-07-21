import React from "react";
import bisheshwor from "../Asset/bisheshwor.jpg"
import rohan from "../Asset/rohan.jpg";
import bina from "../Asset/bina.jpg";
import krishna from "../Asset/krishna.JPG";

const Team = ()=>{
    return (
        <div className="home-container">
       
        <h1 class="header">Our <span>Team</span></h1>
		<div class="row">
			<div class="col s12 m6 l4">
				<div class="single-service center-align">
					<div class="img-area">
            <img alt="" src={bisheshwor} /></div>
					<h2>Bisheshwor Khadka</h2>
					<h4 className="post">Owner</h4>
					
				</div>
			</div>
			<div class="col s12 m6 l4">
				<div class="single-service center-align">
					<div class="img-area">
            <img alt="" src={rohan}/></div>
					<h2>Rohan Shrestha</h2>
					<h4 className="post">Manger</h4>
				</div>
			</div>
			<div class="col s12 m6 l4">
				<div class="single-service center-align">
					<div class="img-area"><img alt="" src={bina} /></div>
					<h2>Bina Lawati</h2>
					<h4 className="post">Head Chief</h4>
					
				</div>
			</div>
            <div class="col s12 m6 l4">
				<div class="single-service center-align">
					<div class="img-area"><img alt="" src={krishna} /></div>
					<h2>Krishna Rijal </h2>
					<h4 className="post">Junior Chief</h4>
					
				</div>
			</div>
		</div>
	</div>
        
        
    );
};


export default Team;