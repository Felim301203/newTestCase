import axios from "axios";
import { useEffect, useState } from "react";
import { useParams , useNavigate } from "react-router-dom";

export default function Update() {
    const [idCategory, setIdCategory] = useState(0);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [unit, setUnit] = useState('');

    const { id } = useParams();

    const nav = useNavigate()

    const getDataById = async (ids) => {
        
        try {
            const response = await axios.get('https://api.insoftapp.com/api_recruit/api/find_barang', {
                headers: {
                  'Authorization': 'Bearer 496e736f66745f417369615f54656b6e6f6c6f6769',
                  'id_barang': ids
                }
              });
            console.log(response,'ini res'); 
            const { id_category, name, price, unit } = response.data.data;

            setIdCategory(id_category);
            setName(name);
            setPrice(price);
            setUnit(unit);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getDataById(id);
    }, [id]); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(
            'https://api.insoftapp.com/api_recruit/api/edit_barang',
            '',
            {
              headers: {
                'Authorization': 'Bearer 496e736f66745f417369615f54656b6e6f6c6f6769',
                'id_barang': id,
                'id_category': idCategory,
                'name': name,
                'price': price,
                'unit': unit
              }
            }
          );

          if(response.status == 200){
            nav('/')
          }
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <h2>Edit Barang</h2>
                
                <div className="form-child">
                    <label>ID Category:</label>
                    <input type="number" value={idCategory} onChange={(e) => setIdCategory(parseInt(e.target.value))} />
                </div>
                <div className="form-child">
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-child">
                    <label>Price:</label>
                    <input type="number" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
                </div>
                <div className="form-child">
                    <label>Unit:</label>
                    <input type="text" value={unit} onChange={(e) => setUnit(e.target.value)} />
                </div>
                
                <button type="submit">Update</button>
            </form>
        </div>
    );
}
