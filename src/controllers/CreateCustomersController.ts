import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomersServices } from "../services/CreateCustomersServices";

class CreateCustomersController {
  async handler(resquest: FastifyRequest, reply: FastifyReply) {

    const customerService = new CreateCustomersServices();

    const customer = await customerService.handler();

    reply.send(customer)
  }
}

export { CreateCustomersController };