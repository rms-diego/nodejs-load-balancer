import "dotenv/config";
import fastify from "fastify";

const bootstrap = () => {
  const app = fastify();

  const { PORT } = process.env;

  app.get("/", () => ({ message: "hello world!", port: PORT }));

  app.listen({ port: Number(PORT), host: "0.0.0.0" }, () =>
    console.log("É bomba")
  );
};

bootstrap();
