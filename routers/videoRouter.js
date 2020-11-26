import express from 'express';
import routes from '../routes';
import {
  deleteVideo, getEditVideo, postEditVideo, postUpload, getUpload, videoDetail,
} from '../controller/videoController';
import { uploadVideo } from '../middlewares';

const videoRouter = express.Router();

// upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// video Detatil
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
