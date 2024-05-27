import {Link } from 'react-router-dom';
import InteractiveButtons, { ToolBar, ButtonOnSmash, GenericToolBar, PropagationToolBar } from '../functions/InteractiveButtons';
import Forms from '../functions/Forms';
import SculptureGallery, { Gallery } from '../functions/Sculpture';
// import Render from '../functions/Render'; exemplo de renderização de componente.
import Clock from '../functions/Clock';
import { Form, Form2, Form3, DelayedForm } from '../functions/Forms';
import Counter, { DelayedCounter } from '../functions/Counter';
import Pointer from '../functions/Pointer';
import List, { CounterList, List2, List3, List4, ShapeEditor, BucketList } from '../functions/List';


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

                <h1>Props do manipulador de eventos com nomenclatura</h1>
                <GenericToolBar />
                <hr />

                <h1>Propagando eventos</h1>
                <PropagationToolBar />
                <hr />

                <h1>Formulários</h1>
                <Forms />
                <hr />

                <h1>Galeria de Arte</h1>
                <SculptureGallery />
                <hr />

                <h1>Galeria de Arte com múltiplas variáveis de estado</h1>
                <Gallery />
                <hr />

                {/* <h1>Renderização e Confirmação</h1>
                //Renderização desativada, altera a formação
                <Render />
                <hr /> */}

                <h1>Re-renderizar componente quando o estado é atualizado</h1>
                <Clock />
                <hr />

                <h1>Formulários: definir renderização de gatilhos de estado</h1>
                <Form />
                <hr />

                <h1>A renderização tira um instantâneo no tempo</h1>
                <Counter />
                <hr />
                <DelayedForm />
                <hr />
                <DelayedCounter />
                <hr />

                <h1>Atualizando Objetos no estado: Mutação</h1>
                <Pointer />
                <br />
                <hr />

                <h1>Copiando objetos com sintaxe de propagação</h1>
                <Form2 />
                <hr />

                <h1>Atualizando um objeto aninhado</h1>
                <Form3 />
                <hr />

                <h1>Atualizando matrizes</h1>
                <List />
                <hr />
                <List2 />
                <hr />
                <ShapeEditor />
                <hr />
                <CounterList />
                <hr />
                <List3 />
                <hr />
                <List4 />
                <hr />
                <BucketList />               

                {/* Página 47 */}

            </div>

            <div className='btn-voltar'>
                <Link to="/">Voltar</Link>    
            </div>
        </>
    )
    
}