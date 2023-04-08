const Header = () => {
  return (
    <div className="text-white text-sm flex justify-end gap-3 m-2 items-center">
      <div className="flex gap-3 px-1">
        <div className="hover:underline hover:cursor-pointer">Gmail</div>
        <div className="hover:underline hover:cursor-pointer ">Kuvahaku</div>
      </div>
      <div className="flex gap-2">
        <div className="rounded-full hover:bg-[#e8eaed]/10 hover:cursor-pointer p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 fill-[#e8eaed]"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />
          </svg>
        </div>
        <div className="rounded-full p-1 hover:bg-[#e8eaed]/10 hover:cursor-pointer">
          <img className="rounded-full" src="assets/asset 0.jpeg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
