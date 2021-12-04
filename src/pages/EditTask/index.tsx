import { FC, FormEvent, useEffect, useState } from "react"
import { Form } from "react-bootstrap"
import { Layout } from "../../components"
import { useAuth } from "../../hooks"
import { getParams } from "../../helpers/params"
import { edittask } from "./api"
import { getSelectedTasks } from '../../api'
import { useHistory } from "react-router"
import { WithAuth } from "../../hoc"
import { Category } from "../../types"
import { getCategories } from "../Categories/api"

const defaultValues = {
  title: '',
  category: '',
  description: '',
  progress: '',
  user: '',
  creationDate: '',
  startDate: '',
  completionDate: '',
}

const EditTask: FC =  () => {

  const { idParams } = getParams();
  
  const { push } = useHistory();

  const [tarea, setTarea] = useState(defaultValues);
  const [category, setCategory] = useState<Category[]>();
   
  const obtenerCategorías = async () => {
    const response = await getCategories();
    setCategory(response);
  };

  if (!category) {
    obtenerCategorías();
  }
  
    useEffect(() => {
      idParams && getSelectedTasks(idParams).then((response) => {
        setTarea(response);     
    });
  }, [idParams]);
  
    const { userSession } = useAuth()
  
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    
      edittask({ ...tarea, user: userSession.id});
      push("/dashboard");
      };

      return (
        <Layout mainClass="edit-task">
          <h4>Editar tarea seleccionada</h4>
          <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Título</label>
              <input
                id="title"
                type="text"
                name="title"
                value={tarea?.title}
                onChange={(e) => {
                  setTarea({...tarea, title: e.target.value})
                }}
              />
            </div>
            <div>
              <label htmlFor="progress">Categoría</label>
              <select 
                id="progress"
                name="progress"
                value={tarea?.category}
                onChange={(e) => {
                  setTarea({ ...tarea, category: e.target.value });
                }}
                required
              >
                {category?.map((item) => {
                  if (userSession.id === item.user) {
                    return (
                      <option value={item.category}>{item.category}</option>)
                  }
                  return ''
                })}
              </select>
            </div>
            <div>
              <label htmlFor="description">Descripción</label>
              <input
                id="description"
                type="text"
                name="description"
                value={tarea?.description}
                onChange={(e) => {
                  setTarea({...tarea, description: e.target.value})
                }}
              />
            </div>
    
            <div>
              <label htmlFor="progress">Progreso</label>
              <select 
                id="progress"
                name="progress"
                value={tarea?.progress}
                onChange={(e) => {
                  setTarea({ ...tarea, progress: e.target.value });
                }}
                required
              >
                <option value="pendiente">Pendiente</option>
                <option value="enproceso">En Proceso</option>
                <option value="finalizada">Finalizada</option>
                <option value="postergada">Postergada</option>
                <option value="cancelada">Cancelada</option>
              </select>
              </div>
            <div>
              <label htmlFor="creationDate">Fecha de Creación</label>
              <input
                id="creationDate"
                type="date"
                name="creationDate"
                value={tarea?.creationDate}
                onChange={(e) => {
                  setTarea({...tarea, creationDate: e.target.value})
                }}
                required
              />
            </div>

            <div>
              <label htmlFor="startDate">Fecha de Inicio</label>
              <input
                id="startDate"
                type="date"
                name="startDate"
                value={tarea?.startDate}
                onChange={(e) => {
                  setTarea({...tarea, startDate: e.target.value})
                }}
              />
            </div>

            <div>
              <label htmlFor="completionDate">Fecha de Finalización</label>
              <input
                id="completionDate"
                type="date"
                name="completionDate"
                value={tarea?.completionDate}
                onChange={(e) => {
                  setTarea({...tarea, completionDate: e.target.value})
                }}
              />
            </div>
            <button type="submit">Editar Tarea</button>
          </Form>
        </Layout>
      );

    
}



export const EditTaskPage = WithAuth(EditTask);