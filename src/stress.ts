import autocannon from "autocannon";

const stressTest = async () => {
  const result = await autocannon({
    url: "http://localhost:80",
    connections: 10500, //default
    pipelining: 2, // default
    duration: 60, // default
  });

  console.log(result);

  console.log(`\nSuccess request: ${result["2xx"]}`);
  console.log(`Errors request: ${result["errors"]}`);
};

stressTest();
