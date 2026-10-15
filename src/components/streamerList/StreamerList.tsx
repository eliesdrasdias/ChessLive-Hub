import StreamerCard from "../streamerCard/StreamerCard";
import type { Streamer } from "../../types";

interface StreamerListProps {
  dados: Streamer[];
}

function StreamerList({ dados }: StreamerListProps) {
  return (
    <div>
      <h2>Lista de Streamers</h2>

      {dados.map((streamerAtual) => {
        return (
          <StreamerCard
            key={streamerAtual.username}
            streamerData={streamerAtual}
          />
        );
      })}
    </div>
  );
}

export default StreamerList;
