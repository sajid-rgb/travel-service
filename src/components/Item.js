import React from 'react';
import cover2 from './images/cover2.jpg'
import cover3 from './images/cover3.jpg'
const Item = () => {
    return (
        <div>
            <div class="content">
                <div class="flex items-center  justify-between w-full my-4 pl-4 sm:pr-4">
                    <div class="mr-6">
                        <h2 class="text-3xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate">Who Serve you?</h2>
                        <div class="font-base tracking-tight text-gray-600">They are Master Class</div>
                    </div>
                </div>
                <div class="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                    <div class="flex flex-col">
                        <div class="bg-white shadow-md  rounded-3xl p-4">
                            <div class="flex-none lg:flex">
                                <div class=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                                    <img src={cover3}
                                        alt="Just a flower" class=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl" />
                                </div>
                                <div class="flex-auto ml-3 justify-evenly py-2">
                                    <div class="flex flex-wrap ">
                                        <div class="w-full flex-none text-xs text-blue-700 font-medium ">
                                            Engineer, Next IT
                            </div>
                                        <h2 class="flex-auto text-lg font-medium">Hrittik Roshan</h2>
                                    </div>
                                    <p class="mt-3"></p>
                                    <div class="flex py-4  text-sm text-gray-600">
                                        <div class="flex-1 inline-flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                                </path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                            <p class="">Pune,India</p>
                                        </div>
                                        <div class="flex-1 inline-flex items-center">

                                            <p class="">Join Date: 09-06-2021</p>
                                        </div>
                                    </div>
                                    <div class="flex p-4 pb-2 border-t border-gray-200 "></div>
                                    <div class="flex space-x-3 text-sm font-medium">
                                        <div class="flex-auto flex space-x-3">
                                            <button
                                                class="mb-2 md:mb-0 bg-white px-5 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                                                <span class="text-green-400 hover:text-green-500 rounded-lg">

                                                </span>
                                                <span>hrittik@gmail.com</span>
                                            </button>
                                        </div>
                                        <button
                                            class="mb-2 md:mb-0 bg-indigo-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-blue-800"
                                            type="button" aria-label="like">Contact Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col ">
                        <div class="bg-white shadow-md  rounded-3xl p-4">
                            <div class="flex-none lg:flex">
                                <div class=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                                    <img src={cover2} class=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl" />
                                </div>
                                <div class="flex-auto ml-3 justify-evenly py-2">
                                    <div class="flex flex-wrap ">
                                        <div class="w-full flex-none text-xs text-blue-700 font-medium ">
                                            Product Manger
                            </div>
                                        <h2 class="flex-auto text-lg font-medium">Hrittik Roshan</h2>
                                    </div>
                                    <p class="mt-3"></p>
                                    <div class="flex py-4  text-sm text-gray-600">
                                        <div class="flex-1 inline-flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                                </path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                            <p class="">Mumbai, India</p>
                                        </div>
                                        <div class="flex-1 inline-flex items-center">

                                            <p class="">Join Date: 09-06-2021</p>
                                        </div>
                                    </div>
                                    <div class="flex p-4 pb-2 border-t border-gray-200 "></div>
                                    <div class="flex space-x-3 text-sm font-medium">
                                        <div class="flex-auto flex space-x-3">
                                            <button
                                                class="mb-2 md:mb-0 bg-white px-5 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                                                <span class="text-green-400 hover:text-green-500 rounded-lg">

                                                </span>
                                                <span>Hrittik@gmail.com</span>
                                            </button>
                                        </div>
                                        <button
                                            class="mb-2 md:mb-0 bg-indigo-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-blue-800"
                                            type="button" aria-label="like">Contact Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Item;