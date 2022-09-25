import Home from '../../components/Home/';
import NavBar from '../../components/NavBar/';
import Habilidades from '../../components/Habilidades/'
import { Repos } from '../../components/Repos';
import { Site } from './styles';

function index() {
  window.document.title = "Portfólio - Raul Barra";
  return (
    <div className="App">
      <Site>
        <NavBar />
        <Home />
        <Habilidades />
        <Repos />
      </Site>
    </div>
  );
}
alert('Site em desenvolvimento')

export default index;
