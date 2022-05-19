import React, {useState, useEffect} from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const ActualizarPirata = () => {
    const {id} = useParams();
    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState("");
    const [tesoros, setTesoro] = useState("");
    const [phrase, setPhrase] = useState("");
    const [position, setPosition] = useState("");
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);

    const [errors, setErrors] = useState({});

    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/piratas/"+id, {withCredentials:true})
            .then(res => {
                setNombre(res.data.nombre);
                setImagen(res.data.imagen);
                setTesoro(res.data.tesoros);
                setPhrase(res.data.phrase);
                setPosition(res.data.position);
                setPegLeg(res.data.pegLeg);
                setEyePatch(res.data.eyePatch);
                setHookHand(res.data.hookHand);
            })
            .catch(err => {
                if(err.response.status === 401) {
                    history.push("/login")
                } else {
                    history.push("/error")
                }
                
            });
    }, [id, history])

    const actualizarPirata = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/piratas/"+id, {
            nombre,
            imagen,
            tesoros,
            phrase,
            position,
            pegLeg,
            eyePatch,
            hookHand
        }, {withCredentials: true})
            .then(res => history.push("/"))
            .catch(err => setErrors(err.response.data.errors))
    }

    return (
        <div>
            <h1>Editar Pirata</h1>
            <form onSubmit={actualizarPirata}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className="form-control" />
                    {errors.nombre ? <span className="text-danger">{errors.nombre.message}</span> : null}
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="imagen">URL Imagen:</label>
                            <input type="text" id="imagen" name="imagen" value={imagen} onChange={(e) => setImagen(e.target.value)} className="form-control" />
                        </div>
                        <div className="col-6">
                            <img src={imagen} className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="tesoros">Tesoros:</label>
                    <input type="number" id="tesoros" name="tesoros" value={tesoros} onChange={(e) => setTesoro(e.target.value)} className="form-control" />
                    {errors.tesoros ? <span className="text-danger">{errors.tesoros.message}</span> : null}
                </div>

                <div className="form-group">
                    <label htmlFor="phrase">Tipica Frase:</label>
                    <input type="text" id="phrase" name="phrase" value={phrase} onChange={(e) => setPhrase(e.target.value)} className="form-control" />
                    {errors.phrase ? <span className="text-danger">{errors.phrase.message}</span> : null}
                </div>

                <div className="form-group">
                    <label htmlFor="position">Posiciones:</label>
                    <select id="position" name="position" onChange={(e) => setPosition(e.target.value)} className="form-control">
                        <option value="-" >Elige una Posicion</option>
                        <option value="Captain" >Captain</option>
                        <option value="First Mate" >First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain" >Boatswain</option>
                        <option value="Powder Monkey" >Powder Monkey</option>
                    </select>
                    {errors.position ? <span className="text-danger">{errors.position.message}</span> : null}
                </div>

                

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="pegLeg" name="pegLeg" checked={pegLeg} onChange={(e) => setPegLeg(e.target.checked)} />
                    <label className="form-check-label" htmlFor="pegLeg">Peg Leg</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="eyePatch" name="eyePatch" checked={eyePatch} onChange={(e) => setEyePatch(e.target.checked)} />
                    <label className="form-check-label" htmlFor="eyePatch">Eye Patch</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="hookHand" name="hookHand" checked={hookHand} onChange={(e) => setHookHand(e.target.checked)} />
                    <label className="form-check-label" htmlFor="hookHand">Hook Hand</label>
                </div>
                <input type="submit" value="Actualizar Pirata" className="btn btn-success" />
            </form>
        </div>
    )
}

export default ActualizarPirata;