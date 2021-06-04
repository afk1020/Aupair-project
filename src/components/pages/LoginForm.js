import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router';
import './LoginForm.css';
function LoginForm({ Login, error }) {
	const [details, setDetails] = useState({name: "", email: "", password: ""});
	const submitHandler = e =>{
		e.preventDefault();
		Login(details);
	}
	// const [name, setName]=useState("");
	// const [email, setEmail]=useState("");
	// const [password, setPassword]=useState("");

	// const history = useHistory();
	// useEffect(() => {
	// 	if (localStorage.getItem('user-info')){
	// 		history.push("/add")
	// 	}
	// }, [])

	// async function login(){
	// 	console.warn(name, email, password)
	// 	let item= {name, email, password}
	// 	let result = await fetch("http://localhost:3000/login",{
	// 		method : "POST",
	// 		body: JSON.stringify(item),
	// 		headers:{
	// 			"Content-Type": 'application/json',
	// 			"Accept-Type": 'application/json'
	// 		}
	// 	});
	// 	result = await result.json();
	// 	localStorage.setItem("user-info", JSON.stringify(result))
	// 	history.push("/Au-pair")

	// }
	return (
			<form onSubmit={submitHandler}>
				<div className="form-inner">
					<h2>Login</h2>
					{(error != "") ? (<div className="error">{error}</div>) : ""}
					<div className="form-group">
						<label htmlFor="name">Name:</label>
						<input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email: </label>
						<input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password:</label>
						<input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
					</div>
					<input type="submit" value="LOGIN" />
				</div>
			</form>
	)
}
export default LoginForm
