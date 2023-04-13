import Link from '../components/Link';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Calcula el cost del teu servei</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/calculator">Calculadora</Link></li>
            </ul>
            <p>Benvingut/da a la calculadora de pressupostos pel nou servei de desenvolupament web. A continuació podràs fer una estimació de costos introduint les dades del servei que vols contractar.</p>
            <button onClick={() => navigate(process.env.PUBLIC_URL + '/calculator')}>
                Accedir a la calculadora
            </button>
        </div>
    );
}