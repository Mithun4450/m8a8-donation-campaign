import myBanner from "../../assets/Rectangle 4281.png"
const Banner = () => {
    return (
        <div className="mb-9 ">
            <div className=" h-[60vh] relative">
                <img className="h-[60vh] w-full opacity-5 z-0 -mt-24  " src={myBanner} alt="" />
                <h1 className="absolute top-1/3 left-9 md:left-1/4 text-base md:text-2xl lg:text-4xl font-bold">I Grow By Helping People In Need</h1>
                <div className="absolute mx-auto bottom-1/4 left-12 md:left-1/3 flex flex-col md:flex-row ">
                    <input type="text" placeholder="Type here" className="input input-bordered sm:w-1/4 max-w-xs" />
                    <button className="btn btn-secondary">Secondary</button>
                </div>

            </div>
            
        </div>
    );
};

export default Banner;