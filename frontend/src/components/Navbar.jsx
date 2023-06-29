import React from 'react'
import logo from './image/logo/primary-1.png'
import { Link } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
const Navbar = () => {
    return (
        <div className='navigation max-w-screen-2xl'>

             <div className="top_navigation ">
                <nav class="bg-white border-gray-200 dark:bg-gray-900">
                    <div class=" flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link to="/qrmenu" class="flex items-center no-underline">
                            <img src={logo} class="h-8 mr-3" alt="Flowbite Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap  dark:text-white text-orange-700 ">RMS</span>
                        </Link>
                       
                        <div className="right">
                            <p className="table-no font-bold text-blue-900 md:hidden">Table: 5</p>
                        </div>
                       

                        <div className=" w-full hidden md:block text-gray-500 mr-10">
                        <ul className='font-semibold md:flex md:gap-x-10 float-right decoration-current text-2xl -mt-10 p-4  rounded-lg  md:flex-row  md:border-0 '>
                          <li>
                            <Link to={"/qrmenu"} className='no-underline text-gray-900  hover:text-orange-600'>Menu</Link>
                          </li>
                          <li>
                            <Link to={"cart"} className="no-underline text-gray-900 hover:text-orange-600">Cart</Link>
                          </li>
                          <li>
                            <Link to={"bill"} className="no-underline text-gray-900 hover:text-orange-600">Bills</Link>
                          </li>
                          <li>
                            <Link to={"message"} className="no-underline text-gray-900 hover:text-orange-600">Message</Link>
                          </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="buttom_navigation md:hidden">
                <div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                    <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                        <Link to='/qrmenu' type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                            <MenuBookIcon/>
                            <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Menu</span>
                        </Link>
                        <Link to='qrmenu/cart' type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                            <AddShoppingCartIcon className='hover:text-blue-600'/>
                            <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Cart</span>
                        </Link>
                        <Link to="bill" type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                            <ReceiptIcon/>
                            <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Bills</span>
                        </Link>
                        <Link to="qr-message" type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                            <ChatBubbleOutlineOutlinedIcon/>
                            <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Message</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar
