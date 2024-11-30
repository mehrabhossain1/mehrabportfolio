"use client";
import React, { useEffect } from "react";

const Loader = ({ isLoading, loading }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      isLoading(false);
    }, 100);

    return () => clearTimeout(timeout);
  }, [loading, isLoading]);

  return (
    <div>
      {loading && (
        <div className="fixed h-svh w-svw bg-green-200/5 flex items-center justify-center">
          <h1 className="text-4xl font-bold">Loading.....</h1>
        </div>
      )}
    </div>
  );
};

export default Loader;

{
  /* <div>
{loading && (
  <div className='text-white h-screen w-screen bg-green-500/5 z-[999999999] text-4xl relative'>
   <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-1/2'> Loading.....</h1>
  </div>
)}
</div> */
}
