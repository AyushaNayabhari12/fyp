import React, { useState } from "react";
import "./EditProductForm.css";

const EditProductForm = ({ product, closeForm, refreshProducts }) => {
  const [formData, setFormData] = useState({
    name: product.name,
    category: product.category,
    old_price: product.old_price,
    new_price: product.new_price,
    image: product.image,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:4000/updateproduct/${product._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Product updated successfully!");
        refreshProducts();
      } else {
        alert("Failed to update product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="edit-product-modal">
      <div className="edit-product-content">
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />

          <label>Category:</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange} />

          <label>Old Price:</label>
          <input type="number" name="old_price" value={formData.old_price} onChange={handleChange} />

          <label>New Price:</label>
          <input type="number" name="new_price" value={formData.new_price} onChange={handleChange} />

          <label>Image URL:</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange} />

          <button type="submit">Update Product</button>
          <button type="button" onClick={closeForm}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditProductForm;
