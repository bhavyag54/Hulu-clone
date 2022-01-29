import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon } from "@heroicons/react/outline";
import {useRouter} from 'next/router';
import { auth,provider } from "../pages/firebase";
import { useEffect } from 'react';
import {signIn} from "next-auth/client"

function Header() {

    const router = useRouter();

    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between align-middle items-center h-auto">

        <div className="flex flex-grow justify-evenly max-w-2xl">
            <div className="" onClick={() => {router.push("/")}}>
                <HeaderItem title="Home" Icon={HomeIcon}/>
            </div>
            <div className="">
                <HeaderItem title="Trending" Icon={LightningBoltIcon}/>
            </div>
            <div className="">
                <HeaderItem title="verified" Icon={BadgeCheckIcon}/>
            </div>
            <div className="">
                <HeaderItem title="collections" Icon={CollectionIcon}/>
            </div>
            <div className="">
                <HeaderItem title="search" Icon={SearchIcon}/>
            </div>

            
                <button className="pt-2 pb-2 pr-10 pl-10 w-30 h-10 hover:border-white border-2  text-sm  bg-transparent border-gray-500" onClick={() => signIn()}>LOGIN</button>
               
            </div>

            

            <Image 
                className="object-contain"
                src='https://links.papareact.com/ua6'
                width={160}
                height={80}
            />
        </header>
    )
}

export default Header