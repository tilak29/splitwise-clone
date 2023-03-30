import React from "react";
import asset1 from '../../../assets/images/asset1.png';
import asset2 from '../../../assets/images/asset2.png';
import asset3 from '../../../assets/images/asset3.png';
import asset4 from '../../../assets/images/asset4.png';
import asset5 from '../../../assets/images/asset5.png';

function Second(){
    return(
        <>
        <div className="flex flex-wrap">
        <div className="w-full bg-[#393e44] lg:w-1/2 flex flex-col align-center justify-between h-full pt-12">
            <div className="mx-auto text-center">
            <p className="text-2xl font-bold text-white text-center font-mont">Track balances</p>
            <p className="text-center text-lg text-white w-[70%] block mx-auto px-8 mt-2 mb-9 max-w-95">Keep track of shared expenses, balances, and who owes who.</p>
            </div>
            <img className="mx-auto w-65 lg:w-81" src={asset1} />
        </div>
        <div className="w-full bg-[#24c09f] lg:w-1/2 flex flex-col align-center justify-between h-full pt-12">
        <div className="mx-auto text-center">
            <p className="text-2xl font-bold text-white text-center font-mont">Track balances</p>
            <p className="text-center text-lg text-white w-[70%] block mx-auto px-8 mt-2 mb-9 max-w-95">Keep track of shared expenses, balances, and who owes who.</p>
            </div>
            <img className="mx-auto w-65 lg:w-81" src={asset1} />
        </div>
        <div className="w-full bg-[#ce6744] lg:w-1/2 flex flex-col align-center justify-between h-full pt-12">
        <div className="mx-auto text-center">
            <p className="text-2xl font-bold text-white text-center font-mont">Track balances</p>
            <p className="text-center text-lg text-white w-[70%] text-ellipsis overflow-hidden block mx-auto px-8 mt-2 mb-9 max-w-95">Keep track of shared expenses, balances, and who owes who.</p>
            </div>
            <img className="mx-auto w-65 lg:w-81" src={asset1} />
        </div>
        <div className="w-full bg-[#393e44] lg:w-1/2 flex flex-col align-center justify-between h-full pt-12">
        <div className="mx-auto text-center">
            <p className="text-2xl font-bold text-white text-center font-mont">Track balances</p>
            <p className="text-center text-lg text-white w-[70%] text-ellipsis overflow-hidden block mx-auto px-8 mt-2 mb-9 max-w-95">Keep track of shared expenses, balances, and who owes who.</p>
            </div>
            <img className="mx-auto w-65 lg:w-81" src={asset1} />
        </div>
        <div className="w-full pt-8 h-landing-feature bg-[#845ec1] flex-col lg:flex-row flex justify-between lg:flex">
            <div className="lg:w-1/2">
                <div className="lg:flex lg:flex-col lg:justify-center lg:h-full">
                    <h1 className="text-2xl font-bold text-white text-center">
                    Get even more with PRO
                    </h1>
                    <p className="text-center w-[70%] text-white block mt-2 text-lg mb-6 max-w-95 mx-auto">
                    Get even more organized with receipt scanning, charts and graphs, currency conversion, and more!
                    </p>
                    <button>
                    <a href="#" className="mx-auto px-10 py-3 bg-[#845ec1] hover:translate-y-1 text-white border border-white shadow font-mont font-semibold rounded sm-cta-button">
                        Sign up
                    </a>
                    </button>
                </div>
            </div>
            <div class="lg:w-1/2 pt-12">
                <div className="lg:flex lg:flex-col lg:justify-end lg:h-full">
                    <img className="mx-auto w-65 lg:w-81" src={asset5}/>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Second;