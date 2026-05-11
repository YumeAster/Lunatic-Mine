import type { LucideIcon } from "lucide-react";

type SidebarItemProps = {
    label: string;
    icon: LucideIcon;
    active: boolean;
    onClick: () => void;
};

function SidebarItem({
    label,
    icon: Icon,
    active,
    onClick,
}: SidebarItemProps) {
    return(
        <button
            onClick={onClick}
            className={
                `flex items-center gap-3 rounded-lg px-3 py-2 ${
                    active
                        ? "bg-zinc-900 text-white"
                        : "text-zinc-700 hover:bg-zinc-100"
                }`
            }
        >
            <Icon size={18} />
            <span>{label}</span>
        </button>
    );
}

export default SidebarItem;