import { FC } from "react";
import { Container, Row } from "react-bootstrap";


type Props = {
    title?: string;
    color?: string;
}
const TaskWrapper: FC<Props> = ({ title, color, children }) => {
    return (
        <Container className="mt-2 mb-2">
            <Row className="d-flex justify-content-center border">
                <div className="d-flex justify-content-center "><h2 className={`mt-3 text-center badge rounded-pill p-3 fs-4 text-light ${color}`}>{title}</h2></div>
                {children}
            </Row>  
        </Container>
    )
}

export { TaskWrapper }