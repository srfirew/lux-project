"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/20 px-3 ">
          {/* Site branding */}
          <div className="relative z-10 flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="relative z-10 flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/signin"
                className="btn-sm bg-black bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                <span className="relative z-10">Login</span>
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                <span className="relative z-10">Registro</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
