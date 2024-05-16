import {Link } from 'react-router-dom';
import InteractiveButtons from '../functions/InteractiveButtons';

export default function Atividade4() {

    return(
        <div>
            <InteractiveButtons />
            <div className='btn-voltar'>
                <Link to="/">Voltar</Link>    
            </div>
        </div>
    )
    
}