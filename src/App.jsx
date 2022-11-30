import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { NavbarRB } from './Components/navbar/NavbarRB';
import { Container } from 'react-bootstrap';
import Footer from './Components/footer/Footer';
import Home from './pages/Home';
import MyCv from './pages/MyCv';


function App() {

  return (
    <div className='footer-fix'>
      {/* usamos la navbar como actualizadora de estados  */}
      <NavbarRB/>
      <Container>
        {/* el comp switch es importante por que fuerza que se muestre una sola ruta a la vez */}
        <Switch>
          {/* la barra es como un comodin, comunmente se le pone a la ppal, debemos poner la palabra exact para que salga sino siempre aparece */}
          <Route path="/" exact>
            {/* aca se le comparte al componente memes, le damos una prop llamada memes con el valor del estado "memes" el que defini antes  */}
            <Home />
          </Route>
          {/* ahora el componente de le damos la fn que actualice el estado y le damos el atributo "setUser" */}
          <Route path="/mycv">
            <MyCv />
          </Route>

          <Route path="*">
            <Redirect to="/404" />
          </Route>

          <Route path="/404">
            404
          </Route>

        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
