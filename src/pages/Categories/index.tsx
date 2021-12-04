import { FC, FormEvent, useEffect, useState } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Layout } from '../../components';
import { CategoryWrapper } from '../../components/parts';
import { WithAuth } from '../../hoc';
import { useAuth } from '../../hooks';
import { Category } from '../../types';
import { createCategory, getCategories } from './api'


const defaultValues = {
    category: "",
    user: "",
}
  
const Categories: FC = () => {
    
    const [category, setCategory] = useState(defaultValues);
  const [categoryCard, setCategoryCard] = useState<Category[]>()
  
    const { userSession } = useAuth()
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        createCategory({ ...category, user: userSession.id })
      };

      useEffect(() => {
        getCategories().then((response) => {
          setCategoryCard(response);
        });
      },);
    

    return (
        
      <Layout mainClass="categories">
        <Container className="formCategories">
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h4>Por favor ingrese su nueva categoría:</h4>
              <Form action="" onSubmit={handleSubmit} className="ms-4">
                <div>
                  <label htmlFor="email">Categoría</label>
                  <input
                    id="category"
                    type="text"
                    name="category"
                    value={category.category}
                              onChange={(e) => setCategory({ ...category, category: e.target.value })}
                  />
                </div>          
                <button type="submit">Crear categoría</button>
              </Form>  
            </Col>
            <Col md="auto">  
          <CategoryWrapper>
              {categoryCard?.map((item) => {
                if (userSession.id === item.user) {
                  return (
                    <Card style={{ width: '15rem' }} className="cardTask shadow-lg p-3 mb-1 bg-body rounded" data-id={item.id}>
                      <Card.Body>
                        <Card.Title className="fw-bold h4">{item.category}</Card.Title>
                        <Card.Subtitle><span className="badge rounded-pill bg-secondary text-light">{userSession.name}</span></Card.Subtitle>
                      </Card.Body>
                    </Card>
                  )
                }
                return ''
              })}
            </CategoryWrapper>
            </Col>
          </Row>
          </Container>
        </Layout>
        
    )

}

export const CategoriesPage = WithAuth(Categories);