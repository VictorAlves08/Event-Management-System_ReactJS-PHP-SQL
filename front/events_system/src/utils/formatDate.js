export const formatDate = (dateTime) =>{

  const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
  };

  const newDate = new Date(dateTime);
  const date = new Intl.DateTimeFormat('pt-BR', options).format(newDate);

  return date;
}

