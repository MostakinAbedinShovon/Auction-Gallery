import React from 'react';

const PosterBanner = ({element}) => {
    return (
        <div>
            <section className="flex items-center h-[730px] w-full bg-cover bg-center" style={{ backgroundImage: `url(${element.image})` }}>
                <div className="mx-[140px]">
                    <h1 className="ssb text-5xl text-white">Bid on Unique Items from<br />Around the World</h1>
                    <p className="sl text-2xl text-[#ffffffc0] mt-5 mb-8">Discover rare collectibles, luxury goods, and
                        vintage<br />treasures in our curated auctions</p>
                    <button className="btn w-[238px] h-[57px] sm text-xl text-black bg-white rounded-[35px]">
                        Explore Auctions
                    </button>
                </div>
            </section>
        </div>
    );
};

export default PosterBanner;