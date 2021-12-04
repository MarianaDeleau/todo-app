import { useEffect, useState } from "react";
import { getUsers } from "../../api";
import { User } from "../../types";
import { Layout } from "../../components";
import { Card } from "react-bootstrap";
import { useAuth } from "../../hooks";


const Users = () => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    getUsers().then((response) => {
      setUsers(response);
    });
  }, []);

  const { userSession } = useAuth()

  return (
    <Layout mainClass="users">
       {users?.map((item) => {
               if (userSession.id === item.id) {
                 return(
                <Card style={{ width: '18rem' }} className="cardTask shadow-lg p-3 mb-5 bg-body rounded" data-id={item.id}>
                    <Card.Body>
                        <Card.Title className="fw-bold h4">{item.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted fs-6 fw-normal">Mail:{item.email}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted fs-6 fw-light">Género: {item.gender}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted fs-6 fw-light">Password: {item.password}</Card.Subtitle>                    
                    </Card.Body>
                </Card>
              )}
              else {
                return(
               <Card style={{ width: '18rem' }} className="cardTask shadow-lg p-3 mb-5 bg-body rounded" data-id={item.id}>
                   <Card.Body>
                       <Card.Title className="fw-bold h4">{item.name}</Card.Title>
                       <Card.Subtitle className="mb-2 text-muted fs-6 fw-normal">Mail:{"****"}</Card.Subtitle>
                       <Card.Subtitle className="mb-2 text-muted fs-6 fw-light">Género: {"****"}</Card.Subtitle>
                       <Card.Subtitle className="mb-2 text-muted fs-6 fw-light">Password: {"****"}</Card.Subtitle>                    
                   </Card.Body>
               </Card>
             )}
        })}
      </Layout>  );
};

export { Users };


