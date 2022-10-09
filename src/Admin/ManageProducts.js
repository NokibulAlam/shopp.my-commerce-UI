import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

// Import Admin DashBoard
import AdminDashBoard from '../User/AdminDashBoard';

// Import Components
// import ShowImage from '../Core/ShowImage/ShowImage';

// Import API
import { isAuthenticate } from '../Auth/index';
import { getProducts, deleleProduct} from './AdminApi';

const ManageProducts = () => {
  let [products, setProducts] = useState([]);

  const { user, token } = isAuthenticate();

  // For Deleting Product
  const removeProduct = (id) => {
    deleleProduct(user._id, token, id)
      .then((data) => {
        if(data.error){
          console.log(data.error);
        }
        else{
          loadProducts();
        }
      });
  };

  // For Getting All Products
  const loadProducts = () => {
    getProducts()
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        }
        else {
          setProducts(data);
          // console.log(data);
        }
      })
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <AdminDashBoard>
      <div>
        <div>
          <h2 >Total Products: {products.length}</h2>
        </div>

        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                {/* <th>Product Image</th> */}
                <th>Update Product</th>
                <th>Delete Product</th>
              </tr>
            </thead>
            <tbody>
            {products.map((product, i) => (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>
                      <strong>{product.name}</strong>
                    </td>
                    {/* <td style={{ width: "200px"}}>
                      <ShowImage item={product} url="product" />
                    </td> */}
                    <td>
                      {" "}
                      <Link to={`/admin/product/update/${product._id}`}>
                        <span className="badge badge-info badge-pill bg-warning">
                           Update
                        </span>
                      </Link>
                    </td>
                    <td>
                      {" "}
                      <span
                        onClick={() => removeProduct(product._id)}
                        className="badge badge-danger badge-pill bg-danger">
                         Delete
                      </span>{" "}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </AdminDashBoard>
  )
}

export default ManageProducts;