import { useEffect, useState } from "react";
import StreamerList from "./components/streamerList/StreamerList";
import type { Streamer, StreamersResponse } from "./types";
import Loading from "./components/loading/Loading";
import ErrorMessage from "./components/error/Error";

function App() {
  const [streamers, setStreamers] = useState<Streamer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStreamers = async () => {
      try {
        const response = await fetch("https://api.chess.com/pub/streamers");
        if (!response.ok) {
          throw new Error("Falha ao carregar os dados");
        }
        const data = (await response.json()) as StreamersResponse;
        setStreamers(data.streamers);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setIsLoading(false);
      }
    };

    fetchStreamers();
  }, []);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <h1>ChessLive Hub</h1>
      <StreamerList dados={streamers} />
    </div>
  );
}

export default App;
