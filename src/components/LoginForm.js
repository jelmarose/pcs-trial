import React, { Component } from 'react';

class LoginForm extends Component{
	render(){
		if(this.props.form ==='login'){
			return(
				<div>
		        <form>
		          <div className="row">
		          <label className="col-sm-3">Username</label>
		          <input type="text" className="form-control col-sm-8" required />
		          </div>
		          <br />
		          <div className="row">
		          <label className="col-sm-3">Password</label>
		          <input type="password" className="form-control col-sm-8" required />
		          </div>
		          <br />
		        </form>
		        <a href="/dashboard/home" className="btn btn-block btn-primary">Login</a>
		      </div>
			);
		}
		else if(this.props.form ==='register'){
			return(
				<div>
		        <h3>Create an account</h3>
		        <form>
		          <div className="row">
		          <label className="col-sm-3">First Name</label>
		          <input type="text" className="form-control col-sm-8" required />
		          </div>
		          <div className="row">
		          <label className="col-sm-3">Nickname</label>
		          <input type="text" className="form-control col-sm-8" required />
		          </div>
		          <div className="row">
		          <label className="col-sm-3">Last Name</label>
		          <input type="text" className="form-control col-sm-8" required />
		          </div>
		          <div className="row">
		          <label className="col-sm-3">Username</label>
		          <input type="text" className="form-control col-sm-8" required />
		          </div>
		          <div className="row">
		          <label className="col-sm-3">Password</label>
		          <input type="password" className="form-control col-sm-8" required />
		          </div>
		          <div className="row">
		          <label className="col-sm-3">Confirm Password</label>
		          <input type="password" className="form-control col-sm-8" required />
		          </div>
		          <div className="row">
		          <label className="col-sm-3">Email</label>
		          <input type="email" className="form-control col-sm-8" required />
		          </div>
		          <br />
		        </form>
		        <a href="/dashboard/home" className="btn btn-block btn-success">Register</a>
		      </div>
			);
		}
	}
}

export default LoginForm;