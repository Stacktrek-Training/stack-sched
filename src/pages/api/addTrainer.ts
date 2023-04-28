// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {prisma}  from "../../../lib/prisma";

type Data = {
  name: string
}

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default async function handler (req: NextApiRequest, res: NextApiResponse){
  const {id, first_name, last_name, nickname, address} = req.body;
  try {
    await prisma.trainers.create({
      data: {
        id,
        first_name,
        last_name, 
        nickname,
        address
      }
    })
    res.status(200).json({message: 'trainer added'})
  }
  catch (error) {
    console.log("failure");
  }
}
