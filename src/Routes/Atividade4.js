import {Link } from 'react-router-dom';
import InteractiveButtons from '../functions/InteractiveButtons';
import { ToolBar, ButtonOnSmash, GenericToolBar, PropagationToolBar } from '../functions/InteractiveButtons';
import Forms from '../functions/Forms';

export default function Atividade4() {

    return(
        <>
            <h1>Atividade 4</h1>
            <h2>Praticando Mais React</h2>
            <div className='corpo-atividade'>
                <h1>Adicionando interatividade</h1>
                <InteractiveButtons />
                <hr />

                <h1>Manipulando eventos</h1>
                <ToolBar />
                <hr />

                <h1>Nomeando os próprios manipuladores de evento</h1>
                <ButtonOnSmash onSmash={() => { alert(`Playing!!!`) }}>
                    Play Movie
                </ButtonOnSmash>
                <ButtonOnSmash onSmash={() => { alert(`Uploading!!!`) }}>
                    Upload Image
                </ButtonOnSmash>
                <hr />

                <h1>Props do manipulador de eventos de nomenclatura</h1>
                <GenericToolBar />
                <hr />

                <h1>Propagando eventos</h1>
                <PropagationToolBar />
                <hr />

                <h1>Formulários</h1>
                <Forms />



            </div>

            <div className='btn-voltar'>
                <Link to="/">Voltar</Link>    
            </div>
        </>
    )
    
}