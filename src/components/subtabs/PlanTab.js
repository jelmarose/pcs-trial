import React, {Component} from 'react'

class PlanSubTab extends Component{
	render(){
		if(this.props.subtab === 'prescription'){
			return(
				<div>
					<strong className="form-inline">Group</strong>
					<div className="dropdown form-inline form-control">
						<button className="btn btn-block dropdown-toggle" data-toggle="dropdown">
						Group</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<button className="dropdown-item">Group 1</button>
						<button className="dropdown-item">Group 2</button>
						<button className="dropdown-item">Group 3</button>
						</div>
					</div>
					<br />
					<div className="row">
						<div className="col-2">
							<strong>Medicine</strong>
							<div className="border border-dark">
								<br /><br /><br /><br /><br /><br /><br />
							</div>
						</div>
						<div className="col">
							<strong>Prep</strong>
							<div className="border border-dark">
								<br /><br /><br /><br /><br /><br /><br />
							</div>
						</div>
						<div className="col">
							<strong>Dose</strong>
							<div className="border border-dark">
								<br /><br /><br /><br /><br /><br /><br />
							</div>
						</div>
						<div className="col-2">
							<strong>Unit</strong>
							<div className="border border-dark">
								<br /><br /><br /><br /><br /><br /><br />
							</div>
						</div>
						<div className="col">
							<strong>Freq.</strong>
							<div className="border border-dark">
								<br /><br /><br /><br /><br /><br /><br />
							</div>
						</div>
						<div className="col">
							<strong>Others</strong>
							<div className="border border-dark">
								<br /><br /><br /><br /><br /><br /><br />
							</div>
						</div>
						<div className="col">
							<strong>#Unit</strong>
							<div className="border border-dark">
								<br /><br /><br /><br /><br /><br /><br />
							</div>
						</div>
						<div className="col">
							<strong>#</strong>
							<div className="border border-dark">
								<br /><br /><br /><br /><br /><br /><br />
							</div>
						</div>			
					</div>
					<br /><br />
				</div>
			);
		}
		else if(this.props.subtab === 'certification'){
			return(
				<div className="row">
					<br />
					<div className="col">
						<strong>Topics</strong>
						<div className="border border-dark">
							<br /><br /><br /><br /><br /><br /><br />
						</div>
					</div>
					<div className="col">
						<strong>Details</strong>
						<div className="border border-dark">
							<br /><br /><br /><br /><br /><br /><br />
						</div>
					</div>
				</div>
			);
		}
		else if(this.props.subtab === 'others'){
			return(
				<div className="row">
					<br />
					<div className="col">
						<strong>Topics</strong>
						<div className="border border-dark">
							<br /><br /><br /><br /><br /><br /><br />
						</div>
					</div>
					<div className="col">
						<strong>Details</strong>
						<div className="border border-dark">
							<br /><br /><br /><br /><br /><br /><br />
						</div>
					</div>
				</div>
			);
		}
	}
}

class PlanTab extends Component{
	constructor(){
		super();
		this.state ={subtab: 'prescription'};
		this.changeSubTabPrescription = this.changeSubTabPrescription.bind(this);
		this.changeSubTabCertification = this.changeSubTabCertification.bind(this); 
		this.changeSubTabOthers = this.changeSubTabOthers.bind(this);
	}
	changeSubTabPrescription(event){
		event.preventDefault();
		this.setState({subtab: 'prescription'});
	}
	changeSubTabCertification(event){
		event.preventDefault();
		this.setState({subtab: 'certification'});
	}
	changeSubTabOthers(event){
		event.preventDefault();
		this.setState({subtab: 'others'});
	}
	render(){
		return(
			<div>
				<br />

				<div className="row">
					<div className="col-8">
						<strong>Plan</strong>
						<textarea className="form-control" rows="7" />
					</div>

					<div className="col-2">
						<br />
						<br />
						<button className="btn btn-primary" onClick={this.changeSubTabPrescription}>Prescription</button>
						<br />
						<button className="btn btn-primary" onClick={this.changeSubTabCertification}>Certification</button>
						<br />
						<button className="btn btn-primary" onClick={this.changeSubTabOthers}>Others</button>
					</div>
					<div className="col-2">
						<br /><br />
						<button className="btn btn-primary btn-lg">Save</button>
					</div>
				</div>
				<br />
				
				<div>
					<PlanSubTab subtab={this.state.subtab} />
				</div>

				<br />
				<br />
			</div>
		);
	}
}

export default PlanTab;