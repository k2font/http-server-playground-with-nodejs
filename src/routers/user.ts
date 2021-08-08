import Router from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ "id": "E67843121532", "name": "shoichiro" });
});

export default router;
