import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { convertRawToString } from "../../utils/convertRawtoString";
import { timeSince } from "../../utils/timeSince";

const API_KEY = process.env.REACT_APP_YOUTUBE_API;

export const getVideoDetails = createAsyncThunk(
    "youtube/App/videoDetails",
    async(id) => {
        const {
            data:{items},
        } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,statistics&type=video&id=${id}`);
        

        const parsedData = await parseData(items[0]);
        console.log(parsedData)
        return parsedData;
        
    }
);

const parseData = async(item) =>{
  const channelResponse = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${item.snippet.channelId}&key=${API_KEY}`)
const snippet = item.snippet;
const id= item.id;
const statistics = item.statistics;

const channelImage = channelResponse.data.items[0].snippet.thumbnails.default.url;
const channelName = channelResponse.data.items[0].snippet.title;
const channelSubscribers = convertRawToString(channelResponse.data.items[0].statistics.subscriberCount, true);

return {
    id,
    title: snippet.title,
    description: snippet.description,
    channelTitle: snippet.channelTitle,
    channelId: snippet.channelId,
    channelImage,
    channelName,
    channelSubscribers,
    viewCount: convertRawToString(statistics.viewCount),
    likeCount: convertRawToString(statistics.likeCount),
    dislikeCount: convertRawToString(statistics.dislikeCount),
    commentCount: convertRawToString(statistics.commentCount),
    publishedAt: timeSince(new Date(snippet.publishedAt)),
  };
};