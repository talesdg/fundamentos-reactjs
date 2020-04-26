function formatDate(date: string): string {
  const [d] = date.split('T');
  const [year, month, day] = d.split('-');
  return `${day}/${month}/${year}`;
}

export default formatDate;
