// // import React, { useState, useEffect } from 'react';
// // import './listproduct.css';
// // import cross_icon from '../../assets/cart_cross_icon.png';

// // const ListProduct = () => {
// //   const [allProducts, setAllProducts] = useState([]);

// //   // Fetch products
// //   const fetchInfo = async () => {
// //     try {
// //       const res = await fetch('http://localhost:4000/allproducts');
// //       if (!res.ok) throw new Error("Failed to fetch products");
// //       const data = await res.json();

// //       if (data.success && Array.isArray(data.products)) {
// //         setAllProducts(data.products);
// //       } else {
// //         console.error('Invalid data format:', data);
// //         setAllProducts([]);
// //       }
// //     } catch (error) {
// //       console.error("Error fetching products:", error);
// //       setAllProducts([]);
// //     }
// //   };

// //   // Delete product
// //   const handleDelete = async (productId) => {
// //     try {
// //       const res = await fetch(`http://localhost:4000/removeproduct/${productId}`, {
// //         method: 'DELETE',
// //       });
  
// //       const data = await res.json();
// //       console.log(data); // Log response
  
// //       if (data.success) {
// //         setAllProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));  // Ensure using `_id`
// //       } else {
// //         console.error("Failed to delete product:", data.message);
// //       }
// //     } catch (error) {
// //       console.error("Error deleting product:", error);
// //     }
// //   };
  
 

// //   useEffect(() => {
// //     fetchInfo();
// //   }, []);

// //   return (
// //     <div className='list-product'>
// //       <h1>All Products List</h1>
// //       <div className="listproduct-format-main">
// //         <p>Products</p>
// //         <p>Title</p>
// //         <p>Old Price</p>
// //         <p>New Price</p>
// //         <p>Category</p>
// //         <p>Remove</p>
// //       </div>

// //       <div className="listproduct-allproducts">
// //         <hr />
// //         {allProducts.length > 0 ? (
// //           allProducts.map((product, index) => (
// //             <div key={index} className="listproduct-format-main listproduct-format">
// //               {/* Dynamically loading images from public folder */}
// //               <img 
// //                 src={product.image} 
// //                 alt="Product" 
// //                 className="listproduct-product-icon" 
// //                 onError={(e) => { e.target.src = "/fallback-image.png"; }} 
// //               />

// //               <p>{product.name || 'N/A'}</p>
// //               <p>${product.old_price !== undefined ? product.old_price : '0.00'}</p>
// //               <p>${product.new_price !== undefined ? product.new_price : '0.00'}</p>
// //               <p>{product.category || 'Uncategorized'}</p>
// //               <img
// //                 className='listproduct-remove-icon'
// //                 src={cross_icon}
// //                 alt="Remove"
// //                 onClick={() => handleDelete(product._id)}
// //                 style={{ cursor: 'pointer' }} 
// //               />
// //             </div>
// //           ))
// //         ) : (
// //           <p style={{ textAlign: 'center', color: '#4a3f35' }}>No products available.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ListProduct;


// import React, { useState, useEffect } from 'react';
// import './listproduct.css';
// import cross_icon from '../../assets/cart_cross_icon.png';

// const ListProduct = () => {
//   const [allProducts, setAllProducts] = useState([]);
//   const [showModal, setShowModal] = useState(false);  // State to control modal visibility

//   // Fetch products
//   const fetchInfo = async () => {
//     try {
//       const res = await fetch('http://localhost:4000/allproducts');
//       if (!res.ok) throw new Error("Failed to fetch products");
//       const data = await res.json();

//       if (data.success && Array.isArray(data.products)) {
//         setAllProducts(data.products);
//       } else {
//         console.error('Invalid data format:', data);
//         setAllProducts([]);
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setAllProducts([]);
//     }
//   };

//   // Delete product
//   const handleDelete = async (productId) => {
//     try {
//       const res = await fetch(`http://localhost:4000/removeproduct/${productId}`, {
//         method: 'DELETE',
//       });
  
//       const data = await res.json();
//       console.log(data); // Log response
  
//       if (data.success) {
//         setAllProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));  // Ensure using `_id`
//         setShowModal(true); // Show the success modal
//       } else {
//         console.error("Failed to delete product:", data.message);
//       }
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   // Close the modal
//   const closeModal = () => {
//     setShowModal(false);
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, []);

//   return (
//     <div className='list-product'>
//       <h1>All Products List</h1>
//       <div className="listproduct-format-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Old Price</p>
//         <p>New Price</p>
//         <p>Category</p>
//         <p>Remove</p>
//       </div>

//       <div className="listproduct-allproducts">
//         <hr />
//         {allProducts.length > 0 ? (
//           allProducts.map((product, index) => (
//             <div key={index} className="listproduct-format-main listproduct-format">
//               {/* Dynamically loading images from public folder */}
//               <img 
//                 src={product.image} 
//                 alt="Product" 
//                 className="listproduct-product-icon" 
//                 onError={(e) => { e.target.src = "/fallback-image.png"; }} 
//               />

//               <p>{product.name || 'N/A'}</p>
//               <p>${product.old_price !== undefined ? product.old_price : '0.00'}</p>
//               <p>${product.new_price !== undefined ? product.new_price : '0.00'}</p>
//               <p>{product.category || 'Uncategorized'}</p>
//               <img
//                 className='listproduct-remove-icon'
//                 src={cross_icon}
//                 alt="Remove"
//                 onClick={() => handleDelete(product._id)}
//                 style={{ cursor: 'pointer' }} 
//               />
//             </div>
//           ))
//         ) : (
//           <p style={{ textAlign: 'center', color: '#4a3f35' }}>No products available.</p>
//         )}
//       </div>

//       {/* Success Modal */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <p>Product removed successfully!</p>
//             <button onClick={closeModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ListProduct;


import React, { useState, useEffect } from 'react';
import './listproduct.css';
import cross_icon from '../../assets/cart_cross_icon.png';
import EditProductForm from './EditProductForm'; // Import the edit form

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product for editing
  const [showModal, setShowModal] = useState(false);  // Delete success modal

  // Fetch products
  const fetchInfo = async () => {
    try {
      const res = await fetch('http://localhost:4000/allproducts');
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();

      if (data.success && Array.isArray(data.products)) {
        setAllProducts(data.products);
      } else {
        console.error('Invalid data format:', data);
        setAllProducts([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setAllProducts([]);
    }
  };

  // Delete product
  const handleDelete = async (productId) => {
    try {
      const res = await fetch(`http://localhost:4000/removeproduct/${productId}`, {
        method: 'DELETE',
      });
  
      const data = await res.json();
  
      if (data.success) {
        setAllProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
        setShowModal(true);
      } else {
        console.error("Failed to delete product:", data.message);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Open edit form
  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Refresh product list after editing
  const refreshProducts = () => {
    fetchInfo();
    setSelectedProduct(null);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Actions</p>
      </div>

      <div className="listproduct-allproducts">
        <hr />
        {allProducts.length > 0 ? (
          allProducts.map((product) => (
            <div key={product._id} className="listproduct-format-main listproduct-format">
              <img 
                src={product.image} 
                alt="Product" 
                className="listproduct-product-icon" 
                onError={(e) => { e.target.src = "/fallback-image.png"; }} 
              />
              <p>{product.name || 'N/A'}</p>
              <p>Rs.{product.old_price !== undefined ? product.old_price : '0.00'}</p>
              <p>Rs.{product.new_price !== undefined ? product.new_price : '0.00'}</p>
              <p>{product.category || 'Uncategorized'}</p>
              
              {/* Edit and Delete Buttons */}
              <div className="listproduct-actions">
                <button className="edit-button" onClick={() => handleEdit(product)}>Edit</button>
                <img
                  className='listproduct-remove-icon'
                  src={cross_icon}
                  alt="Remove"
                  onClick={() => handleDelete(product._id)}
                  style={{ cursor: 'pointer' }} 
                />
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#4a3f35' }}>No products available.</p>
        )}
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>Product removed successfully!</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      {/* Edit Product Form Modal */}
      {selectedProduct && (
        <EditProductForm product={selectedProduct} closeForm={() => setSelectedProduct(null)} refreshProducts={refreshProducts} />
      )}
    </div>
  );
};

export default ListProduct;
