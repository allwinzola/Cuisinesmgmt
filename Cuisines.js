import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Cuisines.css';
import { Card } from 'react-bootstrap';
const Cuisines = () => {
    const [cuisines, setCuisines] = useState([]);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [cuisineType, setCuisineType] = useState(''); 
    const navigate = useNavigate(); // Initialize useNavigate

    const navigateToCategories = () => {
        navigate("/categories"); // Navigate to Categories page
    };

    const navigateToSubcategories = () => {
        navigate("/subcategories"); // Navigate to Subcategories page
    };
    const handleAddCuisine = () => {
        if (cuisineType === '') {
            alert('Please select a cuisine type!');
            return;
        }
        const newCuisine = { 
            id: cuisines.length + 1, 
            title, 
            image: URL.createObjectURL(image), 
            type: cuisineType // Store the selected cuisine type
        };
        setCuisines([...cuisines, newCuisine]);
        setTitle('');
        setImage(null);
        setCuisineType(''); // Reset the dropdown selection
    };

    return (
            <div>
        <div className="cuicontainer">
            <h1>Cuisines</h1>
            <Card className='cuicard'>
            <h2 className="mt-4"><t className='newcuitxt'>Add New Cuisine</t></h2>
            <label><t className='cuititle'>Title:</t>
            <input className='cuiiptxt' type="text" value={title} onChange={e => setTitle(e.target.value)}/></label>
            <label><t className='cuiimgtxt'>Image:</t>
            <input className='cuiiptxt' type="file" onChange={e => setImage(e.target.files[0])}/></label>
                    <label  htmlFor="cuisineType"><t className='cuitype'>Cuisine Type:</t></label>
                    <select 
                    className='cuiiptxt' 
                        id="cuisineType" 
                        value={cuisineType} 
                        onChange={e => setCuisineType(e.target.value)}
                    >
                        <option value="">Select a Cuisine</option>
                        <option value="Italian">Italian</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Indian">Indian</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Japanese">Japanese</option>
                    </select>
            <button className='cuiaddbt' onClick={handleAddCuisine}>
                Add Cuisine
            </button>
            </Card>
        </div>
        <br/>
                <button className="cuitocat" onClick={navigateToCategories}>
                    Go to Categories
                </button>
                <button className="cuitosub" onClick={navigateToSubcategories}>
                    Go to Subcategories
                </button>
            <br/>   
            <br/>
            
            <div className="row">
                {cuisines.map(cuisine => (
                    <div key={cuisine.id} className="col-md-3">
                        <div className="card">
                            <img src={cuisine.image} className="card-img-top" alt={cuisine.title} />
                            <div className="card-body">
                              <h5 className="card-title">{cuisine.title}</h5>
                                  <p className="card-text">{cuisine.type}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
    );
};

export default Cuisines;
