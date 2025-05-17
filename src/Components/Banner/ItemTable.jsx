import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const ItemTable = ({ element, handleCart }) => {
    const [toggle, setToggle] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const btnClicked = (temp) => {
        temp.preventDefault();
        if (isClicked) return;

        handleCart(element);
        toast('An item is added to favorites');
        setToggle(true);
        setIsClicked(true);
    }

    return (
        <div>
            <div className="w-full grid grid-cols-6 sr text-xl text-center p-8 text-[#0E2954]">
                <div className="col-span-3 flex items-center gap-6 sr text-[18px]">
                    <img className="w-[96px] h-[96px] object-cover rounded-lg" src={element.image} alt="" />
                    <p className="text-start">{element.title}</p>
                </div>
                <p className="flex justify-center items-center">${element.currentBidPrice}</p>
                <p className="flex justify-center items-center">{element.timeLeft} left</p>
                <a onClick={btnClicked} className="w-full h-full flex justify-center items-center" style={{
                    cursor : isClicked ? 'not-allowed' : 'pointer'
                    }} href="">
                    {
                        toggle ? (<i className="fa-xl fa-solid fa-heart"></i>) : (<i className="fa-xl fa-regular fa-heart"></i>)
                    }
                </a>
            </div>
            <hr className="border-b-1 border-[#DCE5F3]" />
            <ToastContainer />
        </div>
    );
};

export default ItemTable;