import { Card } from "./ui/card";

type PickaxeCardProps = {
    name: string;
    level: number;
    imageSrc: string;
}

function PickaxeCard({ name, level, imageSrc }: PickaceCardProps) {
    return (
        <div className="flex flex-col items-center justify-center">
            <Card className="w-full max-w-md rounded-2xl bg-zinc-900 text-zinc-100 border border-zinc-800">
                <div className="flex flex-col items-center gap-4 p-12">
                    <img
                        src={imageSrc}
                        alt={name}
                        className="h-32 w-32 object-contain"
                    />
                </div>
            </Card>

            <br/>

            <h2 className="text-xl fond-bold">{name}</h2>
            <p className="text-zinc-400">현재 강화 단계: +{level}</p>
        </div>
    )
}

export default PickaxeCard;