export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  coverImage?: string;
  content: string;
}

import { postImproveIptvQuality } from "./posts/improve-iptv-streaming-quality";
import { postIptvAudioSync } from "./posts/iptv-audio-out-of-sync-fixes";
import { postHowToFixIptvBuffering } from "./posts/how-to-fix-iptv-buffering";
import { postInternetSpeedForIptv } from "./posts/internet-speed-for-iptv";
import { postXtreamCodesVsM3u } from "./posts/xtream-codes-vs-m3u";
import { postChooseIptvService } from "./posts/choose-iptv-service-guide";
import { postBestIptvDevices } from "./posts/best-iptv-devices";

export const blogPosts: BlogPost[] = [
  postImproveIptvQuality,
  postIptvAudioSync,
  postHowToFixIptvBuffering,
  postInternetSpeedForIptv,
  postXtreamCodesVsM3u,
  postChooseIptvService,
  postBestIptvDevices,
];
