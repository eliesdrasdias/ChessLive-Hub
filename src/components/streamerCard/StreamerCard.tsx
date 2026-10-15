import type { Streamer } from "../../types";

interface StreamerCardProps {
  streamerData: Streamer;
}

function StreamerCard({ streamerData }: StreamerCardProps) {
  const { username, avatar, twitch_url, is_live } = streamerData;

  return (
    <div>
      <h3>{username}</h3>

      <img src={avatar} alt={`Avatar de {username}`}></img>

      <a href={twitch_url} target="_blank" rel="noreferrer">
        Assistir Streamer
      </a>

      {is_live && <h4>🔴 AO VIVO</h4>}
    </div>
  );
}

export default StreamerCard;
