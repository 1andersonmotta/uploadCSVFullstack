import { Router } from "express";
import multer from "multer";
import { SearchUserController } from "./controller/searchUserController";
import { UploadFileController } from "./controller/uploadFileController";

const multerConfig = multer();

const router = Router();

router.post("/api/files", multerConfig.single("file"), new UploadFileController().validatingFormat)

router.get("/api/users/", new SearchUserController().searchUser)

export { router };





