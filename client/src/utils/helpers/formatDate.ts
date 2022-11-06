export const formatDate = (date: Date):string => {
	const formatDate = date.getDate() < 10 ? `0${date.getDate()}`:date.getDate();
	const formatMonth = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}`: date.getMonth() + 1;
	const formattedDate = [date.getFullYear(), formatMonth, formatDate].join('-');
	return formattedDate
}