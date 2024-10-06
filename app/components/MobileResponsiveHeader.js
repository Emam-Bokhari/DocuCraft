import Image from "next/image";
import { Fragment } from "react";

export default function MobileResponsiveHeader(){
    return(
        <Fragment>
            <div className="flex items-center gap-5 lg:hidden ">
              <button
                type="button"
                className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
                aria-label="Toggle navigation"
              >
                <Image
                  src="/hamburger.svg"
                  width={16}
                  height={16}
                  alt="Menu"
                  className="w-2.5 stroke-zinc-900 dark:stroke-white"
                />
              </button>
              <a aria-label="Home" href="/">
                <Image
                 width={100}
                 height={24}
                  src="/logo.svg"
                  alt="Protocol"
                  className="h-6 "
                />
              </a>
            </div>
        </Fragment>
    )
}