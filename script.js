let btn = document.querySelector('.btn'),
    gameBox = document.querySelector('.game-box'),
    gameTimeInput = document.getElementById('game-time'),
    radioInput = document.querySelector('.radio-row'),
    changeTime = document.querySelector('.change-time'),
    time = document.querySelector('.time'),
    figure = 'square';

function startGame(){
  btn.style.display = 'none';
  gameBox.style.backgroundColor = '#fff';
  getFigure();
};

function endGame(){
  btn.style.display = 'block';
  gameBox.style.backgroundColor = '#ccc';
};

function getFigure(){  
  radioInput.addEventListener('click', function(event){
    figure = event.target.getAttribute('value');
    switch(figure){
      case 'circle': 
        figure = 'circle';
        break;
      case 'rectangle': 
        figure = 'rectangle';
        break;        
      default:   
        figure = 'square'; 
        break;
    };
    return figure;
  });
};

changeTime.addEventListener('click', function(event){
  let count = gameTimeInput.getAttribute('value'),
      timeCount = time.textContent;    
  if (event.target.classList.contains('plus')) {
    count++;
    gameTimeInput.setAttribute('value', count);
    timeCount++;
    time.textContent = timeCount;    
  }
  if (event.target.classList.contains('minus')) {
    if (count > 1) {
      count--;
      gameTimeInput.setAttribute('value', count);      
      timeCount--;
      time.textContent = timeCount;          
    }
  }    
});

btn.addEventListener('click', startGame);
