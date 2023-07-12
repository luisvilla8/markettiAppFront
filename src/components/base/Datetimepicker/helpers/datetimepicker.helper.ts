export const getHourTimeTurnedInto12HourFormat = (value: Date | null) => {
  if (!value) return { hour: "1:00", postFix: 'AM'};
  const isPMorAM = value.getHours() > 12;
  const hour = isPMorAM ? value.getHours() - 12 : value.getHours();
  const postFix = isPMorAM ? 'PM' : 'AM';
  return {
    hour: `${[value.getMinutes(), hour].includes(0) ? hour + 1 : hour}:00`,
    postFix
  }
}

export const get12HourFormatIntoTime = (value: string, currentDatetime: Date | null) => {
  if (!currentDatetime) return new Date();
  const [hour, postFix] = value.split('-');
  const newHour = postFix === 'PM' ? parseInt(hour) + 12 : parseInt(hour);
  const newDate = new Date(currentDatetime);
  newDate.setHours(newHour);
  return newDate;
}