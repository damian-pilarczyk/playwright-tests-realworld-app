import { NotificationType } from '@enums/notification-type';

export interface Notification {
  text: string;
  type: NotificationType;
}
