export const ascendingSortDate = (dates) => dates.sort((a,b) => new Date(a.date) - new Date(b.date));

export const descendingSortDate = (dates) => dates.sort((a,b) => new Date(b.date) - new Date(a.date));

export const ascendingDescription = (descriptions) => descriptions.sort((a,b) => (a.description > b.description) ? 1 : ((b.description > a.description) ? -1 : 0)); 

export const descendingDescription = (descriptions) => descriptions.sort((a,b) => (a.description < b.description) ? 1 : ((b.description < a.description) ? -1 : 0)); 

export const extractDate = (date) => {
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  return { day, month, year };
}