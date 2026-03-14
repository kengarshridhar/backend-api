import cors from "cors";

const port = process.env.PORT || 5000;

const corsOptions = {
  origin: [`http://localhost:${port}`],
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
};

export default cors(corsOptions);