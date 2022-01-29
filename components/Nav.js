import requests from "../utils/requests";
import { ArrowRightIcon } from '@heroicons/react/outline';
import {useRouter} from 'next/router';
import { useEffect } from "react";

function Nav() {

    const router = useRouter();

    useEffect(() => {

        const sc = document.querySelector('#navbar-2');
        sc.addEventListener('wheel', (e) => {

            if (e.wheelDeltaY === e.deltaY);
            else{
                console.log(e.wheelDeltaY, e.deltaY);
                sc.style.scrollBehavior = "smooth";
                e.preventDefault();
                sc.scrollLeft += e.deltaY;
            }
        })

    }, []);

    return (
        <nav className="relative" id="navbar">
            <div id="navbar-2" className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10
                    sm:space-x-20 overflow-x-scroll scrollbar-hide transform 2xl:justify-center">
                {Object.entries(requests).map(([key, {title, url}]) => (
                    <h2 
                        key={key}
                        onClick={() => router.push(`/?genre=${key.slice(5)}&page=1`)}
                        className="last:pr-24 cursor-pointer text-sm h-10 2xl:text-xl
                        transition duration-100 transform hover:scale-125 hover:text-white active:text-red-400 focus:text-red-400">{title}</h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>
            <div className="absolute top-0 left-0 bg-gradient-to-r from-[#06202A] h-10 w-1/12"/>
        </nav>
    )
}



export default Nav
