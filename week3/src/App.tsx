import { AppleButton } from "./components/AppleButton";
import { AppleBasket } from "./components/AppleBasket";
import { MovieList } from "./components/MovieList";

function App() {
  return (
    <div className="p-6 space-y-8">
      
      <div>
        <h2 className="text-xl font-bold mb-2">🍎 Apple Demo</h2>
        <AppleButton />
        <AppleBasket />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">🎬 Movie List</h2>
        <MovieList />
      </div>

    </div>
  );
}

export default App;