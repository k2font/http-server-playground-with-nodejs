import type { Request, Response, NextFunction } from "express";

// ログを書き込むミドルウェア関数
const myLogger = (req: Request, res: Response, next: NextFunction) => {
  console.log("LOGGED");
  next(); // 次のミドルウェアに処理を渡す関数
}

const requestTime = (req: Request, res: Response, next: NextFunction) => {
  console.log(Date.now());
  next();
}

export {
  myLogger,
  requestTime
};
