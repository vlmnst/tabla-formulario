import { useState } from 'react';
import styles from './Table.module.css';
const Form = ({setInfo , info}) => {
    const [newInfo, setNewInfo] = useState({
        nombre: '',
        edad: '',
        carrera: '',
        hobbie: ''
    }) 

    let validate = (input) => {
        let errors = {};
        //---Name
        if (!newInfo.nombre) errors.name = "Completa con tu nombre porfavor";
        if (!newInfo.edad) errors.edad = "Completa con tu edad porfavor";
        if (!newInfo.carrera) errors.carrera = "Completa con tu carrera porfavor";
        if (!newInfo.hobbie) errors.hobbie = "Completa con tu hobbie porfavor";
        return errors;
      };

    const handleChange = (e) => {
        setNewInfo({
            ...newInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let error = validate(newInfo)
        if(Object.keys(error).length === 0){
           setInfo([
            ...info,
             newInfo
        ])
        alert('Genial, ¡has agregado un nuevo item! Vuelve a la tabla')
        setNewInfo({
            nombre: '',
            edad: '',
            carrera: '',
            hobbie: ''
        }) 
        }
        else{
            error.name && alert(error.name)
            error.edad && alert(error.edad)
            error.carrera && alert(error.carrera)
            error.hobbie && alert(error.hobbie)
        }
    }
  return (
    
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Nombre
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Solo indica tu nombre de pila"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name='nombre'
            value={newInfo.nombre}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Edad
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="¿Que edad tienes?"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name='edad'
            value={newInfo.edad}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Carrera
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Cuéntanos de que trabajas"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name='carrera'
            value={newInfo.carrera}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Hobbie
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="¿Que actividad haces por gusto?"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name='hobbie'
            value={newInfo.hobbie}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-dark">Enviar</button>
      </form>
 
  );
};

export default Form;
