import React, { useState } from "react";
import { HeroImg } from "../assets";
import Banner from "./Home/ui/Banner";

const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <>
<Banner page={"Price"} />
      <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
        <div className="h-full">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl text-gray-800 font-bold text-center mb-4">
              Plans
            </h2>
            <div className="flex justify-center">
              <div className="flex items-center space-x-3 mb-8">
                <div className="text-sm text-gray-500 font-medium min-w-[120px] text-right">
                  Monthly
                </div>
                <div className="relative select-none w-[44px]">
                  <input
                    type="checkbox"
                    id="toggle"
                    className="peer sr-only"
                    checked={annual}
                    onChange={() => setAnnual(!annual)}
                  />
                  <label
                    className="block overflow-hidden cursor-pointer h-6 rounded-full bg-gray-400 peer-checked:bg-indigo-500"
                    htmlFor="toggle"
                  >
                    <span
                      className="absolute block rounded-full w-5 h-5 top-0.5 left-0.5 right-1/2 bg-white shadow-sm transition-all duration-150 ease-out"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Pay annually</span>
                  </label>
                </div>
                <div className="text-sm text-gray-500 font-medium min-w-[120px]">
                  Annually <span className="text-green-500">(-20%)</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
              {/* Plan 1 */}
              <div className="relative col-span-full md:col-span-4 bg-white shadow-md rounded-sm border border-gray-200">
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 bg-green-500"
                  aria-hidden="true"
                ></div>
                <div className="px-5 pt-5 pb-6 border-b border-gray-200">
                  <header className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full flex-shrink-0 bg-gradient-to-tr from-green-500 to-green-300 mr-3">
                      <svg
                        className="w-6 h-6 fill-current text-white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                      </svg>
                    </div>
                    <h3 className="text-lg text-gray-800 font-semibold">
                      Basic
                    </h3>
                  </header>
                  <div className="text-sm mb-2">
                    Ideal for individuals that need a custom solution with
                    custom tools.
                  </div>
                  <div className="text-gray-800 font-bold mb-4">
                    <span className="text-2xl">$</span>
                    <span className="text-3xl">{annual ? "14" : "19"}</span>
                    <span className="text-gray-500 font-medium text-sm">
                      /mo
                    </span>
                  </div>
                  <button className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-gray-200 rounded leading-5 shadow-sm transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 hover:border-gray-300 text-gray-600 w-full">
                    Downgrade
                  </button>
                </div>
                <div className="px-5 pt-4 pb-5">
                  <div className="text-xs text-gray-800 font-semibold uppercase mb-4">
                    What's included
                  </div>
                  <ul>
                    <li className="flex items-center py-1">
                      <svg
                        className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Lorem ipsum dolor sit amet</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg
                        className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Quis nostrud exercitation</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg
                        className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Lorem ipsum dolor sit amet</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg
                        className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Quis nostrud exercitation</div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Plan 2 */}
              <div className="relative col-span-full md:col-span-4 bg-white shadow-md rounded-sm border border-gray-200">
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 bg-indigo-500"
                  aria-hidden="true"
                ></div>
                <div className="px-5 pt-5 pb-6 border-b border-gray-200">
                  <header className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full flex-shrink-0 bg-gradient-to-tr from-indigo-500 to-indigo-300 mr-3">
                      <svg
                        className="w-6 h-6 fill-current text-white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                      </svg>
                    </div>
                    <h3 className="text-lg text-gray-800 font-semibold">Pro</h3>
                  </header>
                  <div className="text-sm mb-2">
                    Perfect for small teams that need access to more advanced
                    tools and features.
                  </div>
                  <div className="text-gray-800 font-bold mb-4">
                    <span className="text-2xl">$</span>
                    <span className="text-3xl">{annual ? "29" : "39"}</span>
                    <span className="text-gray-500 font-medium text-sm">
                      /mo
                    </span>
                  </div>
                  <button className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-gray-200 rounded leading-5 shadow-sm transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 hover:border-gray-300 text-gray-600 w-full">
                    Upgrade
                  </button>
                </div>
                <div className="px-5 pt-4 pb-5">
                  <div className="text-xs text-gray-800 font-semibold uppercase mb-4">
                    What's included
                  </div>
                  <ul>
                    <li className="flex items-center py-1">
                      <svg
                        className="w-3 h-3 flex-shrink-0 fill-current text-indigo-500 mr-2"
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Additional feature 1</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg
                        className="w-3 h-3 flex-shrink-0 fill-current text-indigo-500 mr-2"
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Additional feature 2</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg
                        className="w-3 h-3 flex-shrink-0 fill-current text-indigo-500 mr-2"
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Additional feature 3</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg
                        className="w-3 h-3 flex-shrink-0 fill-current text-indigo-500 mr-2"
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Additional feature 4</div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Plan 3 */}
              <div className="relative col-span-full md:col-span-4 bg-white shadow-md rounded-sm border border-gray-200">
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 bg-blue-500"
                  aria-hidden="true"
                ></div>
                <div className="px-5 pt-5 pb-6 border-b border-gray-200">
                  <header className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full flex-shrink-0 bg-gradient-to-tr from-blue-500 to-blue-300 mr-3">
                      <svg
                        className="w-6 h-6 fill-current text-white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                      </svg>
                    </div>
                    <h3 className="text-lg text-gray-800 font-semibold">
                      Enterprise
                    </h3>
                  </header>
                  <div className="text-sm mb-2">
                    For large organizations needing the best tools and premium
                    support.
                  </div>
                  <div className="text-gray-800 font-bold mb-4">
                    <span className="text-2xl">$</span>
                    <span className="text-3xl">{annual ? "59" : "79"}</span>
                    <span className="text-gray-500 font-medium text-sm">
                      /mo
                    </span>
                  </div>
                  <button className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-gray-200 rounded leading-5 shadow-sm transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 hover:border-gray-300 text-gray-600 w-full">
                    Get started
                  </button>
                </div>
                <div className="px-5 pt-4 pb-5">
                  <div className="text-xs text-gray-800 font-semibold uppercase mb-4">
                    What's included
                  </div>
                  <ul>
                    <li className="flex items-center py-1">
                      <svg
                        className="w-3 h-3 flex-shrink-0 fill-current text-blue-500 mr-2"
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Premium feature 1</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg
                        className="w-3 h-3 flex-shrink-0 fill-current text-blue-500 mr-2"
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Premium feature 2</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg
                        className="w-3 h-3 flex-shrink-0 fill-current text-blue-500 mr-2"
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Premium feature 3</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg
                        className="w-3 h-3 flex-shrink-0 fill-current text-blue-500 mr-2"
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Premium feature 4</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;