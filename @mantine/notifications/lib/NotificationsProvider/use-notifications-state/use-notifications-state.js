import { useQueue, randomId } from '@mantine/hooks';
export default function useNotificationsState({ limit }) {
    const { state, queue, update, cleanQueue } = useQueue({
        initialValues: [],
        limit,
    });
    const showNotification = (notification) => {
        const id = notification.id || randomId();
        update((notifications) => {
            if (notification.id && notifications.some((n) => n.id === notification.id)) {
                return notifications;
            }
            return [...notifications, Object.assign(Object.assign({}, notification), { id })];
        });
        return id;
    };
    const updateNotification = (id, notification) => update((notifications) => {
        const index = notifications.findIndex((n) => n.id === id);
        if (index === -1) {
            return notifications;
        }
        const newNotifications = [...notifications];
        newNotifications[index] = notification;
        return newNotifications;
    });
    const hideNotification = (id) => update((notifications) => notifications.filter((notification) => {
        if (notification.id === id) {
            typeof notification.onClose === 'function' && notification.onClose(notification);
            return false;
        }
        return true;
    }));
    const clean = () => update(() => []);
    return {
        notifications: state,
        queue,
        showNotification,
        updateNotification,
        hideNotification,
        cleanQueue,
        clean,
    };
}
