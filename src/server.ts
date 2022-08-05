import { sqlConfig } from "./config/config";
import mssql from "mssql";

const connect = async () => {
  const pool = await mssql.connect(sqlConfig);

  if (pool.connected) {
    console.log("connected");
  }
};

connect();

// console.log("hello....rrr");
