import React, { use } from 'react';

const Footer = ({jsonPromise}) => {
    const jsonData = use(jsonPromise);
        let logoLink;
        jsonData.forEach(element => {
            if (element.title == "Logo") logoLink = element.image;
        });
    return (
        <div>
            <footer className="flex flex-col justify-center items-center py-32">
                <img src={logoLink} alt="" />
                    <div className="flex sr text-[22px] gap-[18px] mt-3 mb-6">
                        <p>Bid.</p>
                        <p>Win.</p>
                        <p>Own.</p>
                    </div>
                    <div className="flex pr text-lg gap-[52px] mb-8">
                        <a href="">Home</a>
                        <a href="">Auctions</a>
                        <a href="">Categories</a>
                        <a href="">How to works</a>
                    </div>
                    <p>© 2025 AuctionHub. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;