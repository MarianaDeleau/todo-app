import { FC } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components";


const HomePage: FC = () => {
    
    return (
        <Layout mainClass="home">
            <h1><span className="maquina-escribir">Welcome ToDO App...</span></h1>
            <Link className="text-decoration-none linkButton border border-dark mt-5" to={'./login'}>Login</Link>
        </Layout>

    )
}

export {HomePage}