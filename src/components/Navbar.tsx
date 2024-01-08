import { HelpCircle } from "lucide-react";
import { Input } from "./ui/input";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between py-[12px] px-[32px] border-b-[1px] border-b-[#D9D9D9]">
            {/* ITEM 1 */}
            <div className="flex items-center space-x-5">
                <p className="text-[20px] font-medium">Payouts</p>
                <div className="flex space-x-2 items-center">
                    <HelpCircle className="w-4 h-4 text-[#4D4D4D]" />
                    <p className="font-normal text-[12px] text-[#4D4D4D]">How it works?</p>
                </div>
            </div>

            {/*    ITEM 2 */}
            <Input className="max-w-[50%]" placeholder="Search features, tutorials, etc." />

            {/* ITEM 3 */}
            <div className="flex justify-between space-x-5">
                <div className="flex justify-center items-center rounded-full p-4 bg-[#E6E6E6]">
                    <img src={'nav-1.svg'} />
                </div>

                <div className="flex justify-center items-center rounded-full p-5 bg-[#E6E6E6]">
                    <img src={'nav-2.svg'} />
                </div>
            </div>
        </div>
    )
}

export default Navbar;