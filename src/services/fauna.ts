import { Client } from 'faunadb';
import { Settings } from '_app';

export const fauna = new Client({
  secret: String(Settings.ApiCredentials?.FaunaKey),
});
