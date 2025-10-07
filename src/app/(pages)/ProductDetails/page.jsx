'use client'
import { useState } from "react";
import { Heart, ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function ProductDetails() {
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState("blue");

    const colors = [
        { key: "red", class: "bg-[#D90202]" },
        { key: "blue", class: "bg-[#B8CCDA]" },
        { key: "yellow", class: "bg-[#988755]" },
        { key: "green", class: "bg-[#7198C8]" },
        { key: "gray", class: "bg-[#5D5D5B]" },
    ];

    // unified star color
    const starCls = "fill-[#BE968E] text-[#BE968E]";

    const inc = () => setQuantity((q) => Math.min(q + 1, 99));
    const dec = () => setQuantity((q) => Math.max(q - 1, 1));
    const names = ["skirt", 'blowse', 'blowse2', 'treng', "treng"]

    return <>
        {/* Title banner */}
        <div className="bg-[url('/assets/home/details.png')] py-13 text-center mb-4">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Product Details
            </h1>
        </div>
        <section className="container mx-auto ">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 mb-6 bg-[#ECECEC66]/40 rounded pl-3 py-3">
                <span>Home</span> <span className="mx-2">/</span>
                <span>Our Category</span> <span className="mx-2">/</span>
                <span className="text-black font-semibold">Product Details</span>
            </div>
            {/* Main row (wrapped) */}
            <div>
                <div className="flex flex-col lg:flex-row items-start gap-6 ">
                    {/* Left: Gallery */}
                    <div className=" flex flex-col items-center lg:items-start w-fit ">
                        <div className="relative bg-gray-100 rounded-2xl overflow-hidden w-full max-w-sm">
                            <img
                                src="/assets/home/man.svg"
                                alt="product"
                                className="object-contain w-[524px] h-[500px]"
                            />
                            <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#C4C4C4] text-white p-2 rounded-full">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#BE968E] text-white p-2 rounded-full">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                        {/* Thumbnails */}
                        <div className="flex justify-center gap-1 w-full max-w-sm lg:justify-start mt-2 ">
                            <img src="/assets/home/tshirt1.svg" className="w-full h-20 rounded-lg cursor-pointer object-cover bg-gray-100" />
                            <img src="/assets/home/tshirt2.svg" className="w-full h-20 rounded-lg cursor-pointer object-cover bg-gray-100" />
                            <div className="relative w-full h-20 rounded-lg overflow-hidden cursor-pointer">
                                <img src="/assets/home/tshirt3.svg" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-lg font-semibold">
                                    +2
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="flex-1 space-y-5 w-full ">
                        <div className="flex items-center justify-between">
                            <span className="border text-[#b08a6d] px-3 py-1 rounded-full text-sm font-medium">
                                T-Shirt
                            </span>
                            <button className="p-2 border rounded-md hover:bg-gray-100 ">
                                <Heart className="text-[#b08a6d] " />
                            </button>
                        </div>

                        <h2 className="text-2xl font-medium text-gray-800">
                            J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
                        </h2>

                        <div>
                            <span className="text-xl font-bold ">$300.00</span>
                            <span className="text-gray-400 line-through ml-2">$360.00</span>
                            <p className="text-gray-500 text-sm">This price is exclusive of taxes.</p>
                        </div>

                        <p className="text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <hr className="text-[#E6E6E6]"></hr>
                        {/* Type & Size */}
                        <div className="flex flex-col gap-6 w-full max-w-sm">
                            {/* Type */}
                            <div className="relative w-full">
                                <label className="absolute -top-2 left-4 bg-white text-gray-600 text-sm px-2">
                                    Type
                                </label>
                                <select
                                    defaultValue="Cotton"
                                    className="block w-4/5 p-3 border border-gray-300 rounded-lg text-gray-700 text-base"
                                >
                                    <option>Cotton</option>
                                    <option>Polyester</option>
                                </select>
                            </div>

                            {/* Size */}
                            <div className="relative w-full">
                                <label className="absolute -top-2 left-4 bg-white text-gray-600 text-sm px-2">
                                    Size
                                </label>
                                <select
                                    defaultValue="2XL"
                                    className="block w-4/5 p-3 border border-gray-300 rounded-lg text-gray-700 text-base"
                                >
                                    <option>2XL</option>
                                    <option>XL</option>
                                    <option>L</option>
                                    <option>M</option>
                                </select>
                            </div>
                        </div>

                        {/* Colors */}

                        <div>
                            <p className="text-gray-600 text-sm mb-2">Colors</p>
                            <div className="flex gap-3">
                                {colors.map((c, i) => (
                                    <div key={i} className="bg-[#F4F7F9] flex p-2 rounded-full">
                                        <button

                                            aria-label={`color-${c.key}`}
                                            onClick={() => setSelectedColor(c.key)}
                                            className={`w-6 h-6 rounded-full border-2 cursor-pointer ${c.class} ${selectedColor === c.key ? " ring-offset-1" : "border-gray-300"
                                                }`}
                                        /></div>
                                ))}
                            </div>
                        </div>

                        {/* Quantity + Add to cart */}
                        <div className="">
                            <p className="font-medium text-xl">Quantity <span className="text-[#8A8A8A] text-[16px] font-[400]">($300.00 for Piece)</span></p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center bg-[#F5F5F5] rounded-lg py-2 px-3">
                                    <button onClick={dec} className="px-3 py-2 bg-white rounded-xl text-gray-600 ">-</button>
                                    <span className="px-4 min-w-8 text-center tabular-nums">{String(quantity).padStart(2, "0")}</span>
                                    <button onClick={inc} className="px-3 py-2 bg-white rounded-xl text-black ">+</button>
                                </div>
                                <p className="text-2xl font-medium">$300.00</p>
                                <button className="bg-[#BE968E] text-white px-9 py-2 rounded-md ">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ratings & Reviews */}
            <div className="mt-10">
                <h3 className="text-2xl font-semibold text-gray-800">Rating & Reviews</h3>
                <hr className="w-1/40 rounded-2xl text-[#BE968E] h-1 bg-[#BE968E] mb-10" />

                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 items-center p-6 rounded-xl">
                    {/* Left - Score */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-end">
                            <div className="text-[48px] font-bold leading-none">4.5</div>
                            <div className="text-gray-500 text-lg mb-1">/5</div>
                        </div>
                        <div className="text-gray-500 text-sm mt-1">Average Rating</div>
                    </div>

                    {/* Middle - Bars */}
                    <div>
                        {[
                            { stars: 5, value: 80 },
                            { stars: 4, value: 60 },
                            { stars: 3, value: 30 },
                            { stars: 2, value: 10 },
                            { stars: 1, value: 4 },
                        ].map((r, i) => (
                            <div key={i} className="flex items-center gap-3 mb-3">
                                <div className="flex items-center min-w-[56px]">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < r.stars ? starCls : "text-gray-300"}`}
                                        />
                                    ))}
                                </div>
                                <div className="flex-1 h-2 bg-gray-200 rounded">
                                    <div
                                        className="h-2 bg-[#BE968E] rounded"
                                        style={{ width: `${r.value}%` }}
                                    />
                                </div>
                                <div className="text-xs text-gray-500 w-12 text-right">{r.value}%</div>
                            </div>
                        ))}
                    </div>

                    {/* Right - Total Reviews */}
                    <div className="flex flex-col items-center justify-center text-right">
                        <div className="text-[32px] font-semibold text-gray-800">3.0K</div>
                        <div className="text-sm text-gray-500 mb-3">Total Reviews</div>
                        <button className="px-4 py-2 rounded-md bg-[#BE968E] text-white  hover:bg-gray-50">
                            Add Comment
                        </button>
                    </div>
                </div>
            </div>

            {/* Comments */}
            <div className="mt-8 space-y-6">
                {[1, 2, 3].map((idx) => (
                    <div key={idx} className="p-4">
                        <div className="flex items-center justify-between">
                            <div className="font-semibold">Alex Dearnn</div>
                            <div className="text-xs text-gray-500">4 months ago</div>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < 4 ? starCls : "text-gray-300"}`} />
                            ))}
                        </div>
                        <p className="text-gray-600 text-sm mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </p>
                        <hr className="my-4 text-[#F4F7F9]" />
                    </div>
                ))}

                <div className="text-center">
                    <button className="px-5 py-2 cursor-pointer rounded-md text-[#BE968E] text-sm bg-[#F5F5F5]">View More Comments</button>
                </div>
            </div>


            {/* Similar Items */}
            <div className="my-10">
                <h3 className="text-lg font-semibold text-gray-800 mb-0">Similar Items</h3>
                <hr className="w-1/40 rounded-2xl text-[#BE968E] h-1 bg-[#BE968E] mb-10" />
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {names.map((i, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                            <div className="relative">
                                <img
                                    src={`/assets/home/${i}.svg`}
                                    alt="item"
                                    className="w-full h-44 object-contain bg-gray-50"
                                />
                                <button className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full shadow">
                                    <Heart className="w-4 h-4 text-[#b08a6d]" />
                                </button>
                            </div>
                            <div className="p-3">
                                <div className="text-sm font-medium text-gray-800 truncate">Stylish T-Shirt {i}</div>
                                <div className="mt-1">
                                    <span className="text-[#b08a6d] font-semibold">AED 500</span>
                                </div>
                                <div className="flex items-center gap-1 mt-1">
                                    {Array.from({ length: 5 }).map((_, idx) => (
                                        <Star key={idx} className={`w-3.5 h-3.5 ${idx < 4 ? starCls : "text-gray-300"}`} />
                                    ))}
                                    <span className="text-[11px] text-gray-500 ml-1">(45)</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination (arrows) */}
                <div className="flex items-center justify-center gap-3 mt-6">
                    <button aria-label="prev" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#E8EDF2] hover:bg-gray-300">
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button aria-label="next" className="w-9 h-9 flex items-center text-white  justify-center rounded-full  bg-[#BE968E] hover:bg-[#a47f72]">
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    </>;
}