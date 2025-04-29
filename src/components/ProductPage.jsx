import React, { useState, useEffect } from "react";
import Products from "../data/products.js";
import "./productPage.css";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    id: 1,
    name: "",
    name_category: "Thời trang nam",
    code: "",
    image: "",
    price: "",
    old_price: ""
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const loadedProducts = Products("products");
    setProducts(loadedProducts);
    setFormData(prev => ({
      ...prev,
      id: loadedProducts.length ? parseInt(loadedProducts[loadedProducts.length - 1].id) + 1 : 1
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files[0]) {
      setFormData(prev => ({ ...prev, [name]: URL.createObjectURL(files[0]) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const saveProducts = (products) => {
    localStorage.setItem("products", JSON.stringify(products));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { ...formData, id: formData.id.toString() };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    saveProducts(updatedProducts);
    alert("Một sản phẩm đã được thêm vào!");
    setFormData({
      id: parseInt(formData.id) + 1,
      name: "",
      name_category: "Thời trang nam",
      code: "",
      image: "",
      price: "",
      old_price: ""
    });
    setShowModal(false);
  };

  return (
    <div className="add-container">
      <button className="submit-btn" onClick={() => setShowModal(true)}>
        Thêm sản phẩm
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setShowModal(false)}>&times;</span>
            <h2 className="form-title">Thêm sản phẩm mới</h2>
            <form onSubmit={handleSubmit} className="product-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Tên sản phẩm</label>
                  <input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="name_category">Danh mục</label>
                  <select id="name_category" name="name_category" value={formData.name_category} onChange={handleChange}>
                    <option value="Thời trang nam">Thời trang nam</option>
                    <option value="Thời trang nữ">Thời trang nữ</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="code">Mã sản phẩm</label>
                  <input id="code" name="code" value={formData.code} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="image">Hình ảnh</label>
                  <input type="file" id="image" name="image" onChange={handleChange} accept="image/*" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="price">Giá hiện tại</label>
                  <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="old_price">Giá cũ</label>
                  <input type="number" id="old_price" name="old_price" value={formData.old_price} onChange={handleChange} />
                </div>
              </div>

              <button type="submit" className="submit-btn">Lưu sản phẩm</button>
            </form>
          </div>
        </div>
      )}

      <div className="product-list">
        <h3>Danh sách sản phẩm</h3>
        <div className="product-table">
          <div className="table-header">
            <div>Hình ảnh</div>
            <div>Tên sản phẩm</div>
            <div>Danh mục</div>
            <div>Mã SP</div>
            <div>Giá hiện tại</div>
            <div>Giá cũ</div>
          </div>
          {products.map(product => (
            <div className="table-row" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div>{product.name}</div>
              <div>{product.name_category}</div>
              <div>{product.code}</div>
              <div className="current-price">{product.price}</div>
              <div className="old-price">{product.old_price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;