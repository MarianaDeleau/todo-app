import { useState } from "react";
import { Col } from "react-bootstrap";
import { getTasks } from "../../api";
import { Layout, TaskWrapper } from "../../components";
import { TaskCard } from "../../components/common";
import { WithAuth } from "../../hoc";
import { useAuth } from "../../hooks";
import { Task } from "../../types";


const Tasks = () => {
    const [task, setTask] = useState<Task[]>();
  
    const obtenerTareas = async () => {
      const response = await getTasks();
      setTask(response);
    };
  
    if (!task) {
      obtenerTareas();
  }
  
 // task?.sort((a, b) => { return SortTask(a,b)})
  
  const { userSession } = useAuth()
     
      return (
        <Layout mainClass="tasks">
          <TaskWrapper title='PENDIENTES' color='bg-danger' >
            <Col className="d-flex flex-wrap justify-content-center">
              {task?.map((item) => {
              if (userSession.id === item.user) {
                if (item.progress === 'pendiente') {
                    return (                  
                      <TaskCard id={item.id} title={item.title.toUpperCase()} category={ item.category } description={item.description} progress={item.progress} user={item.user} creationDate={item.creationDate} startDate={item.startDate} completionDate={item.completionDate} color='bg-danger' >
                      </TaskCard>                  
                    )
                  }
                }
                return ''
              })}               
          </Col>
          </TaskWrapper>
          <TaskWrapper title='EN PROCESO' color='bg-secondary'>
            <Col className="d-flex flex-wrap justify-content-center">
              {task?.map((item) => {
                if (userSession.id === item.user) {
                  if (item.progress === 'enproceso') {
                    return (                  
                      <TaskCard id={item.id} title={item.title.toUpperCase()} category={ item.category } description={item.description} progress={item.progress} user={item.user} creationDate={item.creationDate} startDate={item.startDate} completionDate={item.completionDate} color='bg-secondary'>
                      </TaskCard>                  
                    )
                  }
                }
                return ''
              })}               
          </Col>
          </TaskWrapper>
          <TaskWrapper title='FINALIZADAS' color='bg-success' >
            <Col className="d-flex flex-wrap justify-content-center">
              {task?.map((item) => {
                if (userSession.id === item.user) {
                  if (item.progress === 'finalizada') {
                    return (                  
                      <TaskCard color='bg-success' id={item.id} title={item.title.toUpperCase()} category={ item.category } description={item.description} progress={item.progress} user={item.user} creationDate={item.creationDate} startDate={item.startDate} completionDate={item.completionDate} >
                      </TaskCard>                  
                    )
                  }
                }
                return ''
              })}               
          </Col>
          </TaskWrapper>
          <TaskWrapper title='POSTERGADAS' color='bg-dark'>
            <Col className="d-flex flex-wrap justify-content-center">
              {task?.map((item) => {
                if (userSession.id === item.user) {
                  if (item.progress === 'postergada') {
                    return (                  
                      <TaskCard id={item.id} title={item.title.toUpperCase()} category={ item.category } description={item.description} progress={item.progress} user={item.user} creationDate={item.creationDate} startDate={item.startDate} completionDate={item.completionDate} color='bg-dark'>
                      </TaskCard>                  
                    )
                  }
                }
                return ''
              })}               
          </Col>
          </TaskWrapper>
          <TaskWrapper title='CANCELADAS' color='bg-dark'>
            <Col className="d-flex flex-wrap justify-content-center">
              {task?.map((item) => {
                if (userSession.id === item.user) {
                  if (item.progress === 'cancelada') {
                    return (                  
                      <TaskCard id={item.id} title={item.title.toUpperCase()} category={ item.category } description={item.description} progress={item.progress} user={item.user} creationDate={item.creationDate} startDate={item.startDate} completionDate={item.completionDate} color='bg-dark'>
                      </TaskCard>                  
                    )
                  }
                }
                return ''
              })}               
          </Col>
          </TaskWrapper>
        </Layout>
        );
  };
  

export const DashboardPage = WithAuth(Tasks)