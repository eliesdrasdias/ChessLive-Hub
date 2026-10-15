export interface Streamer {
  username: string;
  avatar: string;
  twitch_url: string;
  is_live: boolean;
}

export interface StreamersResponse {
  streamers: Streamer[];
}
