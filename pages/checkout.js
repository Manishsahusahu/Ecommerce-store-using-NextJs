import Link from "next/link";
import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegWindowClose } from "react-icons/fa";

const Checkout = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
    return (
        <div className="container p-5 sm:m-auto text-xl">
            <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
            <h2 className="font-bold text-xl">1. Delivery details</h2>
            <div className="mx-auto my-4 flex">
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label
                            htmlFor="text"
                            className="leading-7 text-sm text-gray-600"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="leading-7 text-sm text-gray-600"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                </div>
            </div>
            <div className="px-2 w-full">
                <div className="mb-4">
                    <label
                        htmlFor="address"
                        className="leading-7 text-sm text-gray-600"
                    >
                        Address
                    </label>
                    <textarea
                        cols="30"
                        rows="2"
                        id="address"
                        name="address"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    ></textarea>
                </div>
            </div>
            <div className="mx-auto my-4 flex">
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label
                            htmlFor="phone"
                            className="leading-7 text-sm text-gray-600"
                        >
                            Phone
                        </label>
                        <input
                            type="phone"
                            id="phone"
                            name="phone"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label
                            htmlFor="city"
                            className="leading-7 text-sm text-gray-600"
                        >
                            City
                        </label>
                        <input
                            type="city"
                            id="city"
                            name="emcityail"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                </div>
            </div>
            <div className="mx-auto my-4 flex">
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label
                            htmlFor="state"
                            className="leading-7 text-sm text-gray-600"
                        >
                            State
                        </label>
                        <input
                            type="state"
                            id="state"
                            name="state"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className="mb-4">
                        <label
                            htmlFor="pincode"
                            className="leading-7 text-sm text-gray-600"
                        >
                            Pincode
                        </label>
                        <input
                            type="pincode"
                            id="pincode"
                            name="pincode"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                </div>
            </div>

            <h2 className="font-bold text-xl">2. Review Cart</h2>
            <div className="bg-orange-200 p-1">
                <ol className="mt-5">
                    {Object.keys(cart).length == 0 && (
                        <div className="my-3 text-center font-normal">
                            Cart is empty!
                        </div>
                    )}
                    {Object.keys(cart).map((k) => {
                        return (
                            <li key={k} className="flex my-3 space-x-5">
                                <div className="product__name font-semibold">
                                    {cart[k].name}
                                </div>
                                <div className="product__quantity flex items-center justify-center space-x-2">
                                    <AiOutlineMinusCircle
                                        onClick={() => {
                                            removeFromCart(k, 1);
                                        }}
                                        className="cursor-pointer"
                                    />
                                    <span>{cart[k].qty}</span>
                                    <AiOutlinePlusCircle
                                        onClick={() => {
                                            addToCart(
                                                k,
                                                1,
                                                499,
                                                "Accha Monitor",
                                                "43 inch",
                                                "Silver"
                                            );
                                        }}
                                        className="cursor-pointer"
                                    />
                                </div>
                            </li>
                        );
                    })}
                </ol>
                <div className="subtotal_checkout">
                    <span className="font-medium">Total: ₹</span>
                    {subTotal}
                </div>
            </div>
            <Link href={"/checkout"}>
                <button className="flex mx-auto my-2 text-white bg-orange-400 border-0 py-1 px-4 focus:outline-none hover:bg-orange-300 rounded">
                    Pay
                </button>
            </Link>
        </div>
    );
};

export default Checkout;
