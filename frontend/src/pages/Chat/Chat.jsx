import React from 'react'
import Navbar from '../../components/Navbar';
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
        <div>
            <Navbar />

            <div className="container ">
                <div class=" bg-gray-300  pb-0 md:px-2">
                    <div class="flex justify-center text-left  h-4/5 ">
                        <div class="md:w-80 w-full h-4/5 bg-white rounded shadow-2xl pb-5">
                            <nav class="w-full h-10 bg-gray-900 rounded-tr rounded-tl flex justify-between items-center">
                                <div class="flex justify-center items-center">
                                    <i class="mdi mdi-arrow-left font-normal text-gray-300 ml-1"></i>
                                    <img src={logo} class="rounded-full ml-1" width="35" height="25" />
                                    <span class="text-xs font-medium text-gray-300 ml-3">RMS  Admin</span>
                                </div>
                                <div class="flex items-center">
                                    {/* <i class="mdi mdi-video text-gray-300 mr-4"></i> */}
                                    < VideocamIcon className=" text-gray-300 mr-2" />
                                    <CallIcon className='text-gray-300 mr-2' />
                                    {/* <i class="mdi mdi-dots-vertical text-gray-300 mr-2"></i> */}
                                    <MoreVertIcon className='text-gray-300 mr-2' />
                                </div>
                            </nav>
                            <div class="overflow-auto px-2 py-5" style={{ height: '33rem' }} id="journal-scroll">
                                {message.map((msg) => (
                                    <>


                                       {msg.type === "customer"}{
                                            <div class="flex items-center pr-10">
                                                <img src={logo} class="rounded-full shadow-xl" width="25" height="25" />
                                                <span class="flex ml-1  h-auto bg-gray-900 text-gray-200 text-xs font-normal  py-2 px-3 items-end rounded-full" style={{ fontSize: '10px' }}>{msg.message}<span class="text-gray-400 pl-1" style={{ fontSize: '8px' }}>01:25am</span></span>
                                            </div>
                                        }{
                                            <div class="flex justify-end pt-2 pl-10">
                                                <span class="bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-full py-2  px-3 items-end flex justify-end " style={{ fontSize: '10px' }}>{msg.message}<span class="text-gray-400 pl-1" style={{ fontSize: '8px' }}>02.30am</span></span>

                                            </div>
                                        }



                                    </>
                                ))}



                                {/* <div class="flex justify-center">
                                    <span class="text-gray-500 text-xs pt-4" style={{ fontSize: '8px' }}>Call started at 02:33 am</span>
                                </div>
                                <div class="flex justify-center">
                                    <span class="text-gray-500 text-xs" style={{ fontSize: '8px' }}>Call ended at 02:33 am</span>
                                </div>


                                <div class="flex items-center pr-10 mt-1">
                                    <img src={logo} class="rounded-full shadow-xl" width="25" height="25" />
                                    <span class="flex ml-1  h-auto bg-gray-900 text-gray-200 text-xs font-normal  py-2 px-3 items-end rounded-full" style={{ fontSize: '10px' }}>How often should i take the medicine? <span class="text-gray-400 pl-1" style={{ fontSize: '8px' }}>01:25am</span></span>

                                </div>



                                <div class="flex justify-end pt-2 pl-10">
                                    <span class="bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-full py-2  px-3 items-end flex justify-end " style={{ fontSize: '10px' }}>Twice a day, at breakfast and before bed <span class="text-gray-400 pl-1" style={{ fontSize: '8px' }}>02.30am</span></span>

                                </div> */}


{/* 

                                <div class="flex items-center pr-10 pt-2">
                                    <img src={logo} class="rounded-full shadow-xl" width="25" height="25" />
                                    <span class="flex ml-1  h-auto bg-gray-900 text-gray-200 text-xs font-normal  py-2 px-3 items-end rounded-full" style={{ fontSize: '10px' }}>Thanks a lot doc<span class="text-gray-400 pl-1" style={{ fontSize: '8px' }}>01:25am</span></span>

                                </div>



                                <div class="flex justify-end pt-2 pl-10">
                                    <span class="bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-full py-2  px-3 items-end flex justify-end " style={{ fontSize: '10px' }}>Thats my duty, mention not  <span class="text-gray-400 pl-1" style={{ fontSize: '8px' }}>02.30am</span></span>

                                </div>



                                <div class="flex items-center pr-10 pt-2">
                                    <img src={logo} class="rounded-full shadow-xl" width="25" height="25" />
                                    <span class="flex ml-1  h-auto bg-gray-900 text-gray-200 text-xs font-normal  py-2 px-3 items-end rounded-full" style={{ fontSize: '10px' }}>sorry to bother again but can i ask you one more favour?<span class="text-gray-400 pl-1" style={{ fontSize: '8px' }}>01:25am</span></span>

                                </div>


                                <div class="flex justify-end pt-2 pl-10">
                                    <span class="bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-full py-2  px-3 items-end flex justify-end " style={{ fontSize: '10px' }}>yeah sure, go ahead?<span class="text-gray-400 pl-1" style={{ fontSize: '8px' }}>02.30am</span></span>

                                </div>



                                <div class="flex items-center pr-10 pt-2">
                                    <img src={logo} class="rounded-full shadow-xl" width="25" height="25" />
                                    <span class="flex ml-1  h-auto bg-gray-900 text-gray-200 text-xs font-normal  py-2 px-3 items-end rounded-full" style={{ fontSize: '10px' }}>I really had a scary feeling about this, can please advice some tricks to overcome my anxiety?<span class="text-gray-400 pl-1" style={{ fontSize: '8px' }}>01:25am</span></span>

                                </div>
                                <div class="flex justify-end pt-2 pl-10">
                                    <span class="bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-full py-2  px-3 items-end flex justify-end " style={{ fontSize: '10px' }}>Thats my duty, mention not  <span class="text-gray-400 pl-1" style={{ fontSize: '8px' }}>02.30am</span></span>

                                </div>



                                <div class="flex items-center pr-10 pt-2">
                                    <img src={logo} class="rounded-full shadow-xl" width="25" height="25" />
                                    <span class="flex ml-1  h-auto bg-gray-900 text-gray-200 text-xs font-normal  py-2 px-3 items-end rounded-full" style={{ fontSize: '10px' }}>sorry to bother again but can i ask you one more favour?<span class="text-gray-400 pl-1" style={{ fontSize: '8px' }}>01:25am</span></span>

                                </div>


                                <div class="flex justify-end pt-2 pl-10">
                                    <span class="bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-full py-2  px-3 items-end flex justify-end " style={{ fontSize: '10px' }}>yeah sure, go ahead?<span class="text-gray-400 pl-1" style={{ fontSize: '8px' }}>02.30am</span></span>

                                </div>



                                <div class="flex items-center pr-10 pt-2">
                                    <img src={logo} class="rounded-full shadow-xl" width="25" height="25" />
                                    <span class="flex ml-1  h-auto bg-gray-900 text-gray-200 text-xs font-normal  py-2 px-3 items-end rounded-full" style={{ fontSize: '10px' }}>I really had a scary feeling about this, can please advice some tricks to overcome my anxiety?<span class="text-gray-400 pl-1" style={{ fontSize: '8px' }}>01:25am</span></span>

                                </div>
                                <div class="flex justify-end pt-2 pl-10">
                                    <span class="bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-full py-2  px-3 items-end flex justify-end " style={{ fontSize: '10px' }}>Thats my duty, mention not  <span class="text-gray-400 pl-1" style={{ fontSize: '8px' }}>02.30am</span></span>

                                </div>



                                <div class="flex items-center pr-10 pt-2 rounded-full">
                                    <img src={logo} class="rounded-full shadow-xl" width="25" height="25" />
                                    <span class="flex ml-1  h-auto bg-gray-900 text-gray-200 text-xs font-normal  py-2 px-3 items-end rounded-full" style={{ fontSize: '10px' }}>sorry to bother again but can i ask you one more favour?<span class="text-gray-400 pl-1" style={{ fontSize: '8px' }}>01:25am</span></span>

                                </div>


                                <div class="flex justify-end pt-2 pl-10">
                                    <span class="bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-full py-2  px-3 items-end flex justify-end " style={{ fontSize: '12px' }}>yeah sure, go ahead?<span class="text-gray-400 pl-1" style={{ fontSize: '8px' }}>02.30am</span></span>

                                </div>



                                <div class="flex items-center pr-10 pt-2">
                                    <img src={logo} class="rounded-full shadow-xl" width="25" height="25" />
                                    <span class="flex ml-1  h-auto bg-gray-900 text-gray-200 text-xs font-normal  py-2 px-3 items-end rounded-full" style={{ fontSize: '12px' }}>I really had a scary feeling about this, can please advice some tricks to overcome my anxiety?<span class="text-gray-400 pl-1" style={{ fontSize: '8px' }}>01:25am</span></span>

                                </div>

                                <div class="flex justify-end pt-2 pl-10">
                                    <span class="bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-full py-2  px-3 items-end flex justify-end " style={{ fontSize: '12px' }}>I really had a scary feeling about this, can please advice some tricks to overcome my anxiety?
                                        <span class="text-gray-400 pl-1" style={{ fontSize: '8px' }}>02.30am</span></span>

                                </div> */}





                                <div class=" " id="chatmsg">

                                </div>

                            </div>




                            <div class="flex gap-1 justify-between items-center p-1 ">
                                <div class="relative bg-gray-900 rounded-full  py-1 px-2 mt-2 md:px-2 md:py-2 md:mt-0 ">
                                    {/* <i class="mdi mdi-emoticon-excited-outline absolute top-1 left-1 text-gray-400" style={{ fontSize: '17px !important', fontWeight: 'bold' }}></i> */}
                                    {/* <i class="mdi mdi-paperclip absolute right-8 top-1 transform -rotate-45 text-gray-400"></i> */}
                                    {/* <i class="mdi mdi-camera absolute right-2 top-1 text-gray-400"></i> */}
                                    <SentimentSatisfiedTwoToneIcon className='md:absolute md:top-1 md:left-1 md:mt-2 md:ml-2 text-gray-400' />
                                    <input type="text" class="rounded-full  md:pl-9  pl-4 pr-12 py-2 outline-none focus:outline-none break-all  h-auto placeholder-gray-100 bg-gray-900 text-white w-[240px]  md:w-[230px]" style={{ fontSize: '12px' }} placeholder="Type a message..." id="typemsg" />
                                    {/* <CameraAltTwoToneIcon className='md:absolute md:right-2 md:top-1 text-gray-400' /> */}
                                    {/* <AttachFileTwoToneIcon className='md:absolute md:right-8 md:top-1 transform -rotate-45 text-gray-400' /> */}
                                </div>
                                <div
                                    class="w-9 md:w-7 md:h-7 h-9 rounded-full bg-blue-300 text-center items-center flex justify-center hover:bg-gray-900 hover:text-white">
                                    {/* <i class="mdi mdi-microphone "></i> */}
                                    <KeyboardVoiceTwoToneIcon />
                                </div>
                                <div class="w-9 h-9 md:w-7 md:h-7 rounded-full bg-blue-300 text-center items-center flex justify-center" >
                                    {/* <button class="w-7 h-7 rounded-full text-center items-center flex justify-center focus:outline-none hover:bg-gray-900 hover:text-white" onclick="sendbtn();"> <SendTwoToneIcon/> </button> */}
                                    <Link class="w-7 h-7 rounded-full text-center items-center flex justify-center focus:outline-none hover:bg-gray-900 hover:text-white" > <SendTwoToneIcon /> </Link>
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
