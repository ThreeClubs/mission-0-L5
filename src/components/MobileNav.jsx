import React from 'react'

function MobileNav({visible, navToLogin}) {

    if (!visible) return null;

  const handleNavToLogin = (e) => {
    navToLogin();
  };

  return (
    <div className=" fixed inset-0 bg-opacity-50 backdrop-blur-sm bg-gray-900 flex">
        <nav className="w-full pt-2 border-t-2 border-amber-400 sm:hidden">
        <ul className="flex flex-col -mb-6 mx-2">
       <li className="px-4 py-2 text-amber-500 bg-blue-700 flex justify-center items-center border-2 m-1 border-blue-700 font-bold active:bg-blue-600 active:border-amber-400">
         Home
       </li>
       <li className="px-4 py-2 text-amber-500 bg-blue-700 flex justify-center items-center border-2 m-1 border-blue-700 font-bold active:bg-blue-600 active:border-amber-400">
         About
       </li>
       <li className="px-4 py-2 text-amber-500 bg-blue-700 flex justify-center items-center border-2 m-1 border-blue-700 font-bold active:bg-blue-600 active:border-amber-400">
         Contact Us
       </li>
     </ul>
     <button onClick={handleNavToLogin}>Login</button>
   </nav>
    </div>
     
  )
}

export default MobileNav