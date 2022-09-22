import { IconContext } from "react-icons/lib";
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiStyledcomponents, SiTypescript } from "react-icons/si";
import { tecnologiasProp } from "./interface";
import { TecnologyCard } from "./styles";

var tecnologia: tecnologiasProp[] = [
    { id: 0, label: 'HTML', icon: <SiHtml5 />},
    { id: 1, label: 'CSS', icon: <SiCss3 />},
    { id: 2, label: 'JavaScript', icon: <SiJavascript />},
    { id: 3, label: 'TypeScript', icon: <SiTypescript />},
    { id: 4, label: 'React', icon: <SiReact />},
    { id: 5, label: 'Styled Components', icon: <SiStyledcomponents />},
];

function index(){
    return(
        <>
            {tecnologia.map(item => {
                return(
                    <div key={item.id}>
                        <TecnologyCard>
                            <h4>{item.label}</h4>
                            <IconContext.Provider value={{ className: 'tecnology-icons' }}>
                                {item.icon}
                            </IconContext.Provider>
                        </TecnologyCard>
                    </div>
                )
            })}
        </>
    )
}

export default index;