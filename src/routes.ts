import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";

import { CreateCustomersController } from "./controllers/CreateCustomersController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get(
    "/test",
    async (resquest: FastifyRequest, reply: FastifyReply) => {
      return { ok: true };
    }
  );

  fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCustomersController().handler(request, reply)
  });
}
