import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const TOKEN = req.headers["authorization"]?.split(" ")[1];

      if (TOKEN !== process.env.EMAIL_AUTHORIZATION) {
        res.status(401).json({
          message: "Unauthorized",
        });
      } else {
        const body =
          typeof req.body === "string" ? JSON.parse(req.body) : req.body;

        await prisma.user.create({
          data: {
            email: body.email,
          },
        });

        res.status(200).json({
          message: "success",
        });
      }
    } catch (e: unknown) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2002") {
          res.status(500).json({
            message: "User already exists",
          });
        }
      }
    }
  }
}
