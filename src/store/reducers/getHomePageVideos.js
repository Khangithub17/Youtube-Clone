import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseData } from "../../utils/parseData";

const API_KEY = process.env.REACT_APP_YOUTUBE_API;

export const getHomePageVideos = createAsyncThunk(
  "youtube/getHomePageVideos",
  async (isNext, { getState }) => {
    const {
      youtube: { nextPageToken: nextPageTokenFromState, videos },
    } = getState();
    const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=drop x out&key=${API_KEY}&part=snippet&type=video&${isNext ? `pageToken=${nextPageTokenFromState}` : ""}`);
    console.log('API Response:', response.data);
    const items = response.data.items;
    const parsedData = await parseData(items);

    return { parsedData: [...videos, ...parsedData], nextPageToken: response.data.nextPageToken };
  }
);