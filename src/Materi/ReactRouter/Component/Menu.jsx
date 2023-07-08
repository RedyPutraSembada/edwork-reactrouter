import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Menu = () => {
    const params = new useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        if (params.kategori === 'minum') {
            setData(["Es Teh", "Teh Hangat", "Juice Jeruk", "Juice Alpukat", "Juice Mangga"]);
        } else if (params.kategori === 'makan') {
            setData(["Mie Ayam", "Bakso", "Nasi Biasa", "Nasi Uduk", "Ayam Teriyaki"]);
        }
    }, [params.kategori]);

    return (
        <>
            <h1>Halaman Menu {params.kategori}</h1>
            <ul>
                {
                    data.map((item, i) => <li key={`data-${i}`}>{item}</li>)
                }
            </ul>
        </>
    )
}
export default Menu;