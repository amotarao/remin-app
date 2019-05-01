import { Container } from 'unstated';
import { auth } from '../modules/firebase';

export interface UserState {
  signedIn: boolean;
  user: firebase.User | null;
}

export class UserContainer extends Container<UserState> {
  constructor() {
    super();
    this.state = {
      signedIn: false,
      user: null,
    };
    this.onAuthStateChanged();
  }

  onAuthStateChanged = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ ...this.state, signedIn: true, user });
      } else {
        this.setState({ ...this.state, signedIn: false, user: null });
      }
    });
  };

  signIn = async (token: string) => await auth.signInWithCustomToken(token);
}
