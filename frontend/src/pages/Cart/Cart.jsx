import React from 'react'
import QrNavbar from '../../components/QrNavbar'

// import momo from '../../components/image/product/momo1.jpg';
// import pizza from '../../component/image/product/pizza.jpg';
// import Pannir from '../../component/image/product/panner.jpg';
// import tea from '../../component/image/product/blog-img-08.png';


const Cart = ({ carts }) => {
    return (
        <div>
            <QrNavbar />
            <div className="container text-center sm:pb-20 ">
                <div class="h-screen bg-gray-100 pt-10">
                    <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 pb-28">
                        <div class="rounded-lg md:w-2/3">
                        {carts.map((cart) => (
                                <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" key={cart.id}>
                                    <div className="into ml-64 -mt-2 pb-2    font-bold md:hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-7 cursor-pointer duration-150 hover:text-red-500 inset-y-0 right-0">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <img src={cart.photo} alt="product-image" class="w-full rounded-lg sm:w-40" />
                                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                        <div class="mt-5 sm:mt-0">
                                            <h2 class="text-lg font-bold text-gray-900">{cart.name}</h2>
                                            <p class="mt-1 text-xs text-gray-700">product description</p>
                                        </div>
                                        <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                            <div class="flex items-center border-gray-100">
                                                <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                                <input class="h-8 w-8 md:w-12 border bg-white text-center text-xs outline-none" type="number" value={cart.quantity} min="1" />
                                                <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                            </div>
                                            <div class="flex items-center space-x-4">
                                                <p class="text-sm">Rs.{cart.price}</p>
                                                <div className="into ml-72  font-bold hidden md:block">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500 inset-y-0 right-0">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>

                        <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 pb-20">
                            <div class="mb-2 flex justify-between">
                                <p class="text-gray-700">Sub total</p>
                                <p class="text-gray-700">RS.1200</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="text-gray-700">Discount</p>
                                <p class="text-gray-700">4%(Rs.200)</p>
                            </div>
                            <hr class="my-4" />
                            <div class="flex justify-between">
                                <p class="text-lg font-bold">Total</p>
                                <div class="">
                                    <p class="mb-1 text-lg font-bold">RS.200</p>
                                    <p class="text-sm text-gray-700">including VAT</p>
                                </div>
                            </div>
                            <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
