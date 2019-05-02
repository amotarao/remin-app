import { Container } from 'unstated';
import { firestore } from '../../modules/firebase';

const RemindersCollection = firestore.collection('reminders');

export interface RemindersState {
  isLoading: boolean;
  items: ReminderItem[];
}

export interface ReminderItem {
  id: string;
  data: ReminderItemData;
}

interface ReminderItemData {
  channel: string;
  text: string;
  date: string[];
  time: string[];
}

export class RemindersContainer extends Container<RemindersState> {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      items: [],
    };
    this.onSnapshot();
  }

  onSnapshot = () => {
    RemindersCollection.onSnapshot(async (querySnapshot) => {
      await this.setState({
        ...this.state,
        isLoading: false,
      });

      querySnapshot.docChanges().forEach(async ({ type, doc }) => {
        const item = {
          id: doc.id,
          data: doc.data() as ReminderItemData,
        };
        const index = this.state.items.findIndex((e) => e.id === item.id);

        switch (type) {
          case 'added':
            await this.setState({
              ...this.state,
              items: [...this.state.items, item],
            });
            break;
          case 'modified':
            await this.setState({
              ...this.state,
              items: this.state.items.splice(index, 1, item),
            });
            break;
          case 'removed':
            await this.setState({
              ...this.state,
              items: this.state.items.splice(index, 1),
            });
            break;
          default:
            break;
        }
      });
    });
  };
}
