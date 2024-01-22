import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/Context';

const Details = () => {
  const {user} = useContext(AuthContext)
  const loader = useLoaderData();
    const email = user.email
    const name1 = loader[0].name
    const category = loader[0].category
   const {name,author,description,rating,quantity,image} = loader[0] || {}

   const handleBorrow = async () => {
    const { value: date } = await Swal.fire({
      title: "Select return date",
      input: "date",
      confirmButtonText: "Submit",
      didOpen: () => {
        const today = (new Date()).toISOString();
        Swal.getInput().min = today.split("T")[0];
      }
    });
    if (date) {
      Swal.fire("Return date", date);
    }
  const borrow = {email,name1,date,category}
    fetch("http://localhost:5000/borrow",{
      method:"POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(borrow)
    })
    .then(res => res.json())
    .then(data => console.log(data))

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Borrow confirm",
      showConfirmButton: false,
      timer: 1500
    });
   }

  return (
    <div>
    <Card className="w-full mt-20 max-w-[1200px] mx-auto ">
      <CardHeader floated={false} color="blue-gray">
        <img className='w-full h-[500px] mb-5'
          src={image}
          alt="ui/ux review check"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        
      </CardHeader>
      <CardBody>
        <div className="mb-1 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-bold mt-4 text-lg">
            {name}
          </Typography>
          
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
           {rating}
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray" className="font-bold mt-1 text-lg">
            {author}
          </Typography>
        <Typography className='text-lg font-bold mb-4'>
        Quantity: {quantity}
        </Typography>
        <Typography className='text-lg font-semibold' color="gray">
         {description}
        </Typography>
        
        
      </CardBody>
      <CardFooter className="pt-3">
        <div className='flex justify-center gap-5 m-10 hover:bg-slate-200 '>
            <button id='borrowbtn' onClick={handleBorrow} className='btn bg-green-500 text-center font-medium'>Borrow</button>
            <button className='btn bg-yellow-400 text-center font-medium'>Read</button>
        </div>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Details