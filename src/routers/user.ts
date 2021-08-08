import Router from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ "id": "E67843121532", "name": "shoichiro" });
});

router.get("/:userId", (req, res) => {
  res.status(200).json({ "params": req.params });
});

export default router;
