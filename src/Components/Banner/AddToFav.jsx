import React from 'react';

const AddToFav = ({ cart, removeCart }) => {
    return (
        <div>
            <div className="w-full px-8">
                <div className="flex sr text-xl py-8 gap-0 text-[#0E2954]">
                    <img className="w-[96px] h-[96px] object-cover rounded-lg mr-6" src={cart.image} alt="" />
                    <div className="w-full flex flex-col justify-between mr-2">
                        <p>{cart.title}</p>
                        <div className="flex gap-6">
                            <p>${cart.currentBidPrice}</p>
                            <p>Bids: {cart.bidsCount}</p>
                        </div>
                    </div>
                    <a onClick={(e) => {
                        e.preventDefault();
                        removeCart(cart, cart.id);
                    }} href="">
                        <i className="fa-xl fa-solid fa-xmark"></i>
                    </a>
                </div>
                <hr className="border-b-1 border-[#DCE5F3]" />
            </div>
        </div>
    );
};

export default AddToFav;