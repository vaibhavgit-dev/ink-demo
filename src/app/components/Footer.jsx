'use client'
import React, { useEffect } from 'react';
import Link from "next/link"
import Image from "next/image"
import Logo from "../assests/image/Logo.png"
import { usePathname } from 'next/navigation';
import { AiOutlineCopyright } from 'react-icons/ai';

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

                    <div className='w-[75%] lg:w-[50%] max-w-[405px] flex justify-center mx-auto '>
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
                        Publishing, <i className="font-light">with a Purpose</i>
                    </h3>

                    <ul className="flex flex-wrap space-x-4 md:space-x-6 justify-center text-sm md:text-xl font-light">
                        <li className="hover:underline"><a href="https://www.instagram.com/bluone.ink/" target="blank">INSTAGRAM</a></li>
                        <li className="hover:underline"><a href="https://x.com/BluOneInk" target="blank">X (TWITTER)</a></li>
                        <li className="hover:underline"><a href="https://www.linkedin.com/company/bluoneink/" target="blank">LINKEDIN</a></li>
                        <li className="hover:underline"><a href="https://www.youtube.com/channel/UC2hOgss9-N9Yx5c3DuyIU0Q" target="blank">YOUTUBE</a></li>
                    </ul>

                    <ul className="flex flex-wrap gap-2 justify-center text-sm md:text-2xl space-x-4 md:space-x-4 pt-6 font-normal">
                        <li className="hover:underline"><Link href="/comingsoon">ABOUT</Link></li>
                        <li className="hover:underline list-disc marker:text-sm"><Link href="/resources/events">EVENTS</Link></li>
                        <li className="hover:underline list-disc marker:text-sm"><Link href="/resources">RESOURCES</Link></li>
                        <li className="hover:underline list-disc marker:text-sm"><Link href="/resources/gallery">GALLERY</Link></li>
                        <li className="hover:underline list-disc marker:text-sm"><Link href="/resources/media-kit">MEDIA KIT</Link></li>
                        <li className="hover:underline list-disc marker:text-sm"><Link href="/resources/catalogue">CATALOGUE</Link></li>
                        <li className="hover:underline list-disc marker:text-sm"><Link href="/contact">CONTACT</Link></li>
                    </ul>

                    <ul className="  flex flex-wrap justify-center text-sm md:text-base font-light pt-6 mb-3 space-x-4 md:space-x-6">
                        <li className={`hover:underline ${isActive('#')} text-xs`}><Link href="/sitemap.xml">SITEMAP</Link></li>
                        <li className={`hover:underline ${isActive('/termsandcondition')} text-xs list-disc`}><Link href="/resources/policies/terms">TERMS OF USE</Link></li>
                        <li className={`hover:underline ${isActive('/privacypolicy')} text-xs list-disc`}><Link href="/resources/policies/privacy">PRIVACY POLICY</Link></li>
                        <li className={`hover:underline ${isActive('/disclaimer')} text-xs list-disc`}><Link href="/resources/policies/disclaimer">DISCLAIMER</Link></li>
                    </ul>

                    <span className="text-xs uppercase font-light pb-4 text-center text-white">
                        <AiOutlineCopyright className="inline-block mb-0.5 mr-1" />
                        2025. All Rights Reserved. BluOne Ink Pvt. Ltd.
                    </span>
                </div>
            </nav>
        </>
    )
}


