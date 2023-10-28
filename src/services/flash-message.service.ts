import { showMessage } from 'react-native-flash-message';

interface IShowFlashMessage {
  message?: string;
  position?: 'top' | 'bottom' | 'center';
  duration?: number;
  // type?: 'success' | 'danger' | 'warning' | 'info';
}

const success = ({
  message = 'Success',
  position = 'bottom',
  duration = 3000,
}: IShowFlashMessage) => {
  showMessage({ message, position, duration, type: 'success' });
};

const danger = ({
  message = 'Danger',
  position = 'bottom',
  duration = 3000,
}: IShowFlashMessage) => {
  showMessage({ message, position, duration, type: 'danger' });
};

const warning = ({
  message = 'Warning',
  position = 'bottom',
  duration = 3000,
}: IShowFlashMessage) => {
  showMessage({ message, position, duration, type: 'warning' });
};

const info = ({ message = 'Info', position = 'bottom', duration = 3000 }: IShowFlashMessage) => {
  showMessage({ message, position, duration, type: 'info' });
};

export const flashMessage = { success, danger, warning, info };
