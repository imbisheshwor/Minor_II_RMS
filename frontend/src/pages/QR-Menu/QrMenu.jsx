// import React, { useState } from 'react';
// import Navbar from ';
// import QrNavbar from '../../components/Navbar';
import QrNavbar from '../../components/QrNavbar';
import http from '../../http';
import { useState,useEffect } from 'react';

const QrMenu = ({ product }) => {   
    // const [products, setProducts] = useState([]);
    // useEffect(()=>{
    //     fetch_all_products();
    // },[]);
    
    // const fetch_all_products = () => {
    //     http.get('http://127.0.0.1:8000/api/product').then(res=>{
            
    //         setProducts(res.data);
    //     })
    // }
    
    let data = 0;
    return (
        <div>
            {/* <div className="container mx-auto"> */}
                <QrNavbar />
                <div className="container ext-tcenter sm:pb-20">
                    <div class=" bg-gray-50 pt-10">
                        <h1 class="mb-10 text-center text-2xl font-bold">QR Menu</h1>
                        <div class="mx-auto  max-w-screen-xl justify-center  md:flex md:space-x-6 xl:px-0">
                            <div class="rounded-lg md:w-full  flex flex-wrap pb-12  md:gap-2 md:ml-10">

                                {/* {products['products'].map((prod) => ( */}

                                { product.map((prod) => (
                                    <div class="justify-between mb-8   w-40 ml-2 md:w-2/5 md:ml-10  rounded-lg bg-white px-2 py-4 shadow-md " key = {prod.id}>
                                        <div className="image_container h-32 md:h-72">

                                        <img src={prod.photo} alt={prod.name} class="w-full rounded-xl object-cover h-32 md:h-72" />
                                        </div>
                                        <div class="sm:ml-2  sm:justify-between">
                                            <div class="mt-3 sm:mt-0">
                                                <h2 class="md:text-xl text-xl font-bold text-gray-900">{prod.name}</h2>
                                                <p class="mt-1 text-base font-bold text-gray-700">Rs.{prod.sale_price}</p>
                                            </div>
                                            <div class="mt-2  md:flex  justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6 ">
                                                <div class="flex  md:ml-0 md:mt-5 ml-4 items-center border-gray-100">
                                                    <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                                    <input class="h-8 w-8 md:w-12 border bg-white text-center text-xs outline-none" type="number" value="5" min="1" />
                                                    <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                                </div>
                                                <div class="flex items-center space-x-4">
                                                    <button class="px-2 py-0 mt-3 md:mt-2 ml-4  transition ease-in duration-200 uppercase rounded-xl bg-gray-800 text-white  border-2 border-gray-900 focus:outline-none">Add to cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}




                                {/* <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                <img src={momo} alt="product-image" class="w-full rounded-3xl sm:w-40" />
                                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                    <div class="mt-5 sm:mt-0">
                                        <h2 class="text-xl font-bold text-gray-900">Momo</h2>
                                        <p class="mt-1 text-lg font-bold text-gray-700">Rs.220</p>
                                    </div>
                                    <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                        <div class="flex items-center border-gray-100">
                                            <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                            <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="5" min="1" />
                                            <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                        </div>
                                        <div class="flex items-center space-x-4">
                                        <button class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full bg-gray-800 text-white  border-2 border-gray-900 focus:outline-none">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                                {/* <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                <img src={momo} alt="product-image" class="w-full rounded-3xl sm:w-40" />
                                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                    <div class="mt-5 sm:mt-0">
                                        <h2 class="text-xl font-bold text-gray-900">Momo</h2>
                                        <p class="mt-1 text-lg font-bold text-gray-700">Rs.220</p>
                                    </div>
                                    <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                        <div class="flex items-center border-gray-100">
                                            <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                            <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="5" min="1" />
                                            <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                        </div>
                                        <div class="flex items-center space-x-4">
                                        <button class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full bg-gray-800 text-white  border-2 border-gray-900 focus:outline-none">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                <img src={momo} alt="product-image" class="w-full rounded-3xl sm:w-40" />
                                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                    <div class="mt-5 sm:mt-0">
                                        <h2 class="text-xl font-bold text-gray-900">Momo</h2>
                                        <p class="mt-1 text-lg font-bold text-gray-700">Rs.220</p>
                                    </div>
                                    <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                        <div class="flex items-center border-gray-100">
                                            <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                            <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="5" min="1" />
                                            <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                        </div>
                                        <div class="flex items-center space-x-4">
                                        <button class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full bg-gray-800 text-white  border-2 border-gray-900 focus:outline-none">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                <img src={momo} alt="product-image" class="w-full rounded-3xl sm:w-40" />
                                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                    <div class="mt-5 sm:mt-0">
                                        <h2 class="text-xl font-bold text-gray-900">Momo</h2>
                                        <p class="mt-1 text-lg font-bold text-gray-700">Rs.220</p>
                                    </div>
                                    <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                        <div class="flex items-center border-gray-100">
                                            <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                            <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="5" min="1" />
                                            <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                        </div>
                                        <div class="flex items-center space-x-4">
                                        <button class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full bg-gray-800 text-white  border-2 border-gray-900 focus:outline-none">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                <img src={momo} alt="product-image" class="w-full rounded-3xl sm:w-40" />
                                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                    <div class="mt-5 sm:mt-0">
                                        <h2 class="text-xl font-bold text-gray-900">Momo</h2>
                                        <p class="mt-1 text-lg font-bold text-gray-700">Rs.220</p>
                                    </div>
                                    <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                        <div class="flex items-center border-gray-100">
                                            <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                            <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="5" min="1" />
                                            <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                        </div>
                                        <div class="flex items-center space-x-4">
                                        <button class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full bg-gray-800 text-white  border-2 border-gray-900 focus:outline-none">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            </div>


                        </div>
                    </div>
                </div>
            </div>


        // </div>
    );


    function increment() {

        data = parseInt(document.getElementById("counting").value);
        data = data + 1;
        console.log(data);
        document.getElementById("counting").value = data;

    }
    function decrement() {
        data = parseInt(document.getElementById("counting").value);
        if (data > 0) {
            data = data - 1;
            document.getElementById("counting").value = data;
        }
    }
}

export default QrMenu
