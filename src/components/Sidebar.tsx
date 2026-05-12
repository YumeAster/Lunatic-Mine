import { Hammer, Pentagon, Radius } from "lucide-react";
import SidebarItem from "./SidebarItem";

export type TabKey =
    "upgrade" |
    "pointUpgrade" |
    "udUpgrade";

type SidebarProps = {
    currentTab: TabKey;
    onTabChange: (tab: TabKey) => void;
}

const menuItems = [
    {
        key: "upgrade" as const,
        label: "일반 강화",
        icon: Hammer,
    },
    {
        key: "pointUpgrade" as const,
        label: "포인트 업그레이드",
        icon: Radius,
    },
    {
        key: "udUpgrade" as const,
        label: "UD 업그레이드",
        icon: Pentagon,
    }
];

function Sidebar({ currentTab, onTabChange }: SidebarProps) {
    return (
        <aside className="w-56 border-r bg-zinc-900 p-4">
            <div className="mb-4 text-sm font-semibold text-zinc-500">메뉴</div>

            <div className="flex flex-col gap-2">
                {menuItems.map((item) => (
                    <SidebarItem
                        key={item.key}
                        label={item.label}
                        icon={item.icon}
                        active={currentTab === item.key}
                        onClick={() => onTabChange(item.key)}
                    />
                ))}
            </div>
        </aside>
    )
}

export default Sidebar;