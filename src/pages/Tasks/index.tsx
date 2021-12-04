import { FC, FormEvent, useState } from "react";
import { Form } from "react-bootstrap";
//import { User } from "../../types";
import { addtask } from "./api";
import { Layout } from "../../components";
import { useAuth } from "../../hooks";
import { WithAuth } from "../../hoc";
import { getCategories } from "../Categories/api";
import { Category } from "../../types";
import { useHistory } from "react-router";

const defaultValues = {
  title: "",
  category: "",
  description: "",
  progress: "",
  creationDate: "",
  startDate: "",
  completionDate:"",
}

const AddTask: FC = () => {
    
  const [inputs, setInputs] = useState(defaultValues);
  const [category, setCategory] = useState<Category[]>();
  
  const { push } = useHistory();

  const obtenerCategorías = async () => {
    const response = await getCategories();
    setCategory(response);
  };

  if (!category) {
    obtenerCategorías();
}

    const {userSession} = useAuth()
  
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
          
      addtask({ ...inputs, user: userSession.id });
      push("/dashboard");
      };

      return (
        <Layout mainClass="add-tasks">
          <h4>Agregar nuevas tareas</h4>
          <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Título</label>
              <input
                id="title"
                type="text"
                name="title"
                value={inputs.title}
                onChange={(e) => {
                  setInputs({ ...inputs, title: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="progress">Categoría</label>
              <select 
                id="progress"
                name="progress"
                value={inputs.category}
                onChange={(e) => {
                  setInputs({ ...inputs, category: e.target.value });
                }}
                required
              >
                <option value="" selected>Seleccione Categoría</option>
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
                value={inputs.description}
                onChange={(e) => {
                  setInputs({ ...inputs, description: e.target.value });
                }}
              />
            </div>
    
            <div>
              <label htmlFor="progress">Progreso</label>
              <select 
                id="progress"
                name="progress"
                value={inputs.progress}
                onChange={(e) => {
                  setInputs({ ...inputs, progress: e.target.value });
                }}
                required
              >
                <option value="" selected>Seleccione Estado</option>
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
                value={inputs.creationDate}
                onChange={(e) => {
                  setInputs({ ...inputs, creationDate: e.target.value });
                }}
              />
            </div>

            <div>
              <label htmlFor="startDate">Fecha de Inicio</label>
              <input
                id="startDate"
                type="date"
                name="startDate"
                value={inputs.startDate}
                onChange={(e) => {
                  setInputs({ ...inputs, startDate: e.target.value });
                }}
              />
            </div>

            <div>
              <label htmlFor="completionDate">Fecha de Finalización</label>
              <input
                id="completionDate"
                type="date"
                name="completionDate"
                value={inputs.completionDate}
                onChange={(e) => {
                  setInputs({ ...inputs, completionDate: e.target.value });
                }}
              />
            </div>
            <button type="submit">Agregar Tarea</button>
          </Form>
        </Layout>
      );

    
}

export const AddTaskPage = WithAuth(AddTask)