import { Banknote, BarChartBig, ChevronDown, Home, LayoutGrid, Megaphone, NotebookText, Palette, PercentCircle, Truck, Users, Wallet, Zap } from "lucide-react";

const Link = ({ icon, label }: { icon: React.ReactNode, label: string }) => {
    return (
        <div className="flex space-x-3 text-white">
            {icon}
            <p className="text-white">{label}</p>
        </div>
    )
}

const sidebarLinks = [
    {
        icon: <Home />,
        label: 'Home'
    },
    {
        icon: <NotebookText />,
        label: 'Orders'
    },
    {
        icon: <LayoutGrid />,
        label: 'Products'
    },
    {
        icon: <Truck />,
        label: 'Delivery'
    },
    {
        icon: <Megaphone />,
        label: 'Marketing'
    },
    {
        icon: <BarChartBig />,
        label: 'Analytics'
    },
    {
        icon: <Banknote />,
        label: 'Payouts'
    },
    {
        icon: <PercentCircle />,
        label: 'Discounts'
    },
    {
        icon: <Users />,
        label: 'Audience'
    },
    {
        icon: <Palette />,
        label: 'Appearance'
    },
    {
        icon: <Zap />,
        label: 'Plugins'
    },
]

const Sidebar = () => {
    return (
        <div className="flex flex-col bg-[#1E2640] p-[16px]">

            <div className="flex items-center mb-10">
                <img src="nav_icon.svg" />
                <div className="flex flex-col justify-between ml-5 mr-auto">
                    <p className="font-medium text-[#FFFFFF] text-[15px]">Nishyan</p>
                    <p className="underline text-[#FFFFFF] font-normal text-[13px]">Visit store</p>
                </div>
                <ChevronDown className="text-white" />
            </div>

            <div className="flex flex-col space-y-5">
                {
                    sidebarLinks.map(link => (
                        <Link icon={link.icon} label={link.label} />
                    ))
                }
            </div>

            <div className="flex mt-14 p-[12px] space-x-4 justify-start rounded-md bg-white/40">
                <div className="p-2 rounded-md bg-white/40">
                    <Wallet />
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