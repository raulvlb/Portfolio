import { Habilidades } from "./styles";
import TecnologyCards from '../TecnologyCards'


function index() {
    return (
        <Habilidades>
            <div>
                <h1>Minhas<br/><span>Habilidades</span>.</h1>
                <p>Ao lado estão as <span>tecnologias e<br/>frameworks</span> que possuo habilidade<br/>e conhecimentos.</p>
            </div>

            <div className="cards">
                <TecnologyCards />
            </div>
        </Habilidades>

    )
}

export default index;