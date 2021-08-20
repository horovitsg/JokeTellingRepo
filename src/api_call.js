import ora from "ora";
import https from "https";

export const getJoke = (hostname, path = "/") => {
  const spinner = ora("Processing humor...");
  spinner.color = "cyan";
  spinner.start();

  const options = {
    method: "GET",
    hostname,
    path,
    headers: {
      Accept: "application/json",
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, function (res) {
      let data = "";
      res.on("data", function (chunk) {
        data += chunk;
      });

      res.on("end", function (_chunk) {
        spinner.stop();
        console.log(data);
        resolve(JSON.parse(data));
      });

      res.on("error", function (error) {
        spinner.stop();
        reject(error);
      });
    });
    req.end();
  });
};
