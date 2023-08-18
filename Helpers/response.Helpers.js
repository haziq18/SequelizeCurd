import fs from "fs";
const file_path = "logs.txt";
export const sendResponse = (status, message, data, res) => {
  var response = {
    message,
    data,
  };
  const logMessage = `[${new Date().toISOString()}] ${JSON.stringify(data, null, 2)}\n`;
  fs.appendFile(file_path, logMessage, (err) => {
    if (err) {
      console.error("Error writing logs:", err);
    } else {
      console.log(response);
      return res.status(status).send(response);
    }
  });
};
