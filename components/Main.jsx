import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-10 mb-32">

      {/* LOGO */}
      <div className="mb-6">
        <img className="h-24" src="assets/asset 1.png" />
      </div>

      {/* SEARCH BAR */}
      <div className="items-center w-full sm:w-140 relative rounded-full border border-greyLight hover:bg-greyDark hover:border-greyDark hover:shadow-md">

        {/* ICONS INSIDE SEARCH BAR */}
        <div className="flex justify-between pointer-events-none absolute inset-0 w-full px-4">

          {/* LEFT */}
          <div className="flex items-center">
            <svg
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 fill-grey"
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <div>
              <img src="assets/asset 6.png" alt="kb" />
            </div>
            <div>
              <img className="h-6" src="assets/asset 11.svg" alt="" />
            </div>
            <div>
              <img className="h-6" src="assets/asset 12.svg" alt="" />
            </div>
          </div>
        </div>

        {/* INPUT */}
        <input
          className="bg-transparent w-full p-2.5 pl-12 pr-40 outline-none text-white"
          type="text"
        ></input>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-3 py-8">
        <Button text="Google-haku"/>
        <Button text="Kokeilen onneani"/>
      </div>
      <div className="text-xs text-grey">Googlen versiot: <Link className="text-[#8ab4f8]" href="https://google.se">svenska</Link></div>
    </div>
  );
};

export default Main;
