import Swal from 'sweetalert2';
import './custom-alert.css';

interface Props {
  icon?: 'success' | 'error' | 'warning' | 'info' | 'question' | undefined;
  content: string;
}

export default function Alert({ content, icon }: Props) {
  return Swal.fire({
    title: content,
    icon,
    position: 'top-right',
    toast: true,
    showConfirmButton: false,
    timer: 2 * 1000,
    customClass: {
      popup: 'my-popup',
      title: 'my-title',
      confirmButton: 'my-confirm-button',
      cancelButton: 'my-cancel-button',
    },
  });
}
