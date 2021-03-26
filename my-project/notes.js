Demo Application - Using funcitonal component
 - React Installatin
 - Exection
 - React Component
 - JSX
 - class Component
 - Function Component
 - Props
 - States
 - conditional Rendering
 - List Rendering
 - HTTP - React HTTP / Axios
 - Event Handling and Event Binding
 - Function Life cycle methods
 - useHooks 
 - Routing & Form Handling 
 
Desciption:

API URL : https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist
 
How to consume Backend API/REST API?
	- Axios or fetch (javascript)
How to use Axios?


> npm i axios 
	import Axios from 'axios'
	
	Axios.get(url)
	     .then((response)=>{
			clg(response.data)
			//update your component state
		 })
		 .catch((err)=>{
		 //console.log(err)
		 })
    --------------------
	let url = ''
	Axios.get(url)
	     .then(()=>{})
		 .catch(()=>{})
		 
		 

How to use Bootstrap?
Option 1: public/ index.html - add bootstrap cdn
option 2: install bootstrap and import in index.js 
         > npm i bootstrap --save 
           import '../node_modules/dist/css/bootsrap.css 

option 3: app.js
          import './assets/css/bootstrap.css 
==================================================

let ContactApp = ()=>{
let [contact, setContact]=useState({ contacts:[], errMessage:null})

useEffect(()=>{
	Axios.get(url)
		 .then((response)=>{
			setContact({...contact,contacts:response.data})
		 })
		 .catch((err)=>{...contact, errMessage:err})
})
return  <React.Fragment>
		<div className="container mt-5">
		<div className="row">
			<div className="col-md-8">
				<ContactList contacts={contact.contacts}/>
			</div>
			<div className="col-md-4">
				<Contactcard />
			</div>
		</div>
		</div>
		
		</React.Fragment>

}

export default ContactApp;		  


let ContactList = (props)=>{
	
	return <React.Fragment>
		<div class="container">
		<div class="row">
			<div className="col">
				<table>
					<thead></thead>
					<tbody></tbody>
				</table>
			</div>
		</div>
		</div>
		
	</React.Fragment>
}

export default ContactList
		  
		  