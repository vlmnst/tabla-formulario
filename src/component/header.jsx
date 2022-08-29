import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className='Header'>
        <Link to={"/"}>
            <div className='Header__button'>
              <button type="button" className="btn btn-light">Tabla</button>  
            </div>
            
        </Link>
        <Link to={"/formulario"}>
            <div className='Header__button'>
              <button type="button" className="btn btn-light">Formulario</button>  
            </div>
        </Link>
        </div>
    )
}

export default Header