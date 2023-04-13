import './App.css';
import { useState } from 'react';
import Panell from './components/Panell';

function App() {

    const [products, setProducts] = useState({
        web: window.localStorage.getItem('web') === 'true' ? true : false,
        webPages: Number(window.localStorage.getItem('webPages')),
        webLanguages: Number(window.localStorage.getItem('webLanguages')),
        seo: window.localStorage.getItem('seo') === 'true' ? true : false,
        ads: window.localStorage.getItem('ads') === 'true' ? true : false,
        total: Number(window.localStorage.getItem('total'))
    });

    function calculateTotal(products) {
        let total = 0;
        total = products.web ? total + 500 : total;
        total = products.seo ? total + 300 : total;
        total = products.ads ? total + 200 : total;
        if (products.web) {
            total = products.webPages === 0 || (products.webPages === '' && products.webLanguages === '') ? total : total;
            total = products.webPages > 0 ? total + products.webPages * products.webLanguages * 30 : total;
        }
        window.localStorage.setItem('total', total);
        return total;
    }

    function updateProducts(productKey, value) {
        let nextProducts = {...products};
        try {
            nextProducts[productKey] = value;
            let totalResult = calculateTotal(nextProducts);
            setProducts({...nextProducts, total : totalResult }); 
            window.localStorage.setItem(productKey, value);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="App">
            <form>
                <h2>Què vols fer?</h2>
                <div>
                    <input type="checkbox" id="web-id" name="web" checked={products.web} onChange={(e) => updateProducts(e.target.name, e.target.checked)}></input>
                    <label htmlFor="web-id">Una pàgina web (500€)</label>
                    { products.web ? (<Panell value={products} handleChange={updateProducts} />) : null}
                </div>
                <div>
                    <input type="checkbox" id="seo-id" name="seo" checked={products.seo} onChange={(e) => updateProducts(e.target.name, e.target.checked)}></input>
                    <label htmlFor="seo-id">Una consultoria SEO (300€)</label>
                </div>
                <div>
                    <input type="checkbox" id="ads-id" name="ads" checked={products.ads} onChange={(e) => updateProducts(e.target.name, e.target.checked)}></input>
                    <label htmlFor="ads-id">Una campanya de Google Ads (200€)</label>
                </div>
                <p>Preu: {products.total}€</p>
            </form>
        </div>
    );
}

export default App;