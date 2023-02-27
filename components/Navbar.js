import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
   AiOutlineShoppingCart,
   AiOutlinePlusCircle,
   AiOutlineMinusCircle,
} from "react-icons/ai";
import { FaRegWindowClose } from "react-icons/fa";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
   const [translateCart, setTranslateCart] = useState("translate-x-full");
   const [translate, setTranslate] = useState(false);
   const toggleCart = () => {
      setTranslate(true);
   };
   useEffect(() => {
      if (translate) {
         if (translateCart === "translate-x-full")
            setTranslateCart("translate-x-0");
         else setTranslateCart("translate-x-full");
         setTranslate(false);
      }
   }, [translate, translateCart]);

   return (
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between py-2 bg-slate-50 sticky top-0">
         <div className="logo mx-5">
            <Link href="/">
               <Image
                  src="/logo.png"
                  width={200}
                  height={30}
                  alt="Manish-Ecommerce"
               />
            </Link>
         </div>
         <div className="nav">
            <ul className="flex items-center font-normal space-x-3 md:space-x-8">
               <Link href="/laptops">
                  <li>Laptops</li>
               </Link>
               <Link href="/monitors">
                  <li>Monitors</li>
               </Link>
               <Link href="/stickers">
                  <li>Stickers</li>
               </Link>
               <Link href="/hoodies">
                  <li>Hoodies</li>
               </Link>
            </ul>
         </div>
         <div
            onClick={toggleCart}
            className="cart absolute right-2 md:relative"
         >
            <AiOutlineShoppingCart className="text-xl md:text-3xl cursor-pointer" />
         </div>

         <div
            className={`z-50  h-[100vh] sideCart absolute top-0 right-0 bg-yellow-200 px-4 py-10 transform transition-transform ${translateCart}`}
         >
            <h2 className="text-center font-bold text-xl">Shopping cart</h2>
            <span
               onClick={toggleCart}
               className="absolute top-2 right-2 cursor-pointer text-slate-500 text-xl hover:text-slate-400"
            >
               <FaRegWindowClose />
            </span>
            <ol className="mt-5">
               {Object.keys(cart).length == 0 && (
                  <div className="my-3 text-center font-normal">
                     Cart is empty!
                  </div>
               )}
               {Object.keys(cart).map((k) => {
                  return (
                     <li key={k} className="flex my-3">
                        <div className="product__name w-2/3 font-semibold">
                           {cart[k].name}
                        </div>
                        <div className="product__quantity w-1/3 flex items-center justify-center space-x-2">
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
            <div className="cart__buttons flex">
               <Link href={"/checkout"}>
                  <button className="flex mx-auto text-white bg-orange-400 border-0 py-1 px-2 focus:outline-none hover:bg-orange-300 rounded">
                     Checkout
                  </button>
               </Link>
               <button
                  onClick={clearCart}
                  className="flex mx-auto text-white bg-orange-400 border-0 py-1 px-2 focus:outline-none hover:bg-orange-300 rounded"
               >
                  Clear cart
               </button>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
