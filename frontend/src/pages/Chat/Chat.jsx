import React from 'react'
import Navbar from '../../components/QrNavbar';
import logo from '../../components/image/logo/primary-1.png'
import SentimentSatisfiedTwoToneIcon from '@mui/icons-material/SentimentSatisfiedTwoTone';
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import CameraAltTwoToneIcon from '@mui/icons-material/CameraAltTwoTone';
import KeyboardVoiceTwoToneIcon from '@mui/icons-material/KeyboardVoiceTwoTone';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Chat = ({ message }) => {
    return (
        <div classNameName='w-full'>
            <Navbar />

            <div classNameName=" ">
                <div className=" bg-gray-300  pb-0 md:px-2">
                    <div className="flex justify-center text-left  h-4/5 ">
                        <div className="md:w-80 w-full h-4/5 bg-white rounded shadow-2xl pb-5">
                            <nav className="w-full h-10 bg-gray-900 rounded-tr rounded-tl flex justify-between items-center">
                                <div className="flex justify-center items-center">
                                    <i className="mdi mdi-arrow-left font-normal text-gray-300 ml-1"></i>
                                    <img src={logo} className="rounded-full ml-1" width="35" height="25" />
                                    <span className="text-xs font-medium text-gray-300 ml-3">RMS  Admin</span>
                                </div>
                                <div className="flex items-center">
                                    {/* <i className="mdi mdi-video text-gray-300 mr-4"></i> */}
                                    < VideocamIcon classNameName=" text-gray-300 mr-2" />
                                    <CallIcon classNameName='text-gray-300 mr-2' />
                                    {/* <i className="mdi mdi-dots-vertical text-gray-300 mr-2"></i> */}
                                    <MoreVertIcon classNameName='text-gray-300 mr-2' />
                                </div>
                            </nav>
                            <div className="overflow-auto px-2 py-5" style={{ height: '33rem' }} id="journal-scroll">
                                {message.map((msg) => (
                                    <>


                                       {msg.type === "customer"}{
                                            <div className="flex items-center pr-1 pt-2 0">
                                                <img src={logo} className="rounded-full shadow-xl" width="25" height="25" />
                                                <span className="flex ml-1  h-auto bg-gray-900 text-gray-200 text-xs font-normal  py-2 px-3 items-end rounded-full" style={{ fontSize: '10px' }}>{msg.message}<span className="text-gray-400 pl-1" style={{ fontSize: '8px' }}>01:25am</span></span>
                                            </div>
                                        }{
                                            <div className="flex justify-end pt-2 pl-10">
                                                <span className="bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-full py-2  px-3 items-end flex justify-end " style={{ fontSize: '10px' }}>{msg.message}<span className="text-gray-400 pl-1" style={{ fontSize: '8px' }}>02.30am</span></span>

                                            </div>
                                        }



                                    </>
                                ))}



                                





                                <div className=" " id="chatmsg">

                                </div>

                            </div>




                            <div className="flex justify-between items-center ">
                                <div className="relative flex bg-gray-900 rounded-full  py-1 px-2 mt-2 md:px-2 md:py-2 md:mt-0 ">
                                  
                                    <SentimentSatisfiedTwoToneIcon classNameName='md:absolute md:top-1 md:left-1 pt-2 md:mt-2 md:ml-2 text-gray-400' />
                                    <input type="text" className="rounded-full  md:pl-9  pl-4 pr-12 py-2 outline-none focus:outline-none break-all  h-auto placeholder-gray-100 bg-gray-900 text-white w-[240px]  md:w-[230px]" style={{ fontSize: '12px' }} placeholder="Type a message..." id="typemsg" />
                                   
                                </div>
                                <div className="w-9 md:w-7 md:h-7 h-9 rounded-full bg-blue-300 text-center items-center flex justify-center hover:bg-gray-900 hover:text-white">
                                    <KeyboardVoiceTwoToneIcon />
                                </div>
                                <div className="w-9 h-9 md:w-7 md:h-7 rounded-full bg-blue-300 text-center items-center flex justify-center" >
                                    <Link className="w-7 h-7 rounded-full text-center items-center flex justify-center focus:outline-none hover:bg-gray-900 hover:text-white" > <SendTwoToneIcon /> </Link>
                                </div>

                            </div>





                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Chat
