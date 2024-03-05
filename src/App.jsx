import logo from '/images/logo.svg'
import Navbar from './components/navbar'
import bgDesktop from '/images/bg-pattern-intro-desktop.svg'
import iconMenu from '/images/icon-hamburger.svg';
import iconClose from '/images/icon-close.svg'
import bgCircle from '/images/bg-pattern-circles.svg';
import editorDesktop from '/images/illustration-editor-desktop.svg'
import editorMobile from '/images/illustration-editor-mobile.svg'
import phone from '/images/illustration-phones.svg'
import laptopDesk from "/images/illustration-laptop-desktop.svg"
import laptopMobile from "/images/illustration-laptop-mobile.svg"
import { useState } from 'react';

export default function App() {

  const [isClick, setIsClick] = useState(false)

  const footers = [
    { option: "Product", content: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"] },
    { option: "Company", content: ["About", "Team", "Blog", "Careers"] },
    { option: "connect", content: ["contact", "Newsletter", "LinkedIn"] },
  ]

  return (
    <main className="min-h-screen">
      {/* header */}
      <section className='relative bg-Lightred text-White p-8 rounded-bl-[100px]'
        style={{
          backgroundImage: `url(${bgDesktop})`,
          backgroundPosition: 'right',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        {/* navbar */}

        <nav className='flex flex-col px-8 py-4 ml-8 gap-10'>
          <div className='flex justify-between items-center gap-4'>
            <div className='flex flex-row gap-4'>
              <img src={logo} alt="" className='w-12 h-10' />
              {isClick && <Navbar />}

            </div>
            <img src={isClick ? iconClose : iconMenu} alt="" className='sm:hidden' onClick={() => setIsClick(!isClick)} />


            <div className='hidden sm:block'>
              <button className='mx-4 hover:bg-Verylightred px-4 py-1 rounded-full'>Login</button>
              <button className='mx-4 hover:bg-Verylightred px-4 py-1 rounded-full'>Sign up</button>
            </div>
          </div>

          {/* infor header */}
          <div className='flex flex-col justify-center items-center gap-4'>
            <h1 className='sm:text-4xl font-semibold'>A modern publishing platform</h1>
            <p className='text-gray-200 '>Grow your audience and build your online brand</p>
            <div>
              <button className='mx-2 p-2 bg-Verylightred rounded-full hover:bg-White hover:text-Lightred'>Start for Free</button>
              <button className='mx-2 p-2 bg-Verylightred rounded-full hover:bg-White hover:text-Lightred'>Learn More</button>
            </div>
          </div>

        </nav>


      </section>
      {/* body */}
      <section className='flex flex-col gap-8'>
        {/* part 1 */}
        <div className='my-4 mx-4 p-8'>
          <h1 className='text-xl my-2 text-center text-Verydarkblue font-semibold'>Designed for the future</h1>
          <div className='flex sm:flex-row flex-col-reverse gap-4'>
            <div className='sm:w-1/2 text-center sm:text-justify flex flex-col gap-4'>
              <span>
                <h3 className='text-Verydarkblue my-4 text-2xl'>Introducing an extensible editor</h3>
                <p className='text-gray-400'>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                  change the looks of a blog.</p>
              </span>
              <span className='text-Verydarkblue my-4'>
                <h3 className='text-Verydarkblue my-4 text-2xl'>Robust content management</h3>
                <p className='text-gray-400'>Flexible content management enables users to easily move through posts. Increase the usability of your blog
                  by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
              </span>
            </div>
            <div className='sm:w-1/2'>
              <img src={editorDesktop} alt="" className='hidden sm:block' />
              <img src={editorMobile} alt="" className='sm:hidden' />

            </div>
          </div>
        </div>
        {/* part 2 */}
        <div
          className='flex sm:flex-row flex-col justify-center items-center bg-Verydarkgrayishblue rounded-bl-[100px] rounded-tr-[100px]'>
          <div className='relative sm:w-1/2 '>
            <img src={bgCircle} alt="" className='w-3/4  sm:w-full'/>
            <img src={phone} alt="" className='absolute w-96 -top-20' />
          </div>
          <div className='sm:w-1/2 p-4 text-center sm:text-justify'>
            <h3 className='text-xl font-medium text-White'>State of the Art Infrastructure</h3>
            <p className='my-4 mr-4 text-Grayishblue'>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
              This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
          </div>

        </div>
        {/* part 3 */}
        <div className='flex sm:flex-row flex-col justify-center items-center gap-4 p-4'>
          <div className='sm:w-1/2'>
            <img src={laptopDesk} alt="" className='hidden sm:block' />
            <img src={laptopMobile} alt="" className='sm:hidden' />
          </div>
          <div className='sm:w-1/2 p-4 mr-4 text-center sm:text-justify'>
            <h3 className='text-Verydarkblue text-xl font-semibold'>Free, open, simple</h3>
            <p className='text-Verydarkgrayishblue mt-2 mb-4'>Blogr is a free and open source application backed by a large community of helpful developers. It supports
              features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
              and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
            <h3 className='text-Verydarkblue text-xl font-semibold'>Powerful tooling</h3>
            <p className='text-Verydarkgrayishblue mt-2 mb-4'>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
              capable of producing even the most complicated sites.</p>
          </div>
        </div>
      </section>
      {/* footer */}
      <section className=' p-8 bg-Verydarkblackblue rounded-tr-[100px]'>
        <div className='sm:mx-16 flex sm:flex-row flex-col justify-between sm:items-baseline items-center'>
          <div className='mb-8'>
            <img src={logo} alt="" />
          </div>
          {footers.map((foot) => (
            <div className='flex flex-col gap-4 text-center'>
              <h1 className='text-White my-4 sm:my-auto'>{foot.option}</h1>
              {foot.content.map((infor) => (
                <ul>
                  <li className='text-Verydarkgrayishblue hover:underline cursor-pointer'>{infor}</li>
                </ul>
              ))}


            </div>
          ))}
        </div>



      </section>

    </main>
  )
}