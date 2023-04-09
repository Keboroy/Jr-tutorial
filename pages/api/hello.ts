// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

let url = 'https://apisetu.gov.in/certificate/v3/hsscboardmh/hpcer';

let options = {
  method: 'POST',
  headers: {'X-APISETU-CLIENTID': 'REPLACE_KEY_VALUE', 'content-type': 'application/json'},
  body: '{"txnId":"f7f1469c-29b0-4325-9dfc-c567200a70f7","format":"xml","certificateParameters":{"year":"2015","rollnumber":"P183286","totalmarks":"517","exsession":"MAR,OCT","FullName":"Sunil Kumar"},"consentArtifact":{"consent":{"consentId":"ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba","timestamp":"2019-08-24T14:15:22Z","dataConsumer":{"id":"string"},"dataProvider":{"id":"string"},"purpose":{"description":"string"},"user":{"idType":"string","idNumber":"string","mobile":"string","email":"string"},"data":{"id":"string"},"permission":{"access":"string","dateRange":{"from":"2019-08-24T14:15:22Z","to":"2019-08-24T14:15:22Z"},"frequency":{"unit":"string","value":0,"repeats":0}}},"signature":{"signature":"string"}}}'
};
