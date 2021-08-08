import express from "express";

const app = express();

// GETリクエストを受け取るコード
app.get("/", (req, res) => {
  res.status(200).json({
    message: "ok.",
  });
});

app.listen(8081,() => {
  console.log("runnning server!");
});
