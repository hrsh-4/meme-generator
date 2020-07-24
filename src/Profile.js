import React from 'react'


const url ="https://res.cloudinary.com/dbfn5lnvx/image/upload/v1576923026/react-tutorial/misc/user.png";
// const root = document.body.querySelector("#root");
// con 

// use nested html tags by returning (tags)
// let image = (path) => {
// 	return (
// 		<ul>
// 			<li>Name  : John Doe </li>
// 			<li>Profile pic <br/  ><img src={path}  /></li>

// 			</ul>
// 	)
// }




export default function Profile(props) {

	return (
			<div align="center" >
				<h1>John Doe</h1>
			<img src={props.path} />
			<p> I am a web-developer</p>
			<img src={props.insta} />
			</div>
	)
	
}