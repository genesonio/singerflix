import express from "express"
import { vocalRangeController } from "./controllers/vocalRangeController"

const router = express.Router()

router.get('/vocalRange', vocalRangeController.index)

export { router }