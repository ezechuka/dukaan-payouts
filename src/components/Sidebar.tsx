import { ChevronDown } from "lucide-react";

const Link = ({ imgSrc, label }: { imgSrc: string, label: string }) => {
    return (
        <div className="flex space-x-3 text-white">
            <img src={imgSrc} className="w-5 h-5" />
            <p className="text-white">{label}</p>
        </div>
    )
}

const sidebarLinks = [
    {
        icon: 'home.svg',
        label: 'Home'
    },
    {
        icon: 'orders.svg',
        label: 'Orders'
    },
    {
        icon: 'products.svg',
        label: 'Products'
    },
    {
        icon: 'delivery.svg',
        label: 'Delivery'
    },
    {
        icon: 'marketing.svg',
        label: 'Marketing'
    },
    {
        icon: 'analytics.svg',
        label: 'Analytics'
    },
    {
        icon: 'payouts.svg',
        label: 'Payouts'
    },
    {
        icon: 'discounts.svg',
        label: 'Discounts'
    },
    {
        icon: 'audience.svg',
        label: 'Audience'
    },
    {
        icon: 'appearance.svg',
        label: 'Appearance'
    },
    {
        icon: 'plugin.svg',
        label: 'Plugins'
    },
]

const Sidebar = () => {
    return (
        <div className="flex flex-col bg-[#1E2640] p-[16px]">

            <div className="flex items-center mb-10">
                <img src="nav_icon.png" />
                <div className="flex flex-col justify-between space-y-2 ml-5 mr-auto">
                    <p className="font-medium text-[#FFFFFF] text-[15px]">Nishyan</p>
                    <p className="underline text-[#FFFFFF] font-galano500 font-normal text-[13px]">Visit store</p>
                </div>
                <ChevronDown className="text-white" />
            </div>

            <div className="flex flex-col space-y-5">
                {
                    sidebarLinks.map(link => (
                        <Link imgSrc={link.icon} label={link.label} />
                    ))
                }
            </div>

            <div className="flex mt-14 p-[12px] space-x-4 justify-start rounded-md bg-white/40">
                <div className="flex items-center px-2 rounded-md bg-white/40">
                    <img src="wallet.svg" className="w-6 h-6" />
                </div>

                <div className="flex flex-col text-white">
                    <p className="font-normal text-[13px]">Available credits</p>
                    <p className="font-medium text-[16px]">222.10</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;