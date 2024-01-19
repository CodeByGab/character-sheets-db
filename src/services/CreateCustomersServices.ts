import { PrismaClient } from "@prisma/client";

class CreateCustomersServices {
  async handler() {
    console.log("rota chamada");

    return { ok: true };
  }
}

export { CreateCustomersServices };
