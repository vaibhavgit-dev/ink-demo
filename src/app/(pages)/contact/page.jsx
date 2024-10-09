"use client"
import React, {useState, useEffect } from 'react'
import Link from 'next/link'
import Loader from "@/app/components/Loader";


function contact() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

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
    {loading ? (
    <Loader /> 
  ) : (
    <div className="container flex flex-col items-center justify-center contactus pb-10">
    <div className="text-center max-w-screen-md">
        <h2 className="font-medium pt-28 pb-6 lg:pt-40 lg:pb-20">Contact Us</h2>
        <div className="mb-14">
            <i>The sheer delight of reading, reflecting, contemplating, of sharing human experience and knowledge, insight and enlightenment, timelessly, agelessly — this is the incomparable magic of the written word that Ink aims to bring to the world.</i>
        </div>
        <p className="leading-5 paragh">
            A-76, Sector 136 <br />
            Noida, Uttar Pradesh <br />
            201 305 <br />
            Location <br />
        </p>
        <p className="paragh">editors@bluOne.ink</p>
        <p className="paragh">+91 89292-00199</p>
        <ul className="list-disc flex flex-wrap justify-center gap-6 mb-6">
            <li className="list-none hover:text-[#007DD7]">
                <a href="https://in.linkedin.com/company/bluoneink" target="_blank">Linkedin</a>
            </li>
            <li className="list-disc hover:text-[#007DD7]">
                <a href="https://www.instagram.com/bluone.ink/" target="_blank">Instagram</a>
            </li>
            <li className="list-disc hover:text-[#007DD7]">
                <a href="https://www.youtube.com/channel/UC2hOgss9-N9Yx5c3DuyIU0Q" target="_blank">YouTube</a>
            </li>
            <li className="list-disc hover:text-[#007DD7]">
                <a href="https://x.com/BluOneInk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">X (Twitter)</a>
            </li>
        </ul>
        <div className="bg-[#FFF2E5] h-full mb-10">
        <div className='w-[100%] max-w-[405px] flex justify-center mx-auto p-6 '>
                        <iframe
                            data-tally-src="https://tally.so/embed/mRJ5qj?alignLeft=1&transparentBackground=1&dynamicHeight=1"
                            loading="lazy"
                            width="100%"
                            height="200"
                            title="Ink in your Inbox"
                        ></iframe>
                    </div>
        </div>
        <p className="paragh">
            Ink is a part of a multinational ecosystem of conscious businesses under the parent company, BluOne. We believe in excellence and exist to help create a positive impact in the world.
        </p>
    </div>
</div>

        )}
        </>
    )
}

export default contact
