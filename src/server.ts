import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import fastifyMongodb from "@fastify/mongodb";
import { routes } from "./routes";

const app = fastify({ logger: true });

app.register(fastifyCors);
app.register(fastifyMongodb, {
    url: 'mongodb://localhost:27017'
})
app.register(routes);

const start = async () => {

  try {
    await app.listen({ port: 3333 });
  } catch (err) {
    process.exit(1);
  }
};

start();
