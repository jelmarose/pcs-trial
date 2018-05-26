import React, {Component} from 'react'

class ViewCaseEntry extends Component{
	render(){
		return(
			<div>
				<br />
				<h3>Patient Name</h3>
				<br />
				<hr />
				<div className="row">
					<div className="col">
						<form>
							<label className="form-inline">Chart Type</label>
							<input type="text" className="form-inline form-control" />
							<br />
							<label className="form-inline">Date</label>
							<input type="date" className="form-inline form-control" />
							<br />
							<label className="form-inline">Case Number</label>
							<input type="text" className="form-inline form-control" />
							<br />
							<label className="form-inline">Mode of Payment</label>
							<input type="text" className="form-inline form-control" />
						</form>
					</div>
					<div className="col">
						<form>
							<label className="form-inline">Chief Complaint</label>
							<textarea className="form-inline" cols="30" rows="5" />
						</form>
					</div>
					
				</div>
				<div className="row">
					<div className="col-3">
						<br />
						<strong>Entry Form</strong>
						<div className="list-group">
							<a href="/" className="list-group-item">Subjective Data</a>
							<a href="/" className="list-group-item">Objective Data</a>
							<a href="/" className="list-group-item">Medications</a>
							<a href="/" className="list-group-item">X-rays</a>
							<a href="/" className="list-group-item">Laboratory</a>
							<a href="/" className="list-group-item">Others</a>
						</div>
					</div>
					<div className="col-8">
						<br />
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
						<br />
						<br />
						</div>
						<button className="btn btn-block btn-primary">Save</button>
					</div>
				</div>
				<br />
				<br />
			</div>
		);
	}
}

export default ViewCaseEntry;