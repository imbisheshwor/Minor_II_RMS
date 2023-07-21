// import React, { useState } from 'react';
// import Navbar from ';
// import QrNavbar from '../../components/Navbar';
import QrNavbar from '../../components/QrNavbar';
// import http from '../../http';
import AuthUser from '../../AuthUser';
import { useState,useEffect } from 'react';

const QrMenu = ({ product }) => {   
    
    
    let data = 0;
    let newData ;
    return (
        <div>
            {/* <div className="container mx-auto"> */}
                <QrNavbar />
                <div className="container text-center sm:pb-20">
                    <div class=" bg-gray-50 pt-10">
                        <h1 class="mb-10 text-center text-2xl font-bold">QR Menu</h1>
                        <div class="mx-auto  max-w-screen-xl justify-center  md:flex md:space-x-6 xl:px-0">
                            <div class="rounded-lg md:w-full  flex gap-x-2  flex-wrap pb-12  md:gap-2 md:ml-10">
                                


                                { product.map((prod) => (
                                    <div class="justify-between mb-8   w-36  md:w-2/5 md:ml-10  rounded-lg bg-white px-2 py-4 shadow-md " key = {prod.id}>
                                        <div className="image_container h-32 md:h-72">

                                        <img src={prod.photo} alt={prod.name} class="w-full rounded-xl object-cover h-32 md:h-72" />
                                        </div>
                                        <div class="sm:ml-2  sm:justify-between">
                                            <div class="mt-3 sm:mt-0">
                                                <h2 class="md:text-xl text-xl font-bold text-gray-900">{prod.name}</h2>
                                                <p class="mt-1 text-base font-bold text-gray-700">Rs.{prod.sale_price}</p>
                                            </div>
                                            <div class="mt-2  md:flex  justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6 ">
                                                <div class="flex  md:ml-0 md:gap-x-2 md:mt-5 ml-4 items-center border-gray-100">
                                                    <button class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={decrement} > - </button>
                                                    {/* <input class="h-8 w-4 md:w-12 border bg-white text-center text-xs outline-none" type="number" value="1" min="1" id="counting"/> */}
                                                    <input type='number' className='h-8 w-4 md:w-12 border bg-white text-center text-xs outline-none' id='counting' value={1}/>
                                                    <button class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={increment} > + </button>
                                                </div>
                                                <div class="flex items-center space-x-4">
                                                    <button class="px-2 py-0 mt-3 md:mt-2 ml-4  transition ease-in duration-200 uppercase rounded-xl bg-gray-800 text-white  border-2 border-gray-900 focus:outline-none">Add to cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}




                            </div>


                        </div>
                    </div>
                </div>
            </div>


    );


    function increment() {

        data = parseInt(document.getElementById("counting").value);
        newData = data + 1;
        document.getElementById("counting").value = newData;
    }
    function decrement() {
        data = parseInt(document.getElementById("counting").value);
        if (data > 0) {
            newData = data - 1;
        }
        document.getElementById("counting").value = newData;
       
    }
}

export default QrMenu
