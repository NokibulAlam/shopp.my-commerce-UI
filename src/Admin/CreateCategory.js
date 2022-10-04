import React, {useState} from 'react'
import { useForm } from 'react-hook-form'


// Import Admin DashBoard
import AdminDashBoard from '../User/AdminDashBoard';

// Import API
import { isAuthenticate } from '../Auth/index'; 
import { createCategory } from './AdminApi';

const CreateCategory = () => {
    let [error, setError] = useState(0);
    let [success, setSuccess] = useState(0);

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const {user, token} = isAuthenticate();

    const submitHandler = (category) => {
        createCategory(user._id, token, category)
            .then((data) => {
                if(data.error){
                    setError(data.error);
                    setSuccess(0);
                }
                else{
                    setSuccess(1);
                    setError(0);
                    setValue("name", "", {shouldValidate: false});
                }
            });
    };

    const categoryForm = () => {
        return (
            <div>
                <h2>Create Category</h2>
                <div>
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <div className='form-group'>
                            <label htmlFor='category' className='text-muted mt-2 mb-3'><strong>Category Name</strong><span className='err'>{errors.name && "This Field is Required"}</span></label>
                            <input type="text" className="form-control" placeholder="Enter Category Name" name='name' id='name' {...register("name", { required: true })} />
                        </div>
                        <button type="submit" className="btn btn-outline-primary mt-3 px-5">Create</button>
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
        style={{ display: success ? "" : "none" }}
      >
        Category Create Successfuly
      </div>
    );
  };

    return (
        <AdminDashBoard>
            {showError()}
            {showSuccess()}
            {categoryForm()}
        </AdminDashBoard>
    )
}

export default CreateCategory;