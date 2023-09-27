import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  const flexbetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  return (
    <nav>
      <div
        className={`${navBackground} ${flexbetween} fixed top-0 z-60 w-full py-6`}
      >
        <div className={`${flexbetween} mx-auto w-5/6 `}>
          <div className={`${flexbetween} w-full gap-16`}>
            {/* Left side */}
            <img src={Logo} alt="brand-logo" />
            {/* Right Side */}
            {isAboveMediumScreen ? (
              <div className={`${flexbetween} w-full `}>
                <div className={`${flexbetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexbetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button className="rounded-full bg-yellow-500 p-2">
                <Bars3Icon
                  className="w-6 h-6 text-white"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* MObile Menu */}
      {!isAboveMediumScreen && isMenuToggled && (
        <div
          className={`fixed right-0 bottom-0 h-full z-40 w-[300px] bg-primary-100 transition-transform ${
            isMenuToggled ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Icon */}
          <div className="p-12 flex justify-end">
            <XMarkIcon
              className="w-6 h-6 text-gray-400"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            />
          </div>
          <div className={`ml-[33%] flex flex-col gap-10 text-sxl`}>
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
