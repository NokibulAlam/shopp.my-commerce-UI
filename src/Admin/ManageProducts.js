import React, { useState, useEffect } from 'react';

// Import Admin DashBoard
import AdminDashBoard from '../User/AdminDashBoard';

// Import API
import { isAuthenticate } from '../Auth/index';
import { getProducts } from './AdminApi';

const ManageProducts = () => {
  let [products, setProducts] = useState([]);

  const { user, token } = isAuthenticate();

  const loadProducts = () => {
    getProducts()
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        }
        else {
          setProducts(data);
          console.log(data);
        }
      })
  }

  useEffect(() => {
    loadProducts();
  }, [])

  return (
    <AdminDashBoard>
      <div>
        <div>
          <h2 >Total Products: {products.length}</h2>
        </div>

        <div>
          <table claass="table">
            <thead class="thead-dark">
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Product Name</th>
                <th scope='col'>Update</th>
                <th scope='col'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => (
                <tr>
                  <th scope="row">{i}</th>
                  <td>
                    <strong>{product.name}</strong>
                  </td>
                  <td>
                    {" "}
                    {/* <Link to={`/admin/product/update/${product._id}`}> */}
                      <span className="badge badge-info badge-pill">
                        {/* <FontAwesomeIcon icon={faEdit} /> Update */}
                      </span>
                    {/* </Link> */}
                  </td>
                  <td>
                    {" "}
                    <span
                      // onClick={() => removeProduct(product._id)}
                      className="badge badge-danger badge-pill"
                    >
                      {/* <FontAwesomeIcon icon={faTrash} /> Delete */}
                    </span>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminDashBoard>
  )
}

export default ManageProducts;