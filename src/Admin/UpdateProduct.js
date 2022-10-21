import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

// Admin Dashboard Layout
import AdminDashBoard from '../User/AdminDashBoard';

// Import API
import { isAuthenticate } from '../Auth';
import { getCategory, updateProduct } from './AdminApi';
import { getSingleProduct } from '../Core/ApiCore';


const UpdateProduct = () => {
  // state
  let [category, setCategory] = useState([]);
  let [values, setValues] = useState({
    loading: false,
    error: "",
    createProductName: "",
    redirectToProfile: false,
    categories: [],
  });

  const form = useRef(null);

  // data recieve
  const { user, token } = isAuthenticate();
  const { loading, error, createProductName, redirectToProfile } = values;

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const init = (productId) => {
    getSingleProduct(productId)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        }
        else {
          // console.log(data.category.name);
          setValue("name", data.name, { shouldValidate: false });
          setValue("photo", "", { shouldValidate: false });
          setValue("description", data.description, { shouldValidate: false });
          setValue("price", data.price, { shouldValidate: false });
          setValue("quantity", data.quantity, { shouldValidate: false });
          setValue("category", data.category, { shouldValidate: false });
          setValue("shipping", data.shipping, { shouldValidate: false });
        }
      });
  };

  // get Product ID from Params
  const { productId } = useParams();

  useEffect(() => {
    getCategory()
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        }
        else {
          setCategory((category) => data);
          init(productId);
        }
      });
  }, []);

  const submitHandler = (data) => {
    const product = new FormData(form.current);
    // console.log(product);
    setValues({...values, error: "", loading: true});
    updateProduct(user._id, token, productId, product)
      .then((data) => {
        if(data.error){
          setValues({...values, error: data.error});
        }
        setValue("name", "", {shouldValidate: false});
        setValue("price", "", {shouldValidate: false});
        setValue("photo", "", {shouldValidate: false});
        setValue("description", "", {shouldValidate: false});
        setValue("quantity", "", {shouldValidate: false});
        setValue("shipping", "0", {shouldValidate: false});

        setValues({...values, error: "", loading: false, createProductName: data.name});
      });
  }

  const updateProductForm = () => {
    return (
      <div>
        <h2>Update Product</h2>
        <div>
          <form ref={form} onSubmit={handleSubmit(submitHandler)}>
            <h4>Product Photo</h4>
            <span className='err'>{errors.photo && "This Field is Required"}</span>
            <label className="btn btn-secondary">
              <input
                type="file"
                accept="image/*"
                {...register("photo", { required: true })}
              />
            </label>

            <div className="form-group mt-2">
              <label htmlFor="name" className="text-muted mb-1">
                Name{" "}
                <span className="err">
                  {errors.name && "This Field is Required"}
                </span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Product Name"
                className="form-control"
                {...register("name", { required: true, maxLength: 32 })}
              />
            </div>

            <div className="form-group mt-2">
              <label htmlFor="price" className="text-muted mb-1">
                Price{" "}
                <span className="err">
                  {errors.price && "This Field is Required"}
                </span>
              </label>
              <input
                type="number"
                id="price"
                placeholder="Product Price"
                className="form-control"
                {...register("price", { required: true })}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="category" className="text-muted mb-1">
                Category{" "}
                <span className="err">
                  {errors.category && "This Field is Required"}
                </span>
              </label>
              <select
                type="text"
                id="category"
                placeholder="Product Category"
                className="form-control"
                {...register("category", { required: true })}
              >
                <option>Pleaes Select One</option>

                {category.map((c, i) => (
                  <option key={i} value={c._id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group mt-2">
              <label htmlFor="shipping" className="text-muted mb-1">
                Shipping{" "}
                <span className="err">
                  {errors.shipping && "This Field is Required"}
                </span>
              </label>
              <select
                type="text"
                id="shipping"
                placeholder="Shipping"
                className="form-control"
                {...register("shipping", { required: true })}
              >
                <option>Pleaes Select One</option>
                <option value="0">No</option>
                <option value="1">Yes</option>
              </select>
            </div>

            <div className="form-group mt-2">
              <label htmlFor="quantity" className="text-muted mb-1">
                Quantity{" "}
                <span className="err">
                  {errors.quantity && "This Field is Required"}
                </span>
              </label>
              <input
                type="number"
                id="quantity"
                placeholder="Quantity"
                className="form-control"
                {...register("quantity", { required: true })}
              />
            </div>

            <div className="form-group mt-2">
              <label htmlFor="description" className="text-muted mb-1">
                Description{" "}
                <span className="err">
                  {errors.description && "This Field is Required"}
                </span>
              </label>
              <textarea
                type="text"
                id="description"
                placeholder="Product Description"
                className="form-control"
                {...register("description", { required: true, maxLength: 2000 })}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary mt-3 px-5">Update Product</button>
          </form>
        </div>
      </div>
    )
  };

  //show error msg
  const showError = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  //show success msg
  const showSuccess = () => {
    return (
      <div
        className="alert alert-info"
        style={{ display: createProductName ? "" : "none" }}
      >
        <h3>{`${createProductName} is Updated Successfully`} </h3>
      </div>
    );
  };

  //show loading msg
  const showLoading = () =>
    loading && <div className="alert alert-success">Loading</div>;

    const redirectAdmin = () => {
      if(redirectToProfile) return <Navigate to="/" />
    }

  return (
    <AdminDashBoard>
      {showError()}
      {showSuccess()}
      {showLoading()}
      {redirectAdmin()}
      {updateProductForm()}
    </AdminDashBoard>
  )
}

export default UpdateProduct;