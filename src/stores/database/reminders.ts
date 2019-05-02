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

export interface ReminderItemData {
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
    const items: ReminderItem[] = [];

    RemindersCollection.onSnapshot(async (querySnapshot) => {
      await this.setState({
        ...this.state,
        isLoading: false,
      });

      querySnapshot.docChanges().forEach(({ type, doc }) => {
        const item = {
          id: doc.id,
          data: doc.data() as ReminderItemData,
        };
        const index = items.findIndex((e) => e.id === item.id);

        switch (type) {
          case 'added':
            items.push(item);
            break;
          case 'modified':
            items.splice(index, 1, item);
            break;
          case 'removed':
            items.splice(index, 1);
            break;
          default:
            break;
        }

        this.setState({
          ...this.state,
          items,
        });
      });
    });
  };

  create = (data: ReminderItemData) => {
    return RemindersCollection.add(data);
  };
}
