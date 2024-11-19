import React from "react";
import { PinContainer } from "../../Components/ui/3d-pin";
import { Gas, Store, Trans, Web_img } from "../../Assets/data";
import BannerGallery from "./BannerGallery";

export function Ourproduct() {
    return (
        <>
<div className="text-white text-center font-extrabold text-3xl z-10"><p>Our Products</p></div>

<div className="text-white ms-[5%] mt-5 text-start font-extrabold text-2xl z-10"><p>Customized Software Provider</p></div>
        
        <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4 h-[500px] px-[2%] sm:mt-0 mt-[5%]">
            <div id="our_poduct" className="flex items-center justify-center">
                <PinContainer title="KN Gas" href="/kngd">
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                            KN Gas Application
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500">
                                KN Gas Distribution System streamlines gas supply chain management efficiently.
                            </span>
                        </div>
                        <div className="flex flex-1 w-full mt-4 " />
                        <img className="h-full" src={Gas} alt="gas" />
                    </div>
                </PinContainer>
            </div>

            <div id="our_poduct" className="flex items-center justify-center sm:mt-0 mt-[8%]">
                <PinContainer title="KN Store" href="/knsms">
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                        KN Store Management System
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500">
                            KN Store Management System streamlines retail operations, managing inventory and sales.
                            </span>
                        </div>
                        <div className="flex flex-1 w-full mt-4 " />
                        <img className="h-full" src={Store} alt="gas" />
                    </div>
                </PinContainer>
            </div>

            <div id="our_poduct" className="flex items-center justify-center sm:mt-0 mt-[8%]">
                <PinContainer title="KN Transport" href="/kntran">
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                        KN Transport Management System
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500">
                            KN Transport Management System streamlines logistics for efficient vehicle operations.
                            </span>
                        </div>
                        <div className="flex flex-1 w-full mt-4 " />
                        <img className="h-full" src={Trans} alt="gas" />
                    </div>
                </PinContainer>
            </div>

            <div id="our_poduct" className="w-full flex items-center justify-center sm:mt-0 mt-[8%]">
                <PinContainer title="Websites" href="">
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                        Custom Websites
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500">
                            Respond to government RFPs, RFIs and RFQs 10x faster using AI
                            </span>
                        </div>
                        <div className="flex flex-1 w-full mt-4 " />
                        <img className="h-full" src={Web_img} alt="gas" />
                    </div>
                </PinContainer>
            </div>


        </div>

        <div className="sm:mt-[0] mt-[260%]">
        <BannerGallery/>
        </div>
        <div>
            
      {/* <div className="gallery-container">
      <h1 className="gallery-title">Banners</h1>
      <div className="gallery-grid">
        {BannersImg.map((image, i) => (
          <div className="gallery-item" key={i}>
            <img
              className="gallery-image"
              src={image.img}
              alt={image.alt || `Gallery Item ${i + 1}`}
            />
            <div className="image-overlay">
              <h3 className="image-title">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div> */}  
      </div>

        </>
    );
}
