import { auth } from '../modules/firebase';

export const signIn = async (token: string) =>
  await auth.signInWithCustomToken(token);
