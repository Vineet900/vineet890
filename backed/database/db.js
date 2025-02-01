import { connect } from "mongoose";

const connectToMongo = async () => {
  try {
    await connect("mongodb://127.0.0.1:27017", {
      dbName: "paymentgatway",
    });

    console.log("---***Database Connected Successfully***---");
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongo;
