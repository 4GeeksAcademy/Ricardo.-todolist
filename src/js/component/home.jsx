import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("")
	const [lista, setLista] = useState([])
	function agregarTarea(e) {
		e.preventDefault()
		setLista([...lista, tarea])
		setTarea("")
	}
	function eliminar(id) {
		let nuevoArray=[]
		nuevoArray=lista.filter((items,index)=> {
			if(index != id){
				return items
			}
		})
		setLista(nuevoArray)
	}
	return (
		<div className="text-center container">
			<input className="form-control" type="text" value={tarea} onChange={(e) => setTarea(e.target.value)} />
			<button className="btn btn-success" onClick={agregarTarea}> Agregar tarea </button>
			<div>
				<ul className="list-group">
					{lista.map((items,id)=> (
						<li className="list-group-item" key={id}> {items}
	<button className="btn btn-danger float-end" onClick={()=> eliminar(id)} > x </button>

						 </li>
					) )}

					 </ul>		</div>
					 <p> Tarea pendiente:{lista.length}</p>

		</div>
	);
};

export default Home;
