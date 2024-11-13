import { useParams, useNavigate } from 'react-router-dom';
import gameList from '@/data/robloxGameList';
import { Button } from '@/components/ui/button';
import { Comments } from '@/components/comments';

interface GameReviewPageProps {
  games?: typeof gameList;
}

const GameReviewPage = ({ games = gameList }: GameReviewPageProps) => {
  const { gameName } = useParams();
  const navigate = useNavigate();

  // Decode URL parameter and find game
  const decodedGameName = decodeURIComponent(gameName || '');
  const game = games.find(g => g.gameName === decodedGameName);

  if (!game) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Game not found</h1>
        <Button onClick={() => navigate('/games')}>
          Return to Games
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative h-[300px]">
          <img
            src={game.gameImage}
            alt={game.gameName}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{game.gameName}</h1>
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {game.category}
            </span>
          </div>
          <p className="text-gray-600 mb-6">{game.gameDescription}</p>

          <div className="flex justify-between items-center">
            <Button
              onClick={() => window.open(game.gameURL, '_blank')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Play Game
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/games')}
            >
              Back to Games
            </Button>
          </div>

          {/* Add Comments section */}
            <div className="mt-8 border-t pt-8">
                <h2 className="text-2xl font-bold mb-4">Comments</h2>
                <Comments gameName={game.gameName} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default GameReviewPage;
