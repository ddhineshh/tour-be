import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getSingleTour,
  getTourBySearch,
  updateTour,
  getFeaturedTour,
  getTourCount,
} from "./../controllers/tourController.js";
import { getAllEditTour } from "./../controllers/tourController.js";

const router = express.Router();

//post new tour
router.post("/", createTour);

// update tour
router.put("/:id", updateTour);

// delete tour
router.delete("/:id", deleteTour);

// get single tour
router.get("/:id", getSingleTour);

//getAllEditTour
router.get("/edit/all",getAllEditTour)
// get All tour
 router.get("/", getAllTour);

// get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

export default router;
