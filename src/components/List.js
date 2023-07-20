import Item from "./Item"

function List() {

    const tasks = [
        {
          description: "Preparar la clase de Nuclio Minors Full Stack Developer",
          dueDate: "07/25/2023",
          done: true
        },
        {
          description: "Devolver libros a la biblioteca y recoger nuevos libros sobre ciencia ficción",
          dueDate: "08/12/2023",
          done: false
        },
        {
          description: "Preparar las maletas y contratar el seguro para el viaje a Marte",
          dueDate: "08/18/2023",
          done: false
        }
        
    ]

    return(
        <>
            <h2>Tareas</h2>
            {tasks.map(function(task){
                return(
                    <Item 
                        description={task.description}
                        dueDate={task.dueDate}
                        done={task.done}
                        >
                    </Item>
                )
            })}
            
        </>
    )
}

export default List