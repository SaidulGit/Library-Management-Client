import React from 'react'
import Swal from 'sweetalert2';

const AddBooks = () => {
  

const handleAdd = (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const image = form.image.value;
  const description = form.description.value;
  const rating = form.rating.value;
  const quantity = form.quantity.value;
  const category = form.category.value;
  const author = form.author.value;
const data = {
  name,image,author,description,rating,quantity,category
}
fetch("https://library-server-seven.vercel.app/add",{
  method:"POST",
  headers:{
    "content-type": "application/json"
  },
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(data=> console.log(data))
Swal.fire({
  position: "center",
  icon: "success",
  title: "Book Added",
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
            <h1 className="text-5xl font-bold">Add Book</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleAdd}   className="card-body">
              <div className="flex gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                  id= "image"
                    type="Text"
                    placeholder="Book image"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                  id = "name"
                    type="Text"
                    placeholder="Book name"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  {/* <input type="Text" placeholder="Brand name" className="input input-bordered" required /> */}
                  <select id = "category" className="select select-bordered w-full max-w-xs">
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
                  id = "author"
                    type="Text"
                    placeholder="Author name"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input
                  id ="quantity"
                    type="Text"
                    placeholder="Quantity of book"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                  id = "rating"
                    type="Text"
                    placeholder="Book rating"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
                id = "description"
                  type="Text"
                  placeholder="Short Description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-warning">Add book</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBooks