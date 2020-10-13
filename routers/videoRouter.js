import express from "express";
import routes from "../routes";
import { delete_video, edit_video, upload, video, video_detail } from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.video,video);
videoRouter.get(routes.upload,upload);
videoRouter.get(routes.video_detail,video_detail);
videoRouter.get(routes.edit_video,edit_video);
videoRouter.get(routes.delete_video,delete_video);

export default videoRouter;