import React, { use } from 'react';
import ItemTable from './itemTable';
import PosterBanner from './PosterBanner';
import AddToFav from './AddToFav';
import InitialEmpty from './InitialEmpty';

const Banner = ({ jsonPromise, handleCart, cart, total, removeCart}) => {
    const jsonData = use(jsonPromise);
    return (
        <div>
            {
                jsonData.map((element) => {
                    if (element.title === "Banner") {
                        return <PosterBanner key={element.id} element={element}></PosterBanner>
                    }
                })
            }
            <section className="flex justify-center bg-[#EBF0F5] py-32 px-[140px]">
                <div className="w-full">
                    <h1 className="sm text-[32px] mb-5 text-[#0E2954]">Active Auctions</h1>
                    <p className="sr text-xl mb-8">Discover and bid on extraordinary items</p>
                    <div className="flex gap-6">
                        <div className="w-3/5 max-h-[1228px] rounded-3xl bg-white">
                            <div className="w-full grid grid-cols-6 sr text-xl text-center p-8">
                                <p className="col-span-3 text-start">Items</p>
                                <p>Current Bid</p>
                                <p>Time Left</p>
                                <p>Bid Now</p>
                            </div>
                            <hr className="border-b-1 border-[#DCE5F3]" />
                            {
                                jsonData.map((element) => {
                                    if (element.currentBidPrice) {
                                        return <ItemTable key={element.id} element={element} handleCart={handleCart}></ItemTable>;
                                    }
                                })
                            }
                        </div>

                        <div className="w-2/5 h-min rounded-3xl bg-white">
                            <div className="w-full flex justify-center items-center sm text-[32px] text-center p-8 gap-3">
                                <i className="fa-lg fa-regular fa-heart"></i>
                                <p>Favorite Items</p>
                            </div>
                            <hr className="border-b-1 border-[#DCE5F3]" />
                            {
                                cart.length > 0 ? cart.map(cart => <AddToFav cart={cart} removeCart = {removeCart}></AddToFav>) : <InitialEmpty></InitialEmpty>
                            }
                            <div className="w-full flex justify-between items-center text-[26px] text-center p-8 gap-3">
                                <p className="sr">Total bids Amount</p>
                                <p className="sm">${total}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;