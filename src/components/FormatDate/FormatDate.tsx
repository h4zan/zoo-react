import { DateTime } from 'luxon';

export const formatDate = (dateTimeString: string) => {
  const dateTime = DateTime.fromISO(dateTimeString);
  return dateTime.toFormat('yyyy-MM-dd HH:mm:ss	');
};
