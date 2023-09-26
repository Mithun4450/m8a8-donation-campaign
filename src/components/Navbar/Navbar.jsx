import { NavLink } from "react-router-dom";
import myLogo from "../../assets/Logo.png"



const Navbar = () => {
    return (
        <div className="max-w-7xl px-5 md:px-10 lg:px-16 mx-auto">
            <div className="navbar bg-base-100 py-9">
                <div className="flex-1">
                    <img className="h-9" src={myLogo} alt="" />
                </div>
                <div className="gap-4 ml-4 md:gap-9 z-10 ">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                        >
                        Home
                    </NavLink>
                
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                        >
                        Donation
                    </NavLink>
                
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                        >
                        Statistics
                    </NavLink>
                    
                    
                 
                </div>
            </div>
                            
        </div>
    );
};

export default Navbar;