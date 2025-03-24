// import React, { useState } from 'react';
// import './AddProduct.css';
// import upload_area from '../../assets/upload_area.png';

// const AddProduct = () => {
//   const [image, setImage] = useState(null);
//   const [productDetails, setProductDetails] = useState({
//     name: "",
//     image: "",
//     category: "shawls",
//     new_price: "",
//     old_price: "",
//   });

//   const imageHandler = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const changeHandler = (e) => {
//     setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
//   };

//   const Add_Product = async () => {
//     if (!image || !productDetails.name || !productDetails.new_price || !productDetails.old_price) {
//       alert("Please fill all fields and upload an image.");
//       return;
//     }

//     let responseData;
//     let formData = new FormData();
//     formData.append('product', image);

//     try {
//       // Upload the image first
//       const imageUploadResponse = await fetch('http://localhost:4000/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       responseData = await imageUploadResponse.json();

//       if (responseData.success) {
//         let product = { ...productDetails, image: responseData.image_url };

//         // Send product details to backend
//         const addProductResponse = await fetch('http://localhost:4000/addproduct', {
//           method: 'POST',
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(product),
//         });

//         const addProductData = await addProductResponse.json();

//         if (addProductData.success) {
//           alert("Product added successfully!");
//           setProductDetails({ name: "", image: "", category: "shawls", new_price: "", old_price: "" });
//           setImage(null);
//         } else {
//           alert("Failed to add product.");
//         }
//       } else {
//         alert("Image upload failed.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <div className="add-product">
//       <h2>Add New Product</h2>

//       <div className="addproduct-itemfield">
//         <p>Product Title</p>
//         <input 
//           value={productDetails.name} 
//           onChange={changeHandler} 
//           type="text" 
//           name="name" 
//           placeholder="Enter product title" 
//         />
//       </div>

//       <div className="addproduct-price">
//         <div className="addproduct-itemfield">
//           <p>Price</p>
//           <input 
//             value={productDetails.old_price} 
//             onChange={changeHandler} 
//             type="text" 
//             name="old_price" 
//             placeholder="Enter original price" 
//           />
//         </div>
//         <div className="addproduct-itemfield">
//           <p>Offer Price</p>
//           <input 
//             value={productDetails.new_price} 
//             onChange={changeHandler} 
//             type="text" 
//             name="new_price" 
//             placeholder="Enter offer price" 
//           />
//         </div>
//       </div>

//       <div className="addproduct-itemfield">
//         <p>Product Category</p>
//         <select 
//           value={productDetails.category} 
//           onChange={changeHandler} 
//           name="category" 
//           className="add-product-selector"
//         >
//           <option value="shawls">Shawls</option>
//           <option value="wraps">Wraps</option>
//         </select>
//       </div>

//       <div className="addproduct-itemfield upload-section">
//         <p>Upload Product Image</p>
//         <label htmlFor="file-input">
//           <img 
//             src={image ? URL.createObjectURL(image) : upload_area} 
//             className="addproduct-thumbnail-img" 
//             alt="Upload" 
//           />
//         </label>
//         <input 
//           onChange={imageHandler} 
//           type="file" 
//           name="image" 
//           id="file-input" 
//           hidden 
//         />
//       </div>

//       <button onClick={Add_Product} className="addproduct-btn">
//         Add Product
//       </button>
//     </div>
//   );
// };

// export default AddProduct;


import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.png';

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "shawls",
    new_price: "",
    old_price: "",
  });
  const [showModal, setShowModal] = useState(false);  // State to control modal visibility

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    if (!image || !productDetails.name || !productDetails.new_price || !productDetails.old_price) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    let responseData;
    let formData = new FormData();
    formData.append('product', image);

    try {
      // Upload the image first
      const imageUploadResponse = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData,
      });

      responseData = await imageUploadResponse.json();

      if (responseData.success) {
        let product = { ...productDetails, image: responseData.image_url };

        // Send product details to backend
        const addProductResponse = await fetch('http://localhost:4000/addproduct', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        });

        const addProductData = await addProductResponse.json();

        if (addProductData.success) {
          setShowModal(true); // Show the success modal
          setProductDetails({ name: "", image: "", category: "shawls", new_price: "", old_price: "" });
          setImage(null);
        } else {
          alert("Failed to add product.");
        }
      } else {
        alert("Image upload failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div className="add-product">
      <h2>Add New Product</h2>

      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input 
          value={productDetails.name} 
          onChange={changeHandler} 
          type="text" 
          name="name" 
          placeholder="Enter product title" 
        />
      </div>

      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input 
            value={productDetails.old_price} 
            onChange={changeHandler} 
            type="text" 
            name="old_price" 
            placeholder="Enter original price" 
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input 
            value={productDetails.new_price} 
            onChange={changeHandler} 
            type="text" 
            name="new_price" 
            placeholder="Enter offer price" 
          />
        </div>
      </div>

      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select 
          value={productDetails.category} 
          onChange={changeHandler} 
          name="category" 
          className="add-product-selector"
        >
          <option value="shawls">Shawls</option>
          <option value="wraps">Wraps</option>
        </select>
      </div>

      <div className="addproduct-itemfield upload-section">
        <p>Upload Product Image</p>
        <label htmlFor="file-input">
          <img 
            src={image ? URL.createObjectURL(image) : upload_area} 
            className="addproduct-thumbnail-img" 
            alt="Upload" 
          />
        </label>
        <input 
          onChange={imageHandler} 
          type="file" 
          name="image" 
          id="file-input" 
          hidden 
        />
      </div>

      <button onClick={Add_Product} className="addproduct-btn">
        Add Product
      </button>

      {/* Success Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>Product added successfully!</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
