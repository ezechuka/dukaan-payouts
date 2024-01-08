import { ChevronRight, HelpCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";

const Main = () => {
    return (
        <div className="flex flex-col py-[12px] px-[32px] bg-[#FAFAFA]">
            <div className="flex justify-between">
                <p className="font-normal text-[20px] text-black">Overview</p>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="This Month" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">This Month</SelectItem>
                        <SelectItem value="light">Next Month</SelectItem>
                        <SelectItem value="dark">Next 3 Months</SelectItem>
                        <SelectItem value="system">Next 6 Months</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex w-full space-x-4 justify-between">
                <div className="flex flex-col w-full max-w-[40%] pt-[20px] text-white rounded-md bg-[#146EB4]">
                    <div className="flex items-center space-x-3 px-[10px]">
                        <p className="font-normal text-base">Next Payout</p>
                        <HelpCircle className="w-4 h-4" />
                    </div>

                    <div className="flex items-center justify-between px-[10px]">
                        <p className="font-medium text-[32px]">₹2,312.23</p>
                        <p className="underline ml-auto">23 orders</p>
                        <ChevronRight className="w-4 h-4" />
                    </div>

                    <div className="rounded-sm bg-[#0E4F82] p-1 mt-5">
                        <p className="font-normal text-[14px]">Next payout date:</p>
                        <p className="font-medium text-[14px]">Today, 04:00PM</p>
                    </div>
                </div>

                <div className="flex flex-col h-[120px] justify-start items-start w-full bg-white rounded-md max-w-[30%] px-[10px] py-[20px] text-black">
                    <div className="flex items-center space-x-3">
                        <p className="font-normal text-[16px] text-[#4D4D4D]">Amount pending</p>
                        <HelpCircle className="w-4 h-4 text-[#4D4D4D]" />
                    </div>

                    <div className="flex w-full items-center justify-between">
                        <p className="font-medium text-[32px]">₹2,312.23</p>
                        <p className="underline text-blue-500 ml-auto">23 orders</p>
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                    </div>
                </div>

                <div className="flex flex-col h-[120px] justify-start items-start w-full bg-white rounded-md max-w-[30%] px-[10px] py-[20px] text-black">
                    <div className="flex items-center space-x-3">
                        <p className="font-normal text-[16px] text-[#4D4D4D]">Amount processed</p>
                        <HelpCircle className="w-4 h-4 text-[#4D4D4D]" />
                    </div>

                    <div className="flex w-full items-center justify-between">
                        <p className="font-medium text-[32px]">₹23,92,312.19</p>
                    </div>
                </div>

            </div>

            <p className="font-medium mt-10 text-[20px]">Transactions | This Month</p>

            <div className="flex space-x-4 mt-5">
                <div className="rounded-3xl bg-[#E6E6E6] p-2">
                    <p className="text-[#808080] font-medium text-[14px]">
                        Payouts (22)
                    </p>
                </div>

                <div className="rounded-3xl bg-[#146EB4] p-2">
                    <p className="text-white font-medium text-[14px]">
                        Payouts (22)
                    </p>
                </div>
            </div>

            <Input className="max-w-[30%] mt-5" placeholder="Order ID or transaction ID" />

            <div className="flex justify-between items-center bg-[#F2F2F2] p-3 mt-5">
                <p className="">Order ID</p>
                <p className="">Status</p>
                <p className="">Transaction ID</p>
                <p className="">Refund date</p>
                <p className="">Order amount</p>
            </div>

            <div className="flex justify-between items-center p-3">
                <p className="text-blue-500">#281209</p>
                <p className="">Successful</p>
                <p className="">131634495747</p>
                <p className="">Today, 08:45 PM</p>
                <p className="">₹1,125.00</p>
            </div>
            <div className="flex justify-between items-center p-3">
                <p className="text-blue-500">#281209</p>
                <p className="">Successful</p>
                <p className="">131634495747</p>
                <p className="">Today, 08:45 PM</p>
                <p className="">₹1,125.00</p>
            </div>
            <div className="flex justify-between items-center p-3">
                <p className="text-blue-500">#281209</p>
                <p className="">Successful</p>
                <p className="">131634495747</p>
                <p className="">Today, 08:45 PM</p>
                <p className="">₹1,125.00</p>
            </div>
            <div className="flex justify-between items-center p-3">
                <p className="text-blue-500">#281209</p>
                <p className="">Successful</p>
                <p className="">131634495747</p>
                <p className="">Today, 08:45 PM</p>
                <p className="">₹1,125.00</p>
            </div>

        </div>
    );
}

export default Main;