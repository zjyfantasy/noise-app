import { request } from 'alita';

export async function getLogger(): Promise<any> {
  return request(
    '/v2/datagate/api/loggerapi.ashx?username=testsy01&password=Test@2024&software=HWM+Test',
    { method: 'GET' },
  );
}
