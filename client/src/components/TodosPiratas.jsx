import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import ButtonLogout from "./ButtonLogout";

const TodosPiratas = () => {

    const [piratas, setPiratas] = useState([]);

    const history = useHistory();

    useEffect(() =>{
        axios.get("http://localhost:8000/api/piratas", {withCredentials: true})
            .then(res => setPiratas(res.data))
            .catch(err => {
                console.log(err);
                if(err.response.status === 401){
                    history.push("/login");
                }
            });
    }, [history])

    const borrarPirata = idPirata => {
        // bootbox.dialog({
        //     message:"¿Desea eliminar el autor?",
        //     buttons: {
        //         aceptar:{
        //             label: "Aceptar",
		// 			className: "btn-primary",
		// 			callback: function() {
        //                 //DELETE
        //             }
        //         },
        //         cancelar: {
        //             label: "Cancelar",
		// 			className: "btn-danger",
		// 			callback: function() {
		// 				$('.modal-dialog').modal('hide');
		// 			}
        //         }
        //     }
        // });
        axios.delete("http://localhost:8000/api/piratas/"+idPirata, {withCredentials: true})
            .then(res => {
                let nuevaLista = piratas.filter(pirata => pirata._id !== idPirata);
                setPiratas(nuevaLista);
            })
    }

    return (
        <div>
            <h1>Piratas</h1>
            <Link to="/nuevo" className="btn btn-success">Agregar Pirata</Link>
            <ButtonLogout />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Tesoros</th>
                        <th>Frase</th>
                        <th>Posicion</th>
                        <th>Peg Leg</th>
                        <th>Eye Patch</th>
                        <th>Hook Hand</th>
                        <th>Fecha de Creación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        piratas.map((pirata, index) => (
                            <tr key={index}>
                                <td>{pirata.nombre}</td>
                                <td><img className="img-fluid" src={pirata.imagen} alt=""/></td>
                                <td>{pirata.tesoros}</td>
                                <td>{pirata.phrase}</td>
                                <td>{pirata.position}</td>
                                <td>
                                    { pirata.pegLeg ? <span className="glyphicon glyphicon-ok text-success"></span> : <span className="glyphicon glyphicon-remove text-danger"></span>}
                                </td>
                                <td>
                                    { pirata.eyePatch ? <span className="glyphicon glyphicon-ok text-success"></span> : <span className="glyphicon glyphicon-remove text-danger"></span>}
                                </td>
                                <td>
                                    { pirata.hookHand ? <span className="glyphicon glyphicon-ok text-success"></span> : <span className="glyphicon glyphicon-remove text-danger"></span>}
                                </td>
                                <td>{pirata.createdAt}</td>
                                <td>
                                    <Link to={`/pirata/editar/${pirata._id}`} className="btn btn-warning">Actualizar Pirata</Link>
                                    <button className="btn btn-danger" onClick={() => borrarPirata(pirata._id)}>Walk the Plank</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}

export default TodosPiratas;