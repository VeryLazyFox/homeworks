

buttonSubmit.addEventListener('click', () => {
  const buttonSubmit = document.getElementById("submit");
  let x = document.getElementById("unput1");
  let y = document.getElementById("unput2");
  let rez = document.getElementById("numberRezult");
  
  let start = x.value;
  let end = y.value;
  let sum = 0;
  let i = start;
  if(start > end){
    [start, end] = [end, start];
  }
  for(i ; i <= end; i++){
    if ( Math.abs(i % 10) == 2 || Math.abs(i % 10) == 3 || Math.abs(i % 10) == 7) {
      sum += i;
      // console.log(i);
    }
  }
  rez.textContent = sum;
  sum = 0;
});

submitSecondToDate.addEventListener('click', () => {
  var date = new Date(null);
  console.log(date)
  date.setSeconds(numberOfSeconds.value);
  var seconds = date.toISOString().substr(11, 8);
  dateForSeconds.textContent = seconds;
});

dateToSeconds.addEventListener('click', () => {
  // let arrayOfTime = unputTime.value.split(':')
  // console.log(arrayOfTime, 'qwe') 
  // let seconds = parseInt(arrayOfTime[0]*60*60) + parseInt(arrayOfTime[1]*60) + parseInt(arrayOfTime[2]);
  // console.log(seconds)
  let seconds = (unputTime.valueAsNumber / 1000 )
  countForSeconds.textContent = seconds;
});

differenceDates.addEventListener('click', () => {
  let first = new Date(firstDate.valueAsNumber);
  let second = new Date(secondDate.valueAsNumber);

  let difference = (second - first)/1000; // to seconds
  console.log(difference, 'difference')

  if (difference < 60) {
    differenceForDate.textContent = Math.round(difference) + ' second(s)';
    return;
  }
  difference /= 60;
  if (difference < 60) {
    differenceForDate.textContent = Math.round(difference) + ' minute(s)';
    return;
  }
  difference /= 60;
  if (difference < 24) {
    differenceForDate.textContent = Math.round(difference) + ' hour(s)';
    return;
  }
  difference /= 24;
  if (difference < 30) {
    differenceForDate.textContent = Math.round(difference) + ' day(s)';
    return;
  }
  difference /= 30;
  if (difference < 12) {
    differenceForDate.textContent = Math.round(difference) + ' month(s)';
    return;
  }
  difference /= 12;
  differenceForDate.textContent = Math.round(difference) + ' year(s)';
});

addChessBoard.addEventListener('click', () => {
  console.log(chessBoardInput.value)
  let array = chessBoardInput.value.split('x')
  let x = array[0];
  let y = array[1];
  chessBoard.classList.add("chessBoard");
  if (chessBoard.childNodes.length > 0)
    {
      console.log(chessBoard.childNodes)
      chessBoard.removeChild(chessBoard.firstChild)
    }
  let wrapper = document.createElement("div");
  for (let i=0; i<y; i++){
    row = wrapper.appendChild(document.createElement("div"));
    row.classList.add("row");
      for (let j=0; j<x; j++){
        elem = row.appendChild(document.createElement("div"));
        if ((i%2 != 0 && j%2 == 0) || (i%2 == 0 && j%2 != 0)){
          elem.classList.add("black");
          elem.classList.add("chess");
        }
        else{ 
          elem.classList.add("white");
          elem.classList.add("chess");
        }
      }
  }
  chessBoard.appendChild(wrapper);
});

validTextArea.addEventListener('blur', () => {
  if (validP.childNodes.length > 0)
    {
      validP.removeChild(validP.firstChild)
    }
  // console.log(validTextArea)
  let arrayRezult;
  let arr =  validTextArea.value.split(',');

  // let regexpIp = /([0-9]{1,3}[\.]){3}[0-9]{1,3}/g;
  // let regexpLink = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/g;
  let regexpIp = /(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g;
  let regexpLink = /((http|https|ftp|ftps)\:\/\/)|(www\.)[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/gi;

// http://ru.stackoverflow.com, www.ru.stackoverflow.com, ru.stackoverflow.com,
// 4444.11.11.11,
// 192.168.1.1,
// 1.1.1.1,
// 115.42.150.37
  let arrayIp = arr.filter(item => item.match(regexpIp));
  let arrayLink = arr.filter(item => item.match(regexpLink)).map(
    x => {
      return x.replace(/http\:\/\/|https\:\/\//g,'');
    });

  if (arrayIp != null && arrayLink!= null){
    arrayRezult = [ ...new Set([...arrayIp,...arrayLink])].sort();
    console.log(arrayIp)
    console.log(arrayLink)
  }
  else if (arrayIp == null){
    arrayRezult = arrayLink
  }
  else arrayRezult = arrayIp

  let wrapper = document.createElement("div");

  arrayRezult.forEach(element => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    let linkText = document.createTextNode(element);
    a.appendChild(linkText);
    a.href = '//'+element;
    a.target = "_blank"
    element = a;
    // console.log(element)
    li.appendChild(a)
    wrapper.appendChild(li)
  });
  validP.appendChild(wrapper)
  console.log(arrayRezult);
});

validButton.addEventListener('click', () => {
  let arr =  regTextArea.value;
  let input =  regP.value;

  let newArr = replaceAll(arr, input, "<mark>"+"$&"+"</mark>")

  validRezult.innerHTML = newArr;

  function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}
});