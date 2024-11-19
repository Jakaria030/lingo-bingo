import React from 'react';
import SharedBanner from '../components/SharedBanner';

const Tutorials = () => {
    const title = "Tutorials";
    const subTitle = "Explore curated lessons and video tutorials to enhance your learning journey";

    const videos = [
        { id: 1, src: "https://www.youtube.com/embed/TytGj8xiPyY?si=ICjzIp9b5Vil4e_g" },
        { id: 2, src: "https://www.youtube.com/embed/RuGmc662HDg?si=b49olIkySwa36ZyJ" },
        { id: 3, src: "https://www.youtube.com/embed/axQGCdGCjAk?si=ZQbFIBveK_mTglw_" },
        { id: 4, src: "https://www.youtube.com/embed/hFQ4Cghj2EI?si=TXYkwBtHRNJ_T2-5" },
        { id: 5, src: "https://www.youtube.com/embed/Uzlgcek-86M?si=-zaipnicp2n4XUUE" },
        { id: 6, src: "https://www.youtube.com/embed/LmEF3k_wVH4?si=XRwv6ZVsL8nKVhUf" },
    ];

    return (
        <div className='w-11/12 sm:w-10/12 mx-auto'>
            {/* Banner section */}
            <SharedBanner
                title={title}
                subTitle={subTitle}
            ></SharedBanner>

            <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 my-10'>

                {
                    videos.map((video, indx) => <div key={indx} className="sm:h-60">
                        <div className="w-full h-full">
                            <iframe
                                src={video.src}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                                allowFullScreen
                                referrerPolicy="strict-origin-when-cross-origin"
                                className="w-full h-full rounded-lg"
                            ></iframe>
                        </div>
                    </div>)
                }

            </section>
        </div>
    );
};

export default Tutorials;