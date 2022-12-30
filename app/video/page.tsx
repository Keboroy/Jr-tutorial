// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { NextPage } from 'next';
// import { useQuery } from '@apollo/react-hooks';
// import { gql } from 'apollo-boost';
// import { Content } from '../../models/Content';
// import { Video } from '../../models/Video';
// import { VideoPlayer } from '../../components/VideoPlayer';
// import { VideoList } from '../../components/VideoList';
// import { VideoInfo } from '../../components/VideoInfo';
// import { VideoComments } from '../../components/VideoComments';
// import { VideoRelated } from '../../components/VideoRelated';
// import { VideoDownload } from '../../components/VideoDownload';
// import { VideoWatchTime } from '../../components/VideoWatchTime';
// import { VideoPlaylist } from '../../components/VideoPlaylist';
// import { VideoPlaylistItem } from '../../components/VideoPlaylistItem';
// import { VideoPlaylistItemProps } from '../../components/VideoPlaylistItem/VideoPlaylistItem';
// import { VideoPlaylistProps } from '../../components/VideoPlaylist/VideoPlaylist';
// import { VideoInfoProps } from '../../components/VideoInfo/VideoInfo';
// import { VideoCommentsProps } from '../../components/VideoComments/VideoComments';
// import { VideoRelatedProps } from '../../components/VideoRelated/VideoRelated';
// import { VideoDownloadProps } from '../../components/VideoDownload/VideoDownload';
// import { VideoWatchTimeProps } from '../../components/VideoWatchTime/VideoWatchTime';

// const GET_VIDEO = gql`
//     query GetVideo($slug: String!) {
//         getVideo(slug: $slug) {
//             _id
//             title
//             slug
//             description
//             image
//             video
//             watchtime
//             downloads
//             comments
//             playlist
//             price
//             category
//             availableQty
//         }
//     }
// `;

// const GET_VIDEOS = gql`
//     query GetVideos($category: String!) {
//         getVideos(category: $category) {
//             _id
//             title
//             slug
//             description
//             image
//             video
//             watchtime
//             downloads
//             comments
//             playlist
//             price
//             category
//             availableQty
//         }
//     }
// `;

// const VideoPage: NextPage = () => {
//     const router = useRouter();
//     const { slug } = router.query;
//     const { loading, error, data } = useQuery<{ getVideo: Content }>(GET_VIDEO, { variables: { slug } });
//     const { loading: loadingVideos, error: errorVideos, data: dataVideos } = useQuery<{ getVideos: Content[] }>(GET_VIDEOS, { variables: { category: data?.getVideo?.category } });
//     const [video, setVideo] = useState<Video>();
//     const [videos, setVideos] = useState<Video[]>();
//     const [videoInfo, setVideoInfo] = useState<VideoInfoProps>();
//     const [videoComments, setVideoComments] = useState<VideoCommentsProps>();
//     const [videoRelated, setVideoRelated] = useState<VideoRelatedProps>();
//     const [videoDownload, setVideoDownload] = useState<VideoDownloadProps>();
//     const [videoWatchTime, setVideoWatchTime] = useState<VideoWatchTimeProps>();
//     const [videoPlaylist, setVideoPlaylist] = useState<VideoPlaylistProps>();

//     useEffect(() => {
//         if (data) {
//             const { getVideo } = data;
//             const video = {
//                 _id: getVideo._id,
//                 title: getVideo.title,
//                 slug: getVideo.slug,
//                 description: getVideo.description
//             };
//             setVideo(video);
//             setVideoInfo({
//                 title: getVideo.title,
//                 description: getVideo.description,
//                 image: getVideo.image,
//                 price: getVideo.price,
//                 availableQty: getVideo.availableQty
//             });
//             setVideoComments({
//                 comments: getVideo.comments
//             });
//             setVideoDownload({
//                 downloads: getVideo.downloads
//             });
//             setVideoWatchTime({
//                 watchtime: getVideo.watchtime
//             });
//             setVideoPlaylist({
//                 playlist: getVideo.playlist
//             });
//         }
//     }, [data]);

//     useEffect(() => {

//         if (dataVideos) {
//             const { getVideos } = dataVideos;
//             const videos = getVideos.map(video => {
//                 return {
//                     _id: video._id,
//                     title: video.title,
//                     slug: video.slug,
//                     description: video.description,
//                     image: video.image
//                 };
//             });
//             setVideos(videos);
//             setVideoRelated({
//                 videos
//             });
//         }
//     }, [dataVideos]);

//     return (
//         <div className="video-page">
//             <div className="video-page__player">
//                 <VideoPlayer video={video} />
//             </div>
//             <div className="video-page__info">
//                 <VideoInfo {...videoInfo} />
//             </div>
//             <div className="video-page__comments">
//                 <VideoComments {...videoComments} />
//             </div>
//             <div className="video-page__related">
//                 <VideoRelated {...videoRelated} />
//             </div>
//             <div className="video-page__download">
//                 <VideoDownload {...videoDownload} />
//             </div>
//             <div className="video-page__watchtime">
//                 <VideoWatchTime {...videoWatchTime} />
//             </div>
//             <div className="video-page__playlist">
//                 <VideoPlaylist {...videoPlaylist} />
//             </div>
//         </div>
//     );
// };

