// Import everything needed to use the `useQuery` hook
import MovieSearch from './components/movieSearch';

export default function App() {
  return (
    <div>
      <MovieSearch style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }}/>
    </div>
  );
}
