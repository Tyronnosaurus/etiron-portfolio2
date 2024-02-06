import React from 'react'
import { GithubIcon, LinkedInIcon} from './Icons'
import { motion } from 'framer-motion'
import Logo from './Logo'


const NavBar = () => {

    return (
        <header className='w-[90%] py-4 font-medium relative m-auto
                           flex flex-row items-baseline justify-between
                           px-8 lg:px-16
                           dark:text-light'>
            
            
            <div className="flex flex-row items-baseline">
                <div className='pr-4'>
                    <Logo/>
                </div>

                <h1 className="text-3xl hidden sm:block">
                    Eduard Tiron - Portfolio
                </h1>
            </div>

            {/* Socials */}
            <nav className='flex items-center justify-end '>
                <motion.a href="https://linkedin.com/in/eduardtiron/?locale=en_US"
                        target={"_blank"}
                        className='w-6 mx-3'
                        whileHover={{y:-2}}
                        whileTap={{scale:0.9}}>
                    <LinkedInIcon />
                </motion.a>
                <motion.a href="https://github.com/Tyronnosaurus"
                        target={"_blank"}
                        className='w-6 ml-3'
                        whileHover={{y:-2}}
                        whileTap={{scale:0.9}}>
                    <GithubIcon />
                </motion.a>
            </nav>


        </header>
    )
}

export default NavBar