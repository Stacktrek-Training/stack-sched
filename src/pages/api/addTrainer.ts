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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { first_name, last_name, nickname, address, mobile_no, email, github, linkedin, active_status, skill, 
    role, avail_day, discord_id, avail_time, date_onboard } = req.body;

  const data = {
    first_name,
    last_name,
    nickname,
    address,
    mobile_no,
    email,
    github,
    linkedin,
    active_status,
    skill,
    role,
    avail_day,
    discord_id: discord_id ? discord_id : null,
    avail_time: new Date(`1970-01-01T${avail_time}:00.000Z`),
    date_onboard: new Date(date_onboard)
  };

  try {
    await prisma.trainers.create({
      data,
    });
    res.status(200).json({ message: 'trainer added' });
    console.log("MESSAGE+===============================================")
    console.log(res)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to add trainer' });
  }
}
