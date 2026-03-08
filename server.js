import cluster from 'cluster';
import os from 'os';
import http from 'http';
import dotenv from 'dotenv';

import app from './app.js';
import connectMongo from './config/db/mongo.js';

dotenv.config({ quiet: true});

const port = process.env.PORT || 5000;
// const numCPUs = os.cpus().length;
const numCPUs = Math.max(os.cpus().length - 1, 1);

if (cluster.isPrimary) {
  console.log(`[WORKER] Master ${process.pid} is running`);
  console.log(`[INFO] Starting ${numCPUs} workers`);
  console.log(`[INFO] http://localhost:${port}`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`[RESTART] Worker ${worker.process.pid} died`);
    console.log(`[CODE] ${code} | [SIGNAL] ${signal}`);    
    cluster.fork();
  });
} else {
  const startWorker = async () => {
    try{
      await connectMongo();
      
      const server = http.createServer(app);
      
      server.listen(port, () => {
        console.log(`[WORKER] ${process.pid} running on port ${port}`);
      });

      process.on("SIGALRM", () => {
        console.log(`[SHUTDOWN] Worker ${process.pid}`);
        server.close(() => process.exit(0));
      });

    } catch (err) {
      console.error(`[ERROR] Worker ${process.pid}`, err);
      process.exit(1);
    }
  };
  
  startWorker();
}
