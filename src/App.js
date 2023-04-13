import './App.css';
import { useState } from 'react';
import Panell from './components/Panell';

function App() {

    const [products, setProducts] = useState({
        web: false,
        webPages: 0,
        webLanguages: 0,
        seo: false,
        ads: false
    });

    const [total, setTotal] = useState(0);

    function calculateTotal(products) {
        let total = 0;
        total = products.web ? total + 500 : total;
        total = products.webPages > 0 ? total + products.webPages * 30 : total;
        total = products.webLanguages > 0 ? total + products.webLanguages * 30 : total;
        total = products.seo ? total + 300 : total;
        total = products.ads ? total + 200 : total;
        return total;
    }

    function handleInputChange(event) {
        const nextProducts = {...products};
        let selection = event.target.name;
        let services = ['web', 'seo', 'ads']
        if (services.includes(selection)) {
            nextProducts[selection] = event.target.checked;
        } else {
            nextProducts[selection] = event.target.value;
        }
        try {
            setProducts({...nextProducts});
        } catch (error) {
            console.error(error);
        }
        setTotal(calculateTotal(nextProducts));
    }

    return (
        <div className="App">
            <form>
                <h2>Què vols fer?</h2>
                <div>
                    <input type="checkbox" id="web-id" name="web" onClick={handleInputChange}></input>
                    <label for="web-id">Una pàgina web (500€)</label>
                    { products.web ? (<Panell handleInput={handleInputChange} />) : null}
                </div>
                <div>
                    <input type="checkbox" id="seo-id" name="seo" onClick={handleInputChange}></input>
                    <label for="seo-id">Una consultoria SEO (300€)</label>
                </div>
                <div>
                    <input type="checkbox" id="ads-id" name="ads" onClick={handleInputChange}></input>
                    <label for="ads-id">Una campanya de Google Ads (200€)</label>
                </div>
                <p>Preu: {total}</p>
            </form>
        </div>
    );
}

export default App;