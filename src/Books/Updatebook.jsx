import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Updatebook = () => {
    const data = useLoaderData()
    const params = useParams();
    const mainData = data.filter(ids => ids._id === params.id)
    console.log(mainData[0])
    

const handleUpdate = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const author = form.author.value;
  const data = {
    name,image,author,rating,category
  }
  fetch(`http://localhost:5000/update/${mainData[0]._id}`,{
    method:"PUT",
    headers:{
      "content-type": "application/json"
    },
    body: JSON.stringify(data)
  });
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Book Updated successfully",
    showConfirmButton: false,
    timer: 1500
  });
  e.target.reset()
}

  return (
    <div>
         <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Update Book</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleUpdate}  className="card-body">
              <div className="flex gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                  defaultValue={mainData[0].image}
                  id= "image"
                    type="Text"
                    placeholder="Book image"
                    className="input input-bordered"
                
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                  defaultValue={mainData[0].name}
                  id = "name"
                    type="Text"
                    placeholder="Book name"
                    className="input input-bordered"
                    
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  {/* <input type="Text" placeholder="Brand name" className="input input-bordered" required /> */}
                  <select defaultValue={mainData[0].category} id = "category" className="select select-bordered w-full max-w-xs">
                    <option disabled>
                     Categoty
                    </option>
                    <option>Science Fiction</option>
                    <option>Romance</option>
                    <option>Historical Fiction</option>
                    <option>Thriller</option>
                    <option>Non-Fiction</option>
                    <option>Fantasy</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Author</span>
                  </label>
                  {/* <input
                    type="Text"
                    placeholder="Product type"
                    className="input input-bordered"
                    required
                  /> */}
                  <input
                  defaultValue={mainData[0].author}
                  id = "author"
                    type="Text"
                    placeholder="Author name"
                    className="input input-bordered"
                    
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                  defaultValue={mainData[0].rating}
                  id = "rating"
                    type="Text"
                    placeholder="Book rating"
                    className="input input-bordered"
                    
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-success">Update book</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Updatebook