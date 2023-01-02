import mongoose from "mongoose";
import handler from "../pages/api/hello";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


const connectDb = handler => async (req: NextApiRequest,
    res: NextApiResponse) => {
    if (mongoose.connection.readyState) {
        return handler(req, res);
    }
    mongoose.connect(process.env.MONDO_URI)
    return handler(req, res)
}

export default connectDb