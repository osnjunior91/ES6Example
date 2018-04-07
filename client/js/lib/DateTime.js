class DateTime {
    
    static textToDate(text){
       return new Date(...text.split('-').map((item, indice) => item));
    }

    static dateTotext(date)
    {
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    }
}