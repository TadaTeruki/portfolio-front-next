import type { NextApiRequest, NextApiResponse } from 'next'
import RequestPerufetch from '../../packages/requests/Perufetch';

export const config = { runtime: "edge" };

export default async function handler(
    _: NextApiRequest,
    res: NextApiResponse<string>
) {
    const perufetch = await RequestPerufetch();
    res.status(200).send(perufetch);
}