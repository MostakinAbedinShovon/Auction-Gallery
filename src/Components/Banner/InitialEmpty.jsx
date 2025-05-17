import React from 'react';

const InitialEmpty = () => {
    return (
        <div>
            <div className="w-full flex justify-center items-center text-center p-8">
                <div>
                    <p className="sm text-[26px] mb-6">No favorite yet</p>
                    <p className="sr text-lg">Click the heart icon on any item<br />to add it to your favorites</p>
                </div>
            </div>
            <hr className="border-b-1 border-[#DCE5F3]" />
        </div>
    );
};

export default InitialEmpty;