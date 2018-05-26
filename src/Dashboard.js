import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Moment from 'react-moment'

class Dashboard extends Component{
	constructor(){
		super();
		this.state = {date: new Date(), time: new Date()};
	}
	componentDidMount(){
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
	componentWillUnmount(){
		clearInterval(this.timerID);
	}
	tick(){
		this.setState({
			time: new Date()
		});
	}
	render(){
		return(
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a href='/dashboard/home' className="nav-link">
						<i className="fa fa-home"></i> Home
					</a>
					<a href='/dashboard/search' className="nav-link">
						<i className="fa fa-search"></i> Search
					</a>
					<a href='/dashboard/profile' className="nav-link">
						<i className="fa fa-user"></i> Profile
					</a>
					<a href='/dashboard/backup' className="nav-link">
						<i className="fa fa-cloud-upload"></i> Backup
					</a>
					<a href='/dashboard/filter' className="nav-link">
						<i className="fa fa-sliders"></i> Filter
					</a>
					<a href='/dashboard/billing' className="nav-link">
						<i className="fa fa-money"></i> Billing and Reports
					</a>
					<p className="nav-link ml-auto">
					<Moment format="MMM Do YYYY">
						{this.state.date} 
					</Moment>
					<br />
					<Moment format="LTS" interval={1000}>
						{this.state.time} 
					</Moment>
					</p>
				</nav>
			</div>
		);
	}
}

export default Dashboard;