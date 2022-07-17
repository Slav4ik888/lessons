import React from 'react';


function PageWrap({ children }: { children: React.ReactNode }) {

  return (
    <div className='flex direction-column justify-center pt-10 mx-auto h-screen w-screen'>
      {
        children
      }
    </div>
  )
}

export default PageWrap;
