import React from 'react'

const Sction2 = () => {
  return (
    <div className='mt-10'>
         <h2 className='text-6xl font-extrabold text-center mb-5'> Status</h2>
        <div className="stats shadow w-[1300px] items-center flex justify-center mb-10">
       
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title text-2xl font-bold">Books Available</div>
    <div className="stat-value">310</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div className="stat-title text-2xl font-bold">On Borrow</div>
    <div className="stat-value">10</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
</div>
    </div>
  )
}

export default Sction2