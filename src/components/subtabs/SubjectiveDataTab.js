import React, {Component} from 'react'

class SubjectiveDataTab extends Component{
	render(){
		return(
			<div>
				<br />
				<br />
				<strong>Subjective Data</strong>
				<div className="row">
					<div className="col-8">
						<textarea className="form-control" rows="7" />
					</div>
					<div className="col-2">
						<button className="btn btn-primary">Save
						</button>
					</div>
				</div>
				<br />
				<hr />
				<br />
				<div className="row">
					<div className="col">
						<br />
						<strong>Topics</strong>
						<br />
						<div className="list-group border border-dark">
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</div>
					</div>
					<div className="col">
						<br />
						<strong>Laterality</strong>
						<br />
						<div className="list-group border border-dark">
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</div>
					</div>
					<div className="col">
						<br />
						<strong>Details</strong>
						<br />
						<div className="border border-dark">
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</div>
					</div>
				</div>
				<br />
				<br />
				<br />
			</div>
		);
	}
}

export default SubjectiveDataTab;