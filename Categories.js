import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";
import { Card } from "react-bootstrap";
import data from "../../datafile.json";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [cuisineType, setCuisineType] = useState([]);
    const [subcatType, setSubcatType] = useState([]);

    const cuisinedata = data.cuisines;
    const subcategories = data.subcategories;

    const navigate = useNavigate();
    const navigateToCuisines = () => {
        navigate("/");
    };

    const navigateToSubcategories = () => {
        navigate("/subcategories");
    };

    const handleAddCategory = () => {
        if (cuisineType.length === 0 || subcatType.length === 0) {
            alert("Please select both cuisine types and subcategories!");
            return;
        }

        const newCategory = {
            id: categories.length + 1,
            title,
            image: URL.createObjectURL(image),
            cuisines: cuisineType,
            subcategories: subcatType,
        };

        setCategories([...categories, newCategory]);
        setTitle("");
        setImage(null);
        setCuisineType([]);
        setSubcatType([]);
    };

    const handleCuisineChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
        setCuisineType(selectedOptions);
    };

    const handleSubcategoryChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
        setSubcatType(selectedOptions);
    };

    return (
        <div>
            <div className="catcontainer">
                <h1>Categories</h1>
                <Card className="catcard">
                    <h2 className="mt-4">Add New Category</h2>
                    <label><t className='txts' >Category Title:</t>
                        <input
                        className="ipfield"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>
                    <label><t className='txts'>Image:</t>            
                        <input
                        className="ipfield"
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </label>

                    <label><t className='txts'>Select Cuisines:</t>
                        <select
                        className="ipfield"
                            multiple
                            value={cuisineType}
                            onChange={handleCuisineChange}
                        >
                            {cuisinedata.map((cuisine, index) => (
                                <option key={index} value={cuisine}>
                                    {cuisine}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label><t className='txts'>Select Subcategories:</t>
                        <select
                        className="ipfield"
                            multiple
                            value={subcatType}
                            onChange={handleSubcategoryChange}
                        >
                            {subcategories.map((subcategory, index) => (
                                <option key={index} value={subcategory}>
                                    {subcategory}
                                </option>
                            ))}
                        </select>
                    </label>

                    <br />
                    <button className="btn btn-primary" onClick={handleAddCategory}>
                        Add Category
                    </button>
                </Card>
                <br />
                <br/>
                    <button
                        className="cattocui"
                        onClick={navigateToCuisines}
                    >
                        Go to Cuisines
                    </button>
                    <button
                        className="cattosub"
                        onClick={navigateToSubcategories}
                    >
                        Go to Subcategories
                    </button>
            </div>
            <br/>   
            <br/>
            <div className="row mt-4">
                {categories.map((category) => (
                    <div key={category.id} className="col-md-4">
                        <div className="card">
                            <img
                                src={category.image}
                                className="card-img-top"
                                alt={category.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{category.title}</h5>
                                <p className="card-text">
                                    Cuisines: {category.cuisines.join(", ")}
                                    <br />
                                    Subcategories: {category.subcategories.join(", ")}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;

