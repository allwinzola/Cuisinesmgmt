import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./Subcategories.css";

const Subcategories = () => {
    const [subcategories, setSubcategories] = useState([]);
    const [title, setTitle] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);

    const navigate = useNavigate(); 

    const handleAddSubcategory = () => {
        const newSubcategory = {
            id: subcategories.length + 1,
            title,
            categories: selectedCategories,
        };
        setSubcategories([...subcategories, newSubcategory]);
        setTitle("");
        setSelectedCategories([]);
    };

    const navigateToCategories = () => {
        navigate("/categories");
    };

    const navigateToCuisines = () => {
        navigate("/");
    };

    return (
        <div>
        <div className="subcontainer">
            <h1>Subcategories</h1>
            <Card className="subcard">
            <h2 className="mt-4">Add New Subcategory</h2>
            <label><t className='subtitletxt'>Sub-Category Title:</t></label>
                <input
                className="subipfield"
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label><t className='subtitletxt'>Categories:</t></label>
                <input
                className="subipfield"
                    type="text"
                    value={selectedCategories.join(", ")}
                    onChange={(e) =>
                        setSelectedCategories(
                            e.target.value.split(",").map((item) => item.trim())
                        )
                    }
                />
            <button className="btn btn-primary" onClick={handleAddSubcategory}>
                Add Subcategory
            </button>
            <br/>
            </Card>
        </div>
        <br/>
        <button className="subtocat" onClick={navigateToCategories}>
                    Go to Categories
                </button>
                <button className="subtocui" onClick={navigateToCuisines}>
                    Go to Cuisines
                </button>
                <br/>
                <br/>
        <div className="row">
                {subcategories.map((subcategory) => (
                    <div key={subcategory.id} className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{subcategory.title}</h5>
                                <p className="card-text">
                                    Categories: {subcategory.categories.join(", ")}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Subcategories;
