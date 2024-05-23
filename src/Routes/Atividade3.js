import { Link } from 'react-router-dom';
import PackingList from '../functions/Packing';
import { PackingListNull, PackingListDel, PackingListAnd } from '../functions/Packing';
import Gallery from '../functions/Galery';
import { ProfileDefault, Profile, AvatarGregorio, AvatarLin } from '../functions/Galery';
import List from '../functions/Map';
import { DataList, AllDataList } from '../functions/Map';
import Recipe from '../functions/Recipe';
import { TeaSet } from '../functions/Recipe';

function TodoListName() {
    const name = "Gregorio Y. Zara";
    return (
        <h3>{name}'s To do List</h3>
    )
}

function TodoListDate() {
    const today = new Date();
    return <h3>To do List  for {FormatDate(today)}</h3>
}

function ToDoListObject() {
    const person = {
        name: "Gregorio Y. Zara",
        theme: {
            backgroundColor: "Black",
            color: "pink"
        }
    }

    return (
        <div style={person.theme}>
            <h3>{person.name}'s To do List</h3>
            <AvatarGregorio />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    )
}

function TodoListObjectStyle() {
    return(
        <ul style={{
            backgroundColor: "black",
            color: "pink"
        }}>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
        </ul>
    )
}

function FormatDate(date) {
    return new Intl.DateTimeFormat(
        "en-US", 
        {weekday: "long"}
    ).format(date)
}

export default function PraticarReact() {

    return (
        <>
            <h1>Atividade 3</h1>
            <h2>Praticando REACT</h2>
            <div className='corpo-atividade' style={{textAlign:'start'}}>
                <article>
                    <h1>- My First Component</h1>
                    <ol>
                        <li>Components: UI Building Blocks</li>
                        <li>Defining a Component</li>
                        <li>Using a Component</li>
                    </ol>
                </article>
                <hr />

                <div>
                    <h1>- Exportação Padrão</h1>
                    <Gallery />
                </div>
                <hr />

                <div>
                    <h1>- Exportação Nomeada</h1>
                    <ProfileDefault />
                </div>
                <hr />

                <div>
                    <h1>- Utilizando variáveis na img/Utilização de chaves</h1>
                    <TodoListName />
                    <AvatarGregorio />
                </div>
                <hr />

                <div>
                    <h1>- Formatação de data</h1>
                    <TodoListDate />
                </div>
                <hr />

                <div>
                    <h1>- Passando Objetos no style</h1>
                    <TodoListObjectStyle />
                </div>
                <hr />
                
                <div>
                    <h1>- Passando Objetos</h1>
                    <ToDoListObject />
                </div>
                <hr />

                <div>
                    <h1>- Passando props para um img</h1>
                    <AvatarLin />
                </div>
                <hr />

                <div>
                    <h1>- Passando props para funções</h1>
                    <Profile />
                </div>
                <hr />

                <div>
                    <h1>- Operador lógico para controlar exibição</h1>
                    <PackingList />
                </div>
                <hr />

                <div>
                    <h1>- Operador lógico para controlar exibição, retornando "Null" para todo "True"</h1>
                    <PackingListNull />
                </div>
                <hr />

                <div>
                    <h1>- Operador lógico para controlar exibição, utilizando ternário e riscando os concluídos</h1>
                    <PackingListDel />
                </div>
                <hr />

                <div>
                    <h1>- Operador lógico para controlar exibição, utilizando And como condição</h1>
                    <PackingListAnd />
                </div>
                <hr />

                <div>
                    <h1>- Mapeando dados armazenados em um vetor/array</h1>
                    <List />
                </div>
                <hr />

                <div>
                    <h1>- Exibindo dados estruturados e filtrando apenas 'chemists'</h1>
                    <DataList />
                </div>
                <hr />

                <div>
                    <h1>- Exibindo dados estruturados sem filtrar</h1>
                    <AllDataList />
                </div>
                <hr />

                <div>
                    <h1>- Conceito de Função pura</h1>
                    <br />
                    <h1>Spiced Chai Recipe</h1>
                    <h2>For two</h2>
                    <Recipe drinkers={2}/>
                    <h2>For a gathering</h2>
                    <Recipe drinkers={4}/>
                </div>
                <hr />

                <div>
                    <h1>- Processo de renderização puro</h1>
                    <TeaSet />
                </div>

            </div>
            
            <div className='btn-voltar'>
                <Link to="/">Voltar</Link>
            </div>
        </>
    )
}