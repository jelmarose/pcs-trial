import React, {Component} from 'react'
import avatar from '../avatar-male.png'

class ChatWindow extends Component{
	render(){
		return(
			<div>
				<br />
				<div className="card-header">
					<h3>Chat</h3>
				</div>
				<div className="border border-dark">
					<br />
					<br />
					<br />
					<br />
				</div>
				<form>
					<input type="text" className="form-control" placeholder="Your message here..." />
					<button className="btn btn-block btn-primary">Send</button>
				</form>
			</div>
		);
	}
}

class PatientInfo extends Component{
	render(){
		return(
			<div>
				<br />
				<h3>Patient Information</h3>
				<div className="row">
					<div className="col-4">
						<img src={avatar} className="img-fluid" />
					</div>

					<div className="col-8">
						<p>Name:</p>
						<p>Address:</p>
						<p>Mobile Number:</p>
						<p>In case of emergency:</p>
					</div>
				</div>
			</div>
		);
	}
}

class PatientList extends Component{
	render(){
		return(
			<div>
				<br />
				<div className="dropdown">
					<button className="btn btn-block dropdown-toggle" data-toggle="dropdown">
					Date</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<button className="dropdown-item">Date 1</button>
					<button className="dropdown-item">Date 2</button>
					<button className="dropdown-item">Date 3</button>
					</div>
				</div>
				<br />
				<h3>Patient List</h3>
				<div className="list-group">
					<a className="list-group-item list-group-item-action" href="#">Patient 1</a>
					<a className="list-group-item list-group-item-action" href="#">Patient 2</a>
					<a className="list-group-item list-group-item-action" href="#">Patient 3</a>
				</div>
			</div>
		);
	}
}

class PatientHome extends Component{
	render(){
		return(
			<div className="row">
				<div className="col">
				<PatientList />
				</div>
				<div className="col">
				<PatientInfo />
				<ChatWindow />
				</div>
			</div>
		);
	}
}

export default PatientHome;