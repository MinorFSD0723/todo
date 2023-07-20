import "./Form.css"

function Form() {
    return(
        <form action="" method="POST">
            <h2>Nueva tarea</h2>
            <label>Escribe la descripción de la tarea</label>
            <textarea></textarea>
            <label>Fecha límite</label>
            <input type="date" />
            <button>INSERTAR</button>
        </form>
    )
}

export default Form