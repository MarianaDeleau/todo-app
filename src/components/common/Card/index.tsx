import { FC } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { Task } from "../../../types";

type Props = {
    id: string;
    title: string;
    category: string;
    description: string;
    progress: string;
    user: string;
    creationDate: string;
    startDate: string;
    completionDate: string;
    color?: string;
}

const TaskCard: FC<Props> = ({ id, title, category, description, progress, creationDate, startDate, completionDate, color }) => {
    const { userSession }= useAuth()

    return (
    <Card style={{ width: '15rem' }} className="cardTask shadow-lg p-3 mb-5 bg-body rounded" data-id={id} data-progress={progress}>
        <Card.Body>
            <Card.Title className="fw-bold h5">📌{title}</Card.Title>
                <Card.Subtitle className="mb-2 fw-light fs-6"><span className="badge rounded-pill bg-secondary text-light">{userSession.name}</span></Card.Subtitle>
                <Card.Subtitle className="mb-1 fw-light fs-6"><span className="badge rounded-pill bg-warning text-dark text-wrap">{category}</span></Card.Subtitle>
                <Card.Text className="fw-normal fs-6 fst-italic">
                    {description}
                </Card.Text>
                <Card.Text className="mb-1 text-muted fs-6 fw-light lh-1">Creado: {creationDate}</Card.Text>
                <Card.Text className="mb-1 text fs-6 fw-light lh-1">Iniciado: {startDate}</Card.Text>
                <Card.Text className="mb-1 text-success fs-6 fw-light lh-1">Finalizado: {completionDate}</Card.Text>
                <Link className="text-decoration-none linkButton border border-dark" to={`./edit-task?id=${id}`}>Editar Tarea</Link><span className={`badge rounded-pill text-light ms-1 ${color}`}>{progress}</span>
        </Card.Body>
    </Card>            
    )
}


export { TaskCard }