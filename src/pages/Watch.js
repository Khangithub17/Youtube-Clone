import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { getVideoDetails } from "../store/reducers/getVideoDetails";
import { getRecommendedVideos } from "../store/reducers/getRecommendedVideos";
import Navbar from "../components/Navbar";

export default function Watch() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const currentPlaying = useAppSelector(
    (state) => state.youtubeApp.currentPlaying
  );

  console.log(currentPlaying);

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
    } else {
      navigate("/");
    }
  }, [id, navigate, dispatch]);

  useEffect(() => {
    if (currentPlaying && id) dispatch(getRecommendedVideos(id));
  }, [currentPlaying, dispatch, id]);

  return (
    <>
      {currentPlaying && currentPlaying?.videoId === id && (
        <div className="max-h-screen overflow-hidden">
          <div >
            <Navbar />
          </div>
          <div>
            <div>
              <div>
                <div className="relative w-full pb-[56.25%]">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                    frameBorder="0"
                    className="absolute top-0 left-0 w-full h-full"
                    allowFullScreen
                    title="Youtube Player"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}