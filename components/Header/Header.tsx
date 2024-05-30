"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import urls from "@/lib/urls";
import useUser from "@/lib/hooks/useUser";
import Image from "next/image";
import { UserPayload } from "@/lib/utils/server/auth";

const navigation = (user?: UserPayload, logout?: () => void) => [
  //   { name: "Demo", href: urls.demo() },
  { name: "Home", href: urls.home() },
  { name: "Authors", href: urls.authors() },
  { name: "Books", href: urls.books() },
  {
    name: "About",
    render: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
        />
      </svg>
    ),
    href: urls.about(),
  },
  user
    ? { name: "Logout", href: "", onClick: () => logout && logout() }
    : {
        name: "Login",
        href: urls.login(),
      },
];

const authorNavigation = [
  { name: "My Profile", href: urls.myProfile() },
  { name: "My Books", href: urls.myBooks() },
];

export default function Header() {
  const pathname = usePathname();

  const { user, logout } = useUser();
  const customNavigation = navigation(user, logout);

  return (
    <>
      <div className="sticky top-0" style={{ zIndex: 1000 }}>
        <header className="inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
          <nav
            className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex items-center justify-between">
              <a
                className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href={urls.home()}
                aria-label="Brand"
              >
                Look-a-Book
              </a>
              <div className="sm:hidden">
                <button
                  type="button"
                  className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  data-hs-collapse="#navbar-collapse-with-animation"
                  aria-controls="navbar-collapse-with-animation"
                  aria-label="Toggle navigation"
                >
                  <svg
                    className="hs-collapse-open:hidden flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" x2="21" y1="6" y2="6"></line>
                    <line x1="3" x2="21" y1="12" y2="12"></line>
                    <line x1="3" x2="21" y1="18" y2="18"></line>
                  </svg>
                  <svg
                    className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div
              id="navbar-collapse-with-animation"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
            >
              <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
                {/* <a
                  className="font-medium text-blue-600 sm:py-6 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                  aria-current="page"
                >
                  Home
                </a> */}

                {customNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={item.onClick}
                    className={`font-medium sm:py-6 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 ${pathname === item.href ? "text-blue-600 dark:text-blue-500" : "text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"}`}
                  >
                    {item.render || item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </header>
        {/* <div className="bg-gradient-to-r from-purple-600 to-blue-400 py-0.5"></div> */}
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-blue-400">
        <div className="max-w-[85rem] px-4 py-2 sm:px-6 lg:px-8 mx-auto">
          <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
            <div className="text-center md:text-start md:order-2 md:flex md:justify-end md:items-center">
              <p className="me-5 inline-block text-sm font-semibold text-white">
                Ready to get started?
              </p>
              <a
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border-2 border-white text-white hover:border-white/70 hover:text-white/70 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href={urls.createBook()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>
                Create a book
              </a>
            </div>

            <div className="flex items-center">
              {user && (
                <>
                  <Image
                    className="rounded-full size-8 mr-2"
                    src={/*user.picture ||*/ "/avatar.png"}
                    alt="Image Description"
                    height={32}
                    width={32}
                  />
                  {authorNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm ${pathname === item.href ? "opacity-100" : "opacity-75"}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  {/* <span className="inline-block border-e border-white/[.3] w-px h-5 mx-2"></span> */}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
