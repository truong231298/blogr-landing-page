import React, { useState } from 'react';
import iconDown from "/images/icon-arrow-dark.svg";
import iconUp from "/images/icon-arrow-light.svg";


const Navbar = () => {
    const [dropdownStates, setDropdownStates] = useState({
        product: false,
        company: false,
        connect: false,
    });


    const navbars = [
        { name: "Product", content: ["Overview", "Pricing", "Marketplace", "Integrations"] },
        { name: "Company", content: ["About", "Team", "Blog", "Careers"] },
        { name: "Connect", content: ["Contact", "Newsletter", "LinkedIn"] },
    ];

    const handleDropdownToggle = (navbarName) => {
        setDropdownStates((prevState) => ({
            ...prevState,
            [navbarName.toLowerCase()]: !prevState[navbarName.toLowerCase()],
        }));
    };


    return (

        <div className='absolute sm:relative flex sm:flex-row flex-col sm:gap-10 sm:bg-transparent right-0 sm:right-auto top-20 sm:top-auto w-1/2 sm:w-auto justify-center items-center bg-White'>
            {navbars.map((nav) => (
                <div key={nav.name} className='relative flex flex-col justify-center items-center  text-Verydarkblue sm:text-white sm:bg-transparent'>
                    <button className='flex flex-row items-center gap-1' onClick={() => handleDropdownToggle(nav.name)}>
                        <span className='my-2 sm:my-auto'>{nav.name}</span>
                        {dropdownStates[nav.name.toLowerCase()] ? (
                            <img src={iconUp} alt="" className='h-2 w-2' />
                        ) : (
                            <img src={iconDown} alt="" className='h-2 w-2' />
                        )}
                    </button>
                    {dropdownStates[nav.name.toLowerCase()] && (
                        <ul className='relative sm:absolute bg-Verydarkgrayishblue sm:bg-White p-4 text-black rounded-md sm:top-12'>
                            {nav.content.map((info, index) => (
                                <li key={index} className='hover:text-Verydarkblue cursor-pointer'>{info}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
            <div className='flex flex-col justify-center items-center text-Verydarkblue sm:hidden'>
                <button className='mx-4  hover:bg-Verylightred px-4 py-1 rounded-full'>Login</button>
                <button className='mx-4  hover:bg-Verylightred px-4 py-1 rounded-full'>Sign up</button>
            </div>
        </div>



    );
};

export default Navbar;
