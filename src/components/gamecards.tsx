import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { MagicCard } from "./ui/magic-card";
import { Link } from "react-router-dom";

export default function GameCards({
    category,
    gameImage,
    gameName,
    gameDescription,
    gameURL,
    gameRating
}: {
    gameImage: string, gameName: string, gameDescription: string, gameURL: string, gameRating: string, category: string[]}) {
    return (
        <MagicCard gradientColor="#ff3860" gradientOpacity={0.05} className="w-[450px] h-[300px] text-left mt-2">
            <div className='pb-4 flex flex-col justify-between h-full'>
                <div>
                    <div className="bg-no-repeat bg-center bg-cover rounded-t-md h-[130px] w-[450px]" style={{ backgroundImage: `url(${gameImage})` }} />
                    <div className='flex gap-2 mt-2 px-6'>
                        {category.map((category) => (
                            <Badge key={category} className="bg-black/20 pointer-events-none">{category}</Badge>
                        ))}
                    </div>
                    <div className="">
                        <h3 className='text-lg font-semibold text-black/70 mt-1 px-6'>{gameName}</h3>
                        <p className='text-sm text-black/70 mt-1 text-wrap max-w-[350px] px-6'>{gameDescription}</p>
                    </div>
                </div>
                <div className='flex justify-between gap-2 mt-2 px-6'>
                    <div className="flex gap-2">
                        <Link to={`/game/${encodeURIComponent(gameName)}`}><Button className="sticky">See Reviews</Button></Link>
                        <a href={gameURL} target="_blank"><Button className="sticky bg-red-100/10" variant="outline">Play Now</Button></a>
                    </div>
                    <div>
                        <Badge className="bg-green-500 h-8 mt-1 pointer-events-none">{gameRating}</Badge>
                    </div>
                </div>
            </div>
        </MagicCard>
    )
}
