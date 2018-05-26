import React, {Component} from 'react'

class PrevConsultation extends Component{
	render(){
		return(
			<div>
				<br />
				<p><strong>Previous Consultation</strong></p>
				<form>
					<input type="checkbox" />
					 Oldest to Newest
				</form>
				<div className="list-group border border-dark">
					<a href="#" className="list-group-item">Date</a>
					<a href="#" className="list-group-item">Date</a>
					<a href="#" className="list-group-item">Date</a>
					<a href="#" className="list-group-item">Date</a>
				</div>
				<br />
				<p><strong>Data/Attachments</strong></p>
				<div className="list-group border border-dark">
					<a href="#" className="list-group-item">Attachment</a>
					<a href="#" className="list-group-item">Attachment</a>
				</div>
				<br />
				<br />
			</div>
		);
	}
}

class PatientChart extends Component{
	render(){
		return(
			<div>
				<br />
				<div className="row">
					<button className="btn btn-outline-success">Print Certificate</button>
					<button className="btn btn-outline-success">Print Prescription</button>
				</div>
				<br />
				<div className="border border-dark">
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
				</div>
			</div>
		);
	}
}

class InfoSideBar extends Component{
	render(){
		return(
			<div>
				<strong>Patient</strong>
				<br />
				<p>Name:</p>
				<p>Address:</p>
				<p>Mode of Payment:</p>
				<p>Remarks:</p>
				<br />
				<br />
				<strong>Patient History</strong>
				<br />
				<div className="border border-dark">
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
				</div>
			</div>
		);
	}
}

class PatientHistory extends Component{
	render(){
		return(
			<div>
				<div className="row">
				<div className="col-2 border border-dark">
					<PrevConsultation />
				</div>
				<div className="col-7 border border-primary">
					<PatientChart />
				</div>
				<div className="col-3 border border-dark">
					<InfoSideBar />
				</div>
				</div>
				
			</div>
		);
	}
}

export default PatientHistory;