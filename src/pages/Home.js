import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';
import Spinner from '../components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../components/Card';

export default function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtube.videos);
  const nextPageToken = useAppSelector((state) => state.youtube.nextPageToken);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  useEffect(() => {
    console.log('Videos:', videos);
    console.log('Next Page Token:', nextPageToken);
  }, [videos, nextPageToken]);

  return (
    <div className='max-h-screen overflow-hidden'>
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className='flex' style={{ height: "92.5vh" }}>
        <Sidebar />
        {
          videos.length ? (
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getHomePageVideos(true))}
              hasMore={!!nextPageToken}
              loader={<Spinner />}
              height={650}
            >
              <div className='grid gap-y-14 gap-x-8 grid-cols-4 p-8'>
                {videos.map((item) => {
                  return <Card data={item} key={item.videoId} />;
                })}
              </div>
            </InfiniteScroll>
          ) : (
            <Spinner />
          )
        }
      </div>
    </div>
  );
}