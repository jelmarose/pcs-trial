import React, {Component} from 'react'
import lung from '../lungs.png'

class OthersRemittanceTab extends Component{
	render(){
		return(
			<div>
				<h1>Remittance</h1>
			</div>
		);
	}
}

class OthersAcceptanceTab extends Component{
	render(){
		return(
			<div>
				<h1>Acceptance</h1>
			</div>
		);
	}
}

class OthersCollectionsTab extends Component{
	render(){
		return(
			<div>
				<h1>Collection</h1>
			</div>
		);
	}
}

class OthersBillingTab extends Component{
	render(){
		return(
			<div>
				<h1>Billing</h1>
				<div className="row">
					<div className="col-2">
						<strong>Others</strong>
					</div>
					<div className="col-6 border border-dark">
						<form>
						<label>
						<input type="checkbox" />
							<strong>
								 Medical Certificate (Sick Leave)
							</strong>
						</label>
						<br />
						<label>
						<input type="checkbox" />
							<strong>
								 Pulmonary Certificate
							</strong>
						</label>
						<br />
						<label>
						<input type="checkbox" />
							<strong>
								 Medical Certificate (Fit to Work)
							</strong>
						</label>
						</form>
					</div>
					<div className="col-4">
						<form>
							<label>Referred by</label>
							<input type="text" className="form-control" />
							<label>Medical Certificate (Price)</label>
							<input type="number" className="form-control" />
							<label>Consultation Price</label>
							<input type="number" className="form-control" />
							<label>Overall Amount</label>
							<input type="number" className="form-control" placeholder="0.00" />
						</form>
					</div>
				</div>
				<br />
				<form>
					<label className="form-inline">
						<strong>(HMO Users) Type of HMO  </strong>
						<input type="text" className="form-control" />
					</label>
				</form>
				<br />
				<strong>Remarks</strong>
				<br />
				<textarea rows="7" className="form-control" />
				<br />
				<button className="btn btn-primary float-right">Save</button>
			</div>
		);
	}
}

class OthersSketchTab extends Component{
	render(){
		return(
			<div>
				<div className="row">
					<div className="col-2">
						<strong>Sketch Lungs</strong>
					</div>
					<div className="col-6">
						<img src={lung} className="img-fluid" alt="lungs" />
					</div>
					<div className="col-4 border border-dark">
						<button className="btn btn-block btn-primary">Select Color</button>
						<br />

					</div>

				</div>
				<br />
				<strong>Remarks:</strong>
				<textarea className="form-control" rows="7" />
				<button className="btn btn-primary float-right">Save</button>
				<br />
				<br />
			</div>
		);
	}
}

class OthersTabMenu extends Component{
	render(){
		if(this.props.active === 'sketch'){
			return(<OthersSketchTab />);
		}
		else if(this.props.active === 'billing'){
			return(<OthersBillingTab />);
		}
		else if(this.props.active === 'collection'){
			return(<OthersCollectionsTab />);
		}
		else if(this.props.active === 'acceptance'){
			return(<OthersAcceptanceTab />);
		}
		else if(this.props.active === 'remittance'){
			return(<OthersRemittanceTab />);
		}
	}
}

class OthersTab extends Component{
	constructor(){
		super();
		this.state={active: 'sketch'};
		this.changeToSketchTab = this.changeToSketchTab.bind(this);
		this.changeToBillingTab = this.changeToBillingTab.bind(this);
		this.changeToCollectionTab = this.changeToCollectionTab.bind(this);
		this.changeToAcceptanceTab = this.changeToAcceptanceTab.bind(this);
		this.changeToRemittanceTab = this.changeToRemittanceTab.bind(this);
	}
	changeToSketchTab(event){
		event.preventDefault();
		this.setState({active: 'sketch'});
	}
	changeToBillingTab(event){
		event.preventDefault();
		this.setState({active: 'billing'});
	}
	changeToCollectionTab(event){
		event.preventDefault();
		this.setState({active: 'collection'});
	}
	changeToAcceptanceTab(event){
		event.preventDefault();
		this.setState({active: 'acceptance'});
	}
	changeToRemittanceTab(event){
		event.preventDefault();
		this.setState({active: 'remittance'});
	}
	render(){
		return(
			<div>
				<ul className="nav nav-tabs">
					<li className="nav-item">
						<button class="nav-link" onClick={this.changeToSketchTab}>Others</button>
					</li>
					<li className="nav-item">
						<button class="nav-link" onClick={this.changeToBillingTab}>Billing</button>
					</li>
					<li className="nav-item">
						<button class="nav-link" onClick={this.changeToCollectionTab}>Collection</button>
					</li>
					<li className="nav-item">
						<button class="nav-link" onClick={this.changeToAcceptanceTab}>Acceptance</button>
					</li>
					<li className="nav-item">
						<button class="nav-link" onClick={this.changeToRemittanceTab}>Remittance</button>
					</li>
				</ul>
				<OthersTabMenu active={this.state.active} />
			</div>
		);
	}
}

export default OthersTab;