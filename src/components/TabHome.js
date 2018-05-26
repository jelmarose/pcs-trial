import React, {Component} from 'react'
import avatar from './avatar-male.png'
import lung from './lungs.png'
import PatientHome from './subtabs/PatientHome.js'
import PatientHistory from './subtabs/PatientHistory.js'
import ViewCaseEntry from './subtabs/ViewCaseEntry.js'
import SubjectiveDataTab from './subtabs/SubjectiveDataTab.js'
import ObjectiveDataTab from './subtabs/ObjectiveDataTab.js'
import AssessmentTab from './subtabs/AssessmentTab.js'
import PlanTab from './subtabs/PlanTab.js'
import OthersTab from './subtabs/OthersTab.js'

class Content extends Component{
	render(){
		if(this.props.tab === 'patientProfile'){
			return(
				<PatientHome />
		);}
		else if(this.props.tab === 'patientHistory'){
			return(
				<PatientHistory />
			);
		}
		else if(this.props.tab === 'caseEntry'){
			return(
				<div>
					<ViewCaseEntry />
				</div>
			);
		}
		else if(this.props.tab === 'subjectiveData'){
			return(
				<div>
					<SubjectiveDataTab />
				</div>
			);
		}
		else if(this.props.tab === 'objectiveData'){
			return(
				<div>
					<ObjectiveDataTab />
				</div>	
			);
		}
		else if(this.props.tab === 'assessment'){
			return(
				<div>
					<AssessmentTab />
				</div>
			);
		}
		else if(this.props.tab === 'plan'){
			return(
				<div>
					<PlanTab />
				</div>
			);
		}
		else if(this.props.tab === 'others'){
			return(
				<div>
					<OthersTab />
				</div>
			);
		}
		
			
	}
}

class TabHome extends Component{
	constructor(){
		super();
		this.state = {tab: 'patientProfile'};

		this.changeToProfile = this.changeToProfile.bind(this);
		this.changeToHistory = this.changeToHistory.bind(this);
		this.changeToCaseEntry = this.changeToCaseEntry.bind(this);
		this.changeToSubjectiveData = this.changeToSubjectiveData.bind(this);
		this.changeToObjectiveData = this.changeToObjectiveData.bind(this);
		this.changeToAssessment = this.changeToAssessment.bind(this);
		this.changeToPlan = this.changeToPlan.bind(this);
		this.changeToOthers = this.changeToOthers.bind(this);
	}
	changeToProfile(event){
		event.preventDefault();
		this.setState({tab: 'patientProfile'});
	}
	changeToHistory(event){
		event.preventDefault();
		this.setState({tab: 'patientHistory'});
	}
	changeToCaseEntry(event){
		event.preventDefault();
		this.setState({tab: 'caseEntry'});
	}
	changeToSubjectiveData(event){
		event.preventDefault();
		this.setState({tab: 'subjectiveData'});
	}
	changeToObjectiveData(event){
		event.preventDefault();
		this.setState({tab: 'objectiveData'});
	}
	changeToAssessment(event){
		event.preventDefault();
		this.setState({tab: 'assessment'});
	}
	changeToPlan(event){
		event.preventDefault();
		this.setState({tab: 'plan'});
	}
	changeToOthers(event){
		event.preventDefault();
		this.setState({tab: 'others'});
	}
	render(){
		return(
			<div className="container-fluid">
				<div className="row">
					<button className="col btn btn-outline-dark" onClick={this.changeToProfile}>Patient Profile</button>
					<button className="col btn btn-outline-dark" onClick={this.changeToHistory}>Patient History</button>
					<button className="col btn btn-outline-dark" onClick={this.changeToCaseEntry}>Case Entry</button>
					<button className="col btn btn-outline-dark" onClick={this.changeToSubjectiveData}>Subjective Data</button>
					<button className="col btn  btn-outline-dark" onClick={this.changeToObjectiveData}>Objective Data</button>
					<button className="col btn btn-outline-dark" onClick={this.changeToAssessment}>Assessment</button>
					<button className="col btn  btn-outline-dark" onClick={this.changeToPlan}>Plan</button>
					<button className="col btn btn-outline-dark" onClick={this.changeToOthers}>Others</button>
				</div>
				<Content tab={this.state.tab} />
			</div>
		);
	}
}

export default TabHome;