// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
    // Write your code here
    let amPm = s.charAt(8); //O charAt() método retorna o caractere no índice especificado em uma string.
    let militaryHour = "";
    if(amPm == "A"){
        if(s.substring(0,2) == "12"){ //extracts a part of a string
            militaryHour = "00"
        }else{
            militaryHour= s.substring(0,2);
        }
    }else{
        if (s.substring(0,2) == "12"){
            militaryHour = s.substring(0,2);
        }else{
            militaryHour = parseInt(s.substring(0,2), 10)+ 12; //parses a string and returns the first integer:
        }
    }
    return militaryHour + s.substring(2,8);
}

console.log(timeConversion ("12:40:22AM"));