import React, { useState } from 'react'
import './Signup.css'
import {useHistory} from 'react-router-dom'

function Signup({ Login, error }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("")
	const history=useHistory();

	const submitHandler = e =>{
		e.preventDefault();


		// Login(name, email, password);
	}

	async function signup()
	{
	// 	let item={name, password, email}
	// 	console.log(item)

	//    let result = await fetch("http://localhost:3000/signup", {
	// 	method : "POST",
	// 	body: JSON.stringify(item),
	// 	headers:{
	// 		"Content-Type": 'application/json',
	// 		"Accept-Type": 'application/json'
	// 	}
	// })
	// result =await result.json()
	// localStorage.setItem("user-info", JSON.stringify(result))
	history.push("/about")
	}

	return (
		<div className="App">
		<form onSubmit={submitHandler}>
			<div className="form-inner">
				<h2 style={{textAlign: "center"}}>Register</h2>
				{(error != "") ? (<div className="error">{error}</div>) : ""}
				<div className="form-group">
					<label htmlFor="name">Full Name:</label>
					<input type="text" name="name" id="name" onChange={(e) => setName( e.target.value )} value={name}/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email: </label>
					<input type="email" name="email" onChange={(e) => setEmail( e.target.value)} value={email}/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
				</div>
				<input onClick={signup} style={{width: "100%"}} type="submit" value="Register" />
			</div>
		</form>
		</div>
	)
}

export default Signup
