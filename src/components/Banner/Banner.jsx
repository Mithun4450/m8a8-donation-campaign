import myBanner from "../../assets/Rectangle 4281.png"
const Banner = () => {
    return (
        <div className="mb-9 ">
            <div className=" h-[60vh] relative">
                <img className="h-[60vh] w-full opacity-5 z-0 -mt-24  " src={myBanner} alt="" />
                <h1 className="absolute top-24 md:top-24 lg:top-28 left-12 md:left-40 lg:left-72 text-xl md:text-2xl lg:text-4xl font-bold">I Grow By Helping People In Need</h1>
                <div className="absolute w-3/4 md:w-1/2 lg:w-1/3 flex top-36 md:top-36 lg:top-44 left-12 md:left-40 lg:left-80">
                    <input type="text" placeholder="Search here...." className="w-3/4 px-3 py-1 md:px-5 md:py-2 rounded-l-lg" />
                    <button className="bg-[#FF444A] text-white w-1/4 md:px-5 md:py-2 rounded-r-lg">Search</button>
                </div>

            </div>
            
        </div>
    );
};

export default Banner;