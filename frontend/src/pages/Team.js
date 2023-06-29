import React from "react";
import Owner from "../Asset/Owner.jpg"
import Manager from "../Asset/Manager.jpg";
import HeadChef from "../Asset/HeadChef.jpg";
import JChef from "../Asset/JChef.jpeg";

const Team = ()=>{
    return (
        <div className="home-container">
       
        <h1 class="header">Our <span>Team</span></h1>
		<p class="sub-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magnam recusandae nulla quasi fugit ea.</p>
		<div class="row">
			<div class="col s12 m6 l4">
				<div class="single-service center-align">
					<div class="img-area">
            <img alt="" src={Owner} /></div>
					<h2>Jone</h2>
					<h4 className="post">Owner</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nam, esse dignissimos. Illo, cum, reiciendis?</p>
					
				</div>
			</div>
			<div class="col s12 m6 l4">
				<div class="single-service center-align">
					<div class="img-area">
            <img alt="" src={Manager}/></div>
					<h2>Dick Williams</h2>
					<h4 className="post">Manger</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nam, esse dignissimos. Illo, cum, reiciendis?</p>
				</div>
			</div>
			<div class="col s12 m6 l4">
				<div class="single-service center-align">
					<div class="img-area"><img alt="" src={HeadChef} /></div>
					<h2>Gordon J. Ramsay</h2>
					<h4 className="post">Head Chief</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nam, esse dignissimos. Illo, cum, reiciendis?</p>
					
				</div>
			</div>
            <div class="col s12 m6 l4">
				<div class="single-service center-align">
					<div class="img-area"><img alt="" src={JChef} /></div>
					<h2>Bobby Flay</h2>
					<h4 className="post">Junior Chief</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nam, esse dignissimos. Illo, cum, reiciendis?</p>
					
				</div>
			</div>
		</div>
	</div>
        
        
    );
};


export default Team;