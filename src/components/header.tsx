type HeaderProps = {
    point: number;
    ud: number;
};

function Header({ point, ud }: HeaderProps) {
    return (
        <header className="h-16 border-b bg-white flex items-center justify-between px-6">
            <div className="text-2xl font-bold">Lunatic Mine</div>

            <div className="flex items-center gap-4 text-sm">
                <div>Point: {point}</div>
                <div>UD: {ud}</div>
            </div>
        </header>
    )
}

export default Header;