import axios from 'axios';
import { timeSince } from './timeSince';
import { parseVideoDuration } from './parseVideoDuration';
import { convertRawToString } from './convertRawtoString'; // Fixed import path

const API_KEY = process.env.REACT_APP_YOUTUBE_API;

export const parseData = async (items) => {
    try {
        const videoIds = [];
        const channelIds = [];

        items.forEach((item) => {
            channelIds.push(item.snippet.channelId);
            videoIds.push(item.id.videoId || item.id);
        });

        const channelsResponse = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds.join(",")}&key=${API_KEY}`);
        const { items: channelsData } = channelsResponse.data;

        const parsedChannelsData = [];
        channelsData.forEach((channel) => parsedChannelsData.push({
            id: channel.id,
            image: channel.snippet.thumbnails.default.url,
        }));

        const videosResponse = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(",")}&key=${API_KEY}`);
        const { items: videosData } = videosResponse.data;

        const parsedData = [];
        items.forEach((item) => {
            const { image: channelImage } = parsedChannelsData.find((data) => data.id === item.snippet.channelId);
            const videoData = videosData.find((video) => video.id === (item.id.videoId || item.id));
            if (channelImage && videoData) {
                parsedData.push({
                    videoId: item.id.videoId || item.id,
                    videoTitle: item.snippet.title,
                    videoDescription: item.snippet.description,
                    videoThumbnail: item.snippet.thumbnails.medium.url,
                    videoLink: `https://www.youtube.com/watch?v=${item.id.videoId || item.id}`,
                    videoDuration: parseVideoDuration(videoData.contentDetails.duration),
                    videoViews: convertRawToString(videoData.statistics.viewCount), // Fixed function name
                    videoAge: timeSince(new Date(item.snippet.publishedAt)),
                    channelInfo: {
                        id: item.snippet.channelId,
                        image: channelImage,
                        name: item.snippet.channelTitle
                    },
                });
            }
        });
        return parsedData;
    } catch (err) {
        console.log(err);
    }
};

export default parseData;


