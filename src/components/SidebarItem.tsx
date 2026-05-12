import type { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";

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
        <Button
            onClick={onClick}
            className={
                `flex items-center gap-3 rounded-lg px-3 py-2 h-10 ${
                    active
                        ? "bg-zinc-100 text-zinc-900"
                        : "text-zinc-100 hover:bg-zinc-800"
                }`
            }
        >
            <Icon size={18} />
            <span>{label}</span>
        </Button>
    );
}

export default SidebarItem;