'use client';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { FaDollarSign } from 'react-icons/fa';
import { BsBank2 } from 'react-icons/bs';

export default function SmNav() {
  return (
    <div className="fixed top-20 left-0 w-full h-full z-50 bg-slate-500/30 backdrop-blur-sm duration-500 transition-opacity ease-in-out">
      <AnimatePresence>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className=""
        >
          <ul className="w-full flex gap-4 flex-col items-center mt-8 px-4">
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xl text-secondary w-full"
            >
              <button
                type="button"
                className="w-full px-4 py-2 text-lg font-semibold border border-secondary rounded-lg text-white bg-secondary transition-all duration-200 ease-in-out"
              >
                ENQUIRE NOW
              </button>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-xl text-secondary w-full flex items-center rounded-lg overflow-hidden mt-2"
            >
              <input
                type="text"
                className="w-full h-10 px-2 py-2 border-none text-sm outline-none text-slate-900"
                name=""
                placeholder="e.g Dubai, UAE"
                id=""
              />
              <button
                type="submit"
                className=" bg-primary text-white rounded-r-lg p-1 h-10"
              >
                <IoSearch size={24} />
              </button>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="text-xl text-secondary w-full mt-8"
            >
              <Link
                href="/"
                className="w-full flex justify-center items-center"
              >
                <span className="text-white uppercase font-bold flex items-center gap-3">
                  <FaDollarSign size={24} />
                  <span className="">Compare Prices</span>
                </span>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="text-xl text-secondary w-full "
            >
              <Link
                href="/"
                className="w-full flex justify-center items-center"
              >
                <span className="text-white uppercase font-bold flex items-center gap-3">
                  <BsBank2 size={24} />
                  <span className="">Home Loans</span>
                </span>
              </Link>
            </motion.li>
          </ul>
        </motion.nav>
      </AnimatePresence>
    </div>
  );
}
