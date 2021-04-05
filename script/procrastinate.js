let phrases = [
    { text: 'отправить другу смешную гифку'},
    { text: 'посмотреть скидки на авиабилеты'},
    { text: 'разобраться, о чём поют рэперы'},
    { text: 'расставить книги на полке по цвету'},
    { text: 'читать про зарплаты в Сан-Франциско'},
    { text: 'прочитать новости и ужаснуться в комментариях'},
    { text: 'попасть в поток грустных песен и вспомнить все ошибки молодости'},
    { text: 'посмотреть трейлер сериала и заодно первый сезон'},
    { text: 'проверить непрочитанное в Telegram-каналах'},
    { text: 'обсудить снос всех несущих конструкций'},
    { text: 'поставить колонну посредине помещения'},
    { text: 'подумать об опуске на мальдивах'},
    { text: 'пойти, узнать как дела у Рутковской'},
    { text: 'пожелать Степанову хорошего дня'},
    { text: 'сделать Малохову чай'},
    { text: 'покрутиться на стуле'},
    { text: 'узнать в чем разница между разными сортами кофе'},
    { text: 'подойти к окну и тяжело вздохнуть'},
    { text: 'выбрать на что потратить свой первый миллион'},
    { text: 'убрать все отверстия ВК из проекта'},
    { text: 'заставить Ревит работать за тебя'}
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  
  button.addEventListener('click', function () {
   let randomElement = getRandomElement(phrases);
    {smoothly(phrase, 'textContent', randomElement.text)}
    smoothly(image, 'src', randomElement.image)
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });
  
  