import React, { useEffect, useState } from 'react'
import myimg from '../../assets/myim.png'
import Postsection from '../Postssection/Postsection'
import net from '../../assets/twi1.mp4'
import trail from '../../assets/trailo2.mp4'
import spiderman from '../../assets/Spider-Man _ Free Download, Borrow, and Streaming _ Internet Archive and 7 more pages - Personal - Microsoft​ Edge 2024-01-29 16-16-18.mp4'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import bluetick from '../../assets/bluetick.png'
import banner from '../../assets/Black Modern Personal LinkedIn Banner (1).png'
import Loadingscreen from '../Loadingscreen/Loadingscreen'
import Contact from '../Contactus/Contactus'
const Centersection = () => {
    const [loader, setloader] = useState(true)
    const location = useLocation()
    const navigate = useNavigate()
    const [text, settext] = useState('')

    const handleinput = (e) => {
        const textarea = e.target
        textarea.style.height = "auto"
        textarea.style.height = textarea.scrollHeight + "px"
        settext(textarea.value)
    }
    const maxLength = 280;
    const progress = (text.length / maxLength) * 100;
    const skilldata = [
        { id: 1, linnk: 'https://cdn0.iconfinder.com/data/icons/social-network-9/50/22-1024.png', title: 'HTML' },
        { id: 2, linnk: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png', title: 'CSS' },
        { id: 3, linnk: 'https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png', title: 'JS' },
        { id: 4, linnk: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png', title: 'Tailwind CSS' },
        { id: 5, linnk: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png', title: 'React JS' },
        { id: 6, linnk: 'https://pluspng.com/img-png/firebase-logo-png-firebase-google-icon-512x512.png', title: 'Firebase' },
        { id: 7, linnk: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-1024.png', title: 'Python' },
        { id: 8, linnk: 'https://seeklogo.com/images/G/greensock-gsap-icon-logo-13BB451E88-seeklogo.com.png', title: 'GSAP' },
        { id: 9, linnk: 'https://cdn-icons-png.flaticon.com/512/4492/4492311.png', title: 'SQL' }

    ]
    const educationdata = [
        { id: 1, title: 'Completed 10th in 2021' },
        { id: 2, title: 'Completed Diploma in Civil Engineering in 2024' },
        { id: 3, title: 'Pursuing Btech in Computer Science ' },



    ]
    useEffect(() => {
        const timer = setTimeout(() => {
            setloader(false)
        }, 1000);
        return () => clearTimeout(timer)
    }, [])


    return (
        <div>
            {
                location.pathname === '/home' ? (
                    <div className='pb-20 sm:pb-1' >
                        <div className='flex flex-col  text-white border-b-[0.5px] border-zinc-700 sticky top-0  backdrop-blur-lg z-50 border-l-[0.5px] border-r-[0.5px]' >
                            <div className='flex sm:hidden items-center justify-between p-2 border-r-[0.5px] border-zinc-700 border-l-[0.5px] ' >
                                <img src={myimg} className='w-12 h-12 rounded-full' alt="" />
                                <img onClick={() => navigate('/home')} className='w-16 h-16 rounded-full ml-3' src="https://static.vecteezy.com/system/resources/thumbnails/031/737/206/small_2x/twitter-new-logo-twitter-icons-new-twitter-logo-x-2023-x-social-media-icon-free-png.png" alt="" />
                                <p className='border-zinc-600 text-white p-1 px-2 border rounded-full text-center cursor-pointer' >Upgrade</p>
                            </div>
                            <div className='flex items-center justify-between text-white border-b-[0.5px] border-zinc-700 sticky top-0  backdrop-blur-lg z-50 border-l-[0.5px] border-r-[0.5px]' >

                                <div className='cursor-pointer hover:bg-[#18181b8c] w-1/2 p-2 py-3' >
                                    <h4 className='text-white text-center underline decoration-sky-600 decoration-4 underline-offset-8 ' >For you</h4>
                                </div>
                                <div className='cursor-pointer hover:bg-[#18181b8c] w-1/2 p-2 py-3' >
                                    <h4 className='text-zinc-400 text-center  decoration-sky-600 decoration-4 underline-offset-8 ' >Following</h4>
                                </div>

                            </div>
                        </div>

                        <div className='border-l-[0.5px] border-r-[0.5px] border-zinc-700' >
                            <div className='flex w-full flex-col  items-start justify-around p-4 border-b-[0.5px] border-zinc-700' >
                                <div className='flex w-full   items-start justify-around p-4' >
                                    <img className='w-16 h-16 rounded-full' src={myimg} alt="" />
                                    <textarea max className='placeholder-zinc-600 bg-transparent resize-none w-full p-2 border-none outline-none  text-white text-lg' onInput={handleinput} style={{ height: 'auto', minHeight: '40px' }} value={text} placeholder='What is happening?!' maxLength={280}> </textarea>
                                </div>
                                <div className='h-[0.5px] bg-zinc-700 w-full' ></div>
                                {
                                    text ? (
                                        <div className='flex items-center justify-end w-full mt-2' >
                                            {

                                                text.length >= 275 ? (
                                                    <div
                                                        className='relative flex items-center justify-center w-10 h-10 rounded-full bg-zinc-600 transition-all duration-300'
                                                        style={{
                                                            background: `conic-gradient(
red ${progress}%, 
#374151 ${progress}%
)`
                                                        }}
                                                    >
                                                        <div className='absolute bg-zinc-900 w-8 h-8 rounded-full flex items-center justify-center'>
                                                            {
                                                                text.length >= 275 ? <p className='text-red-600 text-[15px] text-center'>{text.length} </p> :
                                                                    text.length >= 270 ? <p className='text-yellow-600'>{text.length} </p> : <p className='text-white'>{text.length} </p>
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                                    : text.length >= 260 ? (
                                                        <div
                                                            className='relative flex items-center justify-center w-10 h-10 rounded-full bg-zinc-600 transition-all duration-300'
                                                            style={{
                                                                background: `conic-gradient(
#C7D13F ${progress}%, 
#374151 ${progress}%
)`
                                                            }}
                                                        >
                                                            <div className='absolute bg-zinc-900 w-8 h-8 rounded-full flex items-center justify-center'>
                                                                {
                                                                    text.length >= 275 ? <p className='text-red-600'>{text.length} </p> :
                                                                        text.length >= 260 ? <p className='text-zinc-600 text-[15px] text-center'>{text.length} </p> : <p className='text-white'>{text.length} </p>
                                                                }
                                                            </div>
                                                        </div>
                                                    ) :
                                                        <div
                                                            className='relative flex items-center justify-center w-8 h-8 rounded-full bg-zinc-600 transition-all duration-300'
                                                            style={{
                                                                background: `conic-gradient(
 #0485D5 ${progress}%, 
#374151 ${progress}%
)`
                                                            }}
                                                        >
                                                            <div className='absolute bg-zinc-900 w-6 h-6 rounded-full'>

                                                            </div>
                                                        </div>

                                            }



                                        </div>
                                    ) : null
                                }

                            </div>

                        </div>
                        <div className='border-l-[0.5px] border-r-[0.5px] border-zinc-700' >
                            <Postsection videor={net} twit={'This is my Image Searching app AUDOBO.'} linku={'https://audobo.netlify.app/'} />
                            <Postsection videor={trail} twit={'This is my Recipe app to show and search Recipes [FOODOO].'} linku={'https://fooodoo.netlify.app/'} />
                            <Postsection videor={spiderman} twit={'This is my Epic games clone [EPIC GAMES].'} linku={'https://epicgamess.netlify.app/'} />
                            <Postsection videor={spiderman} twit={'My recent project on youtube which I have  live hosted on netlify [YOUTUBE].'} linku={'https://youtuubbe.netlify.app/'} />



                        </div>
                    </div>
                ) :
                    (
                        <div className='border-l-[0.5px] border-zinc-700 border-r-[0.5px]' >
                            <div className='sticky top-0 z-50 w-full bg-[#00000067] backdrop-blur-lg p-2' >
                                <div className='flex items-center justify-start gap-3' >
                                    <div onClick={() => navigate(-1)} className='p-2 rounded-full cursor-pointer hover:bg-zinc-800' >
                                        <FaArrowLeft className='text-white text-lg cursor-pointer ' />
                                    </div>
                                    <div className='text-white select-none ' >
                                        <h1>Krishna Shrivastva</h1>
                                    </div>
                                </div>

                            </div>
                            <div >
                                <div className='relative mb-20' >
                                    <img className='min-h-32' src={banner} alt="" />
                                    <div className='absolute -bottom-16 left-7' >
                                        <img className='w-28 h-28 rounded-full border-4 border-black' src={myimg} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className='p-2 px-6 flex items-start gap-3 justify-start' >
                                        <div>
                                            <h1 className='text-white text-lg' >Krishna Shrivastava</h1>
                                            <p className='text-zinc-600' >@Webdeveloper</p>
                                        </div>
                                        <div className='flex items-center justify-center border border-zinc-600 rounded-full px-2 mx-2 cursor-pointer hover:bg-zinc-900' >
                                            <img className='w-6' src={bluetick} alt="" />
                                            <p className='text-white text-sm' >Get verified</p>
                                        </div>

                                    </div>
                                    <div>
                                        <div className='flex items-center justify-between text-white border-b-[0.5px] border-zinc-700' >
                                            <div onClick={() => navigate('/profile')} className='cursor-pointer hover:bg-zinc-800 p-1 py-2 w-full flex items-center justify-center transition-all duration-200' >
                                                {
                                                    location.pathname === '/profile' ?
                                                        <h4 className='underline decoration-sky-600 decoration-4 underline-offset-8' >Projects</h4> :
                                                        <h4  >Projects</h4>
                                                }

                                            </div>
                                            <div onClick={() => navigate('/skill')} className='cursor-pointer hover:bg-zinc-800 p-1 py-2 w-full flex items-center justify-center transition-all duration-200' >
                                                {
                                                    location.pathname === '/skill' ?
                                                        <h4 className='underline decoration-sky-600 decoration-4 underline-offset-8' >Skill</h4> :
                                                        <h4  >Skill</h4>
                                                }
                                            </div>
                                            <div onClick={() => navigate('/education')} className='cursor-pointer hover:bg-zinc-800 p-1 py-2 w-full flex items-center justify-center transition-all duration-200' >
                                                {
                                                    location.pathname === '/education' ?
                                                        <h4 className='underline decoration-sky-600 decoration-4 underline-offset-8' >Education</h4> :
                                                        <h4  >Education</h4>
                                                }
                                            </div>
                                            <div onClick={() => navigate('/contactus')} className='cursor-pointer hover:bg-zinc-800 p-1 py-2 w-full flex items-center justify-center transition-all duration-200' >
                                                {
                                                    location.pathname === '/contactus' ?
                                                        <h4 className='underline decoration-sky-600 decoration-4 underline-offset-8 text-nowrap whitespace-nowrap' >Contact us</h4> :
                                                        <h4 className='text-nowrap whitespace-nowrap' >Contact us</h4>
                                                }
                                            </div>

                                            <div onClick={() => navigate('/media')} className='cursor-pointer hover:bg-zinc-800 p-1 py-2 w-full flex items-center justify-center transition-all duration-200' >
                                                {
                                                    location.pathname === '/media' ?
                                                        <h4 className='underline decoration-sky-600 decoration-4 underline-offset-8 text-nowrap whitespace-nowrap' >Media</h4> :
                                                        <h4  >Media</h4>
                                                }
                                            </div>

                                        </div>
                                        {
                                            location.pathname === '/profile' ?
                                                (
                                                    <div>
                                                        <Postsection videor={net} twit={'This is my Image Searching app AUDOBO.'} linku={'https://audobo.netlify.app/'} />
                                                        <Postsection videor={trail} twit={'This is my Recipe app to show and search Recipes [FOODOO].'} linku={'https://fooodoo.netlify.app/'} />
                                                        <Postsection videor={spiderman} twit={'This is my Epic games clone [EPIC GAMES].'} linku={'https://epicgamess.netlify.app/'} />
                                                        <Postsection videor={spiderman} twit={'My recent project on youtube which I have  live hosted on netlify [YOUTUBE].'} linku={'https://youtuubbe.netlify.app/'} />
                                                    </div>
                                                ) :
                                                location.pathname === '/skill' ? (
                                                    <div>
                                                        <div className='text-white text-xl p-3 px-6 flex items-center justify-center gap-x-5 flex-wrap pb-14' >


                                                            {loader ? (
                                                                <Loadingscreen />
                                                            ) : (
                                                                <div className='flex flex-wrap items-center justify-around gap-6' >
                                                                    <h1>Skills</h1>
                                                                    {skilldata.map(({ id, title, linnk }) => (
                                                                        <div key={id} className='flex flex-col-reverse items-center justify-center gap-x-5 flex-wrap'>
                                                                            <h2>{title}</h2>
                                                                            <img className='w-24' src={linnk} alt={title} />
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}


                                                        </div>

                                                    </div>
                                                ) : location.pathname === '/education' ?
                                                    (<div>
                                                        <div className='text-white text-xl p-3 px-6 flex items-center justify-center gap-x-5 flex-wrap pb-14' >


                                                            {loader ? (
                                                                <Loadingscreen />
                                                            ) : (
                                                                <div className='flex flex-wrap items-start justify-around gap-6 cursor-pointer flex-col' >
                                                                    <h1>Education</h1>
                                                                    {educationdata.map(({ id, title }) => (
                                                                        <div key={id} className='flex flex-col-reverse items-center  justify-center gap-x-5 flex-wrap'>
                                                                            <Postsection twit={title} />

                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}


                                                        </div>
                                                    </div>)

                                                    : location.pathname === '/contactus' ?
                                                    (<div>
                                                        <div className='text-white text-xl p-3 px-6 flex items-center justify-center gap-x-5 flex-wrap pb-20' >


                                                            {loader ? (
                                                                <Loadingscreen />
                                                            ) : (
                                                                <div className='flex flex-wrap items-center justify-around gap-6 cursor-pointer' >
                                                                   <Contact/>
                                                                </div>
                                                            )}


                                                        </div>
                                                    </div>) : 
                                                     location.pathname === '/media' ?
                                                     (<div>
                                                         <div className='text-white text-xl p-3 px-6 flex items-center justify-center gap-x-5 flex-wrap pb-14' >
 
 
                                                             {loader ? (
                                                                 <Loadingscreen />
                                                             ) : (
                                                                 <div className='flex flex-wrap items-center justify-around gap-6 cursor-pointer flex-col pb-5' >
                                                                    <h1>Available on :</h1>
                                                                    <a target='_blank' href="https://www.linkedin.com/in/krishna-shrivastava-62b72129a/">
                                                                      <div className='flex items-center justify-center gap-4 ' >
                                                                        <img className='w-16' src="https://logospng.org/download/linkedin/logo-linkedin-icon-4096.png" alt="" />
                                                                        <h2>Linked in</h2>
                                                                    </div>     
                                                                    </a>
                                                                    <a target='_blank' href="https://x.com/Krishrinastava">
                                                                      <div className='flex items-center justify-center gap-4' >
                                                                        <img className='w-16' src="https://www.sarkarinaukriexams.com/images/import/sne21299025521.png" alt="" />
                                                                        <h2>X ( Twitter )</h2>
                                                                    </div>     
                                                                    </a>
                                                                    <a target='_blank' href="https://github.com/Krishna-Shrivastava-1">
                                                                      <div className='flex items-center justify-center gap-4' >
                                                                        <img className='w-16' src="https://th.bing.com/th/id/R.5cd9f30e245cbdcc11274951e439ad65?rik=Sz61vyzVAebTKQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgithub-logo-png-white-github-11-icon-free-white-social-icons-256x256.png&ehk=ui79L3vfGaeid0nrxXxzViwTkmF9nuWIXWX3zBAN51o%3d&risl=&pid=ImgRaw&r=0" alt="" />
                                                                        <h2>Github</h2>
                                                                    </div>     
                                                                    </a>
                                                                 
                                                                 </div>
                                                             )}
 
 
                                                         </div>
                                                     </div>) :
                                                    null
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }

        </div>

    )
}

export default Centersection
