class DateTime {
    
    textToDate(text){
       return new Date(...text.split('-').map((item, indice) => item + item % 2));
    }

    dateTotext(date)
    {
        return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
    }
}