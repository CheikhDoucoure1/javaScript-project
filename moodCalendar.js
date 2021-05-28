
const colorChoice =['white', 'red' , 'Green'];

function calendarMood (colorChoice){
    const defaultColor = 'White';
    let activeColor = '';

if (colorChoice === 'Red'){
    activeColor = 'Red';
    window.activeColor=activeColor
    return  activeColor;
}

if (colorChoice === 'Green'){
    activeColor = 'Green';
    window.activeColor = activeColor;
    return activeColor;
 }

if (defaultColor){
    activeColor = defaultColor;
    window.activeColor = defaultColor;
    return activeColor;
}
}
 const result = calendarMood('Green');
 console.log(result);


