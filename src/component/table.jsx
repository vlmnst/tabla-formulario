
import styles from './Table.module.css'

export default function Table ({info}) {

let num = 0
    return(
        <div className={styles.cont}>
            <table className="table table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Edad</th>
                <th scope="col">Carrera</th>
                <th scope="col">Hobbie</th>
                </tr>
            </thead>
            {
                
                info?.map((info) => {
                    return(
                        <tbody key={num}>
                            <tr>
                            <th scope="row">{++num}</th>
                            <td>{info.nombre}</td>
                            <td>{info.edad}</td>
                            <td>{info.carrera}</td>
                            <td>{info.hobbie}</td>
                            </tr>
                        </tbody>
                    )
                  })
            }
            </table>
        </div>
    )
}