import Navbar from '@/components/navbar'
import MainHeader from '@/components/mainheader'
import GameCards from '@/components/gamecards'
import gameList from "@/data/robloxGameList";
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'
import feature from '@/data/siteFeatures'
import ShinyButton from '@/components/ui/shiny-button'
import { GameForm } from '@/components/gameform'

export default function Home() {
    return (
        <div className='min-h-screen w-full bg-white font-body flex flex-col'>
        <section className='flex-grow flex items-center justify-center p-4 sm:p-8'>
            <div className='w-full max-w-[1700px] text-center'>
            <MainHeader />
            </div>
        </section>

        <section id="categories-bentogrid" className='mt-8 mx-4 sm:mx-8'>
                <div className='max-w-[1900px] mx-auto bg-zinc-200/10 backdrop-blur-3xl rounded-xl p-4 sm:p-8'>
                    <h2 className='text-xl sm:text-6xl font-semibold text-black/70 mb-4 text-center my-2'>We Got Everyone Covered!</h2>
                    <p className="text-xl sm:text-2xl md:text-2xl font-medium text-gray-400 max-w-3xl mx-auto leading-tight text-center my-4">
                    you can filter and find your favorite category of games that you love and believe is
                    <span className="text-rose-400"> underrated af</span>
                    </p>
                    <div className='max-w-[1700px] mx-auto'>
                        <BentoGrid className='lg:row-span-2'>
                        {feature.map((feature) => (
                            <BentoCard key={feature.name} {...feature} />
                        ))}
                        </BentoGrid>
                    </div>
                </div>
        </section>

        <section id="latest-reviews" className='mt-8 mx-4 sm:mx-8'>
            <div className='max-w-[1900px] mx-auto bg-zinc-200/10 backdrop-blur-3xl rounded-xl p-4 sm:p-8 flex items-center flex-col'>
            <h2 className='text-xl sm:text-2xl font-semibold text-black/70 mb-4 text-center'>Highly Recommended</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 overflow-x-auto pb-4 row-end-2 mt-2'>
                {gameList.map((game) => (
                <GameCards
                    key={game.gameURL}
                    gameName={game.gameName}
                    gameImage={game.gameImage}
                    gameDescription={game.gameDescription}
                    gameURL={game.gameURL}
                    category={game.category}
                    gameRating={game.gameRating}
                />
                ))}
            </div>
            <div className='flex flex-col items-center mt-4'>
                <a href="/games"><ShinyButton className='mx-auto'>View All</ShinyButton></a>
            </div>
            </div>
        </section>

        <section id="submit-game" className='mt-8 mx-4 sm:mx-8'>
            <div className='max-w-[1900px] mx-auto bg-zinc-200/10 backdrop-blur-3xl rounded-xl p-4 sm:p-8'>
                <h2 className='text-xl sm:text-6xl font-semibold text-black/70 mb-4 text-center my-2'>Found An Amazing Game?</h2>
                <p className="text-xl sm:text-2xl md:text-2xl font-medium text-gray-400 max-w-3xl mx-auto leading-tight text-center my-4">
                    Found a game you think deserves more players? Submit it here and we will add it for others to review!
                </p>
                <GameForm />
            </div>
        </section>

        <Navbar className='sticky bottom-3 mx-auto w-full max-w-[1700px] z-50 mt-8'/>
        </div>
    )
}
