import React, { use } from 'react';

const Navbar = ({jsonPromise}) => {
    const jsonData = use(jsonPromise);
    let logoLink, profileLink, bellLink;
    jsonData.forEach(element => {
        if(element.title == "Logo") logoLink = element.image;
        else if(element.title == "Profile") profileLink = element.image;
        else if(element.title == "Bell") bellLink = element.image;
    });

    return (
        <div>
            <header className="flex justify-between items-center mx-[140px] h-[83px]">
                <a href="">
                    <img src={logoLink} alt="" />
                </a>
                <div className="flex gap-[78px] pr text-[22px]">
                    <a href="">Home</a>
                    <a href="">Auctions</a>
                    <a href="">Categories</a>
                    <a href="">How to works</a>
                </div>
                <div className="flex gap-[18px]">
                    <a href="">
                        <img src={bellLink} alt="" />
                    </a>
                    <a href="">
                        <img src={profileLink} alt="" />
                    </a>
                </div>
            </header>
        </div>
    );
};

export default Navbar;