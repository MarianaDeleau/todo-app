import { FC } from "react";
import { Container, Row } from "react-bootstrap";



const CategoryWrapper: FC = ({ children }) => {
    return (
        <Container className="mt-2 mb-2">
            <Row className="d-flex justify-content-center ">
                <div className="d-flex justify-content-center "><h2 className="mt-3 text-center badge rounded-pill bg-dark p-3 fs-4 text-light">Categorías</h2></div>
                {children}
            </Row>  
        </Container>
    )
}

export { CategoryWrapper }