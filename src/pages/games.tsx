import GameCards from "@/components/gamecards";
import Navbar from "@/components/navbar";
import gameList from "@/data/robloxGameList";

export default function Games() {
    return (
      <div className='min-h-screen w-full bg-white font-body flex flex-col'>
        <section className='mt-8 mx-4 sm:mx-8'>
          <div className='max-w-[1900px] mx-auto bg-zinc-200/10 backdrop-blur-3xl rounded-xl p-4 sm:p-8'>
            <h2 className='text-xl sm:text-6xl font-semibold text-black/70 mb-4'>All Games</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-10 lg:gap-10'>
              {gameList.map((game) => (
                <GameCards key={game.gameURL} {...game} />
              ))}
            </div>
          </div>
        </section>
        <Navbar className='sticky bottom-3 mx-auto w-full max-w-[1700px] z-50 mt-8'/>
      </div>
    )
  }
