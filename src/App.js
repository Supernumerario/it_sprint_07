import './App.css';
import { useState } from 'react';
import Panell from './components/Panell';

function App() {

    const [products, setProducts] = useState({
        web: false,
        webPages: 1,
        webLanguages: 1,
        seo: false,
        ads: false
    });

    const [total, setTotal] = useState(0);

    function calculateTotal(products) {
        let total = 0;
        total = products.web ? total + 500 : total;
        total = products.seo ? total + 300 : total;
        total = products.ads ? total + 200 : total;
        if (products.web) {
            total = products.webPages === 0 || (products.webPages === '' && products.webLanguages === '') ? total : total;
            total = products.webPages > 0 ? total + products.webPages * products.webLanguages * 30 : total;
        }
        return total;
    }

    function updateProducts(productKey, value) {
        let nextProducts = {...products};
        nextProducts[productKey] = value;
        setProducts({...nextProducts});
        setTotal(calculateTotal(nextProducts));
    }

    return (
        <div className="App">
            <form>
                <h2>Què vols fer?</h2>
                <div>
                    <input type="checkbox" id="web-id" name="web" onClick={(e) => updateProducts(e.target.name, e.target.checked)}></input>
                    <label for="web-id">Una pàgina web (500€)</label>
                    { products.web ? (<Panell handleChange={updateProducts} />) : null}
                </div>
                <div>
                    <input type="checkbox" id="seo-id" name="seo" onClick={(e) => updateProducts(e.target.name, e.target.checked)}></input>
                    <label for="seo-id">Una consultoria SEO (300€)</label>
                </div>
                <div>
                    <input type="checkbox" id="ads-id" name="ads" onClick={(e) => updateProducts(e.target.name, e.target.checked)}></input>
                    <label for="ads-id">Una campanya de Google Ads (200€)</label>
                </div>
                <p>Preu: {total}</p>
            </form>
        </div>
    );
}

export default App;