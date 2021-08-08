import express from "express";
import cluster from "cluster";
import os from "os";
const cpus = os.cpus().length;

import userRouter from "./routers/user";

// clusterモジュールの適用
// isMasterはdeprecated
// 推奨されるisPrimaryを指定する
if (cluster.isPrimary) {
  for(let i = 0; i < cpus; ++i) {
    cluster.fork().on('listening', (address) => {
      console.log("server listening!", address);
    });
  }
} else {
  const app = express();

  app.use("/user", userRouter);

  // GETリクエストを受け取るコード
  app.get("/", (req, res) => {
    res.status(200).json({
      message: "ok.",
    });
  });

  app.listen(8081,() => {
    console.log("runnning server!");
  });
}

// clusterモジュールが立てたワーカが死んだ場合
// eventを検知して立て直す
cluster.on("exit", (worker, code, signal) => {
  console.log('Worker %d died with code/signal %s. Restarting worker...', worker.process.pid, signal || code);
  cluster.fork();
});