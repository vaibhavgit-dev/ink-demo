'use client'
import React, { useEffect } from 'react';
import Link from "next/link"
import Image from "next/image"
import Logo from "../assests/image/Logo.png"
import { usePathname } from 'next/navigation'; // Use this hook for getting the current pathname

export default function Footer() {
    const pathname = usePathname(); // Get the current pathname
    const isActive = (path) => pathname === path ? 'text-[#FFDE7C]' : 'text-white';

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://tally.so/widgets/embed.js';
        script.async = true;
        script.onload = () => {
            if (typeof Tally !== 'undefined') {
                Tally.loadEmbeds();
            }
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <>
            <div  className='bg-[#ECEFFE] px-4 z-[11]'>
                <div className='container pt-[45px] pb-[60px] '>
                    <i><p className='text-3xl pb-[45px] md:text-5xl font-medium text-center'>
                        Ink in your Inbox
                    </p></i>
                    <p className='w-full lg:w-[55%]  pb-[30px] mx-auto text-center  text-lg md:text-lg'>
                        Would you be interested in updates about upcoming books, events, and other news
                        from us? We are a lean startup and don’t have the bandwidth to spam your inbox.
                        And you can always easily unsubscribe.
                    </p>

                    <div className='w-[50%] max-w-[405px] flex justify-center mx-auto '>
                        <iframe
                            data-tally-src="https://tally.so/embed/3XMW9z?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                            loading="lazy"
                            width="100%"
                            height="200"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            title="Ink in your Inbox"
                        ></iframe>
                        
                    </div>
                </div>
            </div>

            <nav id="bottom"  className="relative bg-[#241b6d] text-white flex flex-col items-center justify-center py-10 footer-bg-image z-[11]">
                {/* PNG Wave Background */}
                <div className="absolute inset-0 footer-bg"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                    <Link href="/">
                    <Image src={Logo} alt="Logo" width={150} height={100} className="mb-3" />
                     </Link>
                    <h3 className="text-xl md:text-2xl font-medium mb-6 text-center">
                        Publishing, <i className="font-light">with a difference.</i>
                    </h3>

                    <ul className="flex flex-wrap space-x-4 md:space-x-6 justify-center text-sm md:text-xl font-light">
                        <li className="hover:underline"><a href="https://www.instagram.com/bluone.ink/" target="blank">INSTAGRAM</a></li>
                        <li className="hover:underline"><a href="https://x.com/BluOneInk" target="blank">X (TWITTER)</a></li>
                        <li className="hover:underline"><a href="https://www.linkedin.com/company/bluoneink/" target="blank">LINKEDIN</a></li>
                        <li className="hover:underline"><a href="https://www.youtube.com/channel/UC2hOgss9-N9Yx5c3DuyIU0Q" target="blank">YOUTUBE</a></li>
                    </ul>

                    <ul className="hidden flex flex-wrap gap-2 justify-center text-sm md:text-2xl space-x-4 md:space-x-8 pt-1 font-normal">
                        <li className="hover:underline"><Link href="/comingsoon">ABOUT</Link></li>
                        <li className="hover:underline list-disc"><Link href="/comingsoon">EVENTS</Link></li>
                        <li className="hover:underline list-disc"><Link href="/comingsoon">RESOURCES</Link></li>
                        <li className="hover:underline list-disc"><Link href="/comingsoon">GALLERY</Link></li>
                        <li className="hover:underline list-disc"><Link href="/comingsoon">MEDIA KIT</Link></li>
                        <li className="hover:underline list-disc"><Link href="/comingsoon">CATALOGUE</Link></li>
                        <li className="hover:underline list-disc"><Link href="/comingsoon">CONTACT</Link></li>
                    </ul>

                    <ul className="  flex flex-wrap justify-center text-sm md:text-base font-light pt-6 mb-3 space-x-4 md:space-x-6">
                        <li className={`hover:underline ${isActive('#')} text-xs`}><Link href="/sitemap.xml">SITEMAP</Link></li>
                        <li className={`hover:underline ${isActive('/termsandcondition')} text-xs list-disc`}><Link href="/terms">TERMS OF USE</Link></li>
                        <li className={`hover:underline ${isActive('/privacypolicy')} text-xs list-disc`}><Link href="/privacypolicy">PRIVACY POLICY</Link></li>
                        <li className={`hover:underline ${isActive('/disclaimer')} text-xs list-disc`}><Link href="/disclaimer">DISCLAIMER</Link></li>
                    </ul>

                    <span className="text-xs uppercase  font-light pb-4 text-center">
                        ©️ 2024. All Rights Reserved. BluOne Ink Pvt. Ltd.
                    </span>
                </div>
            </nav>
        </>
    )
}
