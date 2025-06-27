import express from "express";
import colors from "colors";
import userRouter from "./routes/user.routes";
import { sequelize, syncModels } from "./models";

const server = express();

const PORT = process.env.PORT || 3001;

server.use(express.json());

server.use("/api/users", userRouter);

async function startServer() {
  try { 
    await sequelize.authenticate();
    console.log(
      colors.cyan(
        "Connectionm to the database has been stablished successfully"
      )
    );

    await syncModels();
    server.listen(PORT, () => {
      console.log(colors.cyan(`Server running http://localhost:${PORT}`));
    });
  } catch (error) {
    console.log(colors.red(`Unable to connect to the database ${error}`));
  }
}

startServer();
