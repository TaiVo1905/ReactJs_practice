function ShoppingCartSection () {
    return (

        <section className="shopping-cart spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cart-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th className="p-name">Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Delete</th>
                        <th>Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="cart-pic first-row"><img src="img/cart-page/product-1.jpg" alt="" /></td>
                        <td className="cart-title first-row">
                          <h5>Pure Pineapple</h5>
                        </td>
                        <td className="p-price first-row">$60.00</td>
                        <td className="qua-col first-row">
                          <div className="quantity">
                            <div className="pro-qty">
                              <input type="text" defaultValue={1} />
                            </div>
                          </div>
                        </td>
                        <td className="total-price first-row">$60.00</td>
                        <td className="close-td first-row"><i className="ti-close" /></td>
                        <td className="close-td first-row" ><i className="ti-save" /></td>
                      </tr>
                      <tr>
                        <td className="cart-pic"><img src="img/cart-page/product-2.jpg" alt="" /></td>
                        <td className="cart-title">
                          <h5>American lobster</h5>
                        </td>
                        <td className="p-price">$60.00</td>
                        <td className="qua-col">
                          <div className="quantity">
                            <div className="pro-qty">
                              <input type="text" defaultValue={1} />
                            </div>
                          </div>
                        </td>
                        <td className="total-price">$60.00</td>
                        <td className="close-td"><i className="ti-close" /></td>
                        <td className="close-td"><i className="ti-save" /></td>
                      </tr>
                      <tr>
                        <td className="cart-pic"><img src="img/cart-page/product-3.jpg" alt="" /></td>
                        <td className="cart-title">
                          <h5>Guangzhou sweater</h5>
                        </td>
                        <td className="p-price">$60.00</td>
                        <td className="qua-col">
                          <div className="quantity">
                            <div className="pro-qty">
                              <input type="text" defaultValue={1} />
                            </div>
                          </div>
                        </td>
                        <td className="total-price">$60.00</td>
                        <td className="close-td"><i className="ti-close" /></td>
                        <td className="close-td"><i className="ti-save" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-lg-4 offset-lg-8">
                    <div className="proceed-checkout">
                      <ul>
                        <li className="subtotal">Subtotal <span>$240.00</span></li>
                        <li className="cart-total">Total <span>$240.00</span></li>
                      </ul>
                      <a href="#" className="proceed-btn">PROCEED TO CHECK OUT</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}

export default ShoppingCartSection;