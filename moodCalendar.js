
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

if (colorChoice === defaultColor){
    window.defaultColor = defaultColor;
    return defaultColor;
}
}
 


