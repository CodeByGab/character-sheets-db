import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomersServices } from "../services/CreateCustomersServices";

class CreateCustomersController {
  async handler(request: FastifyRequest, reply: FastifyReply) {
    
    const { name, email } = request.body as { name: string, email:string};

    const customerService = new CreateCustomersServices();

    const customer = await customerService.handler({ name, email });

    reply.send(customer);
  }
}

export { CreateCustomersController };