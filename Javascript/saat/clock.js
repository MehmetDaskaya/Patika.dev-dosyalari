let userName = document.querySelector("#myName");
  let myName = prompt('Lütfen adınızı giriniz.');

      
  if(myName == null || myName == ""){
      alert('Lutfen bos bırakmayın.')
      location.reload();    
      
  }
  else{
    userName.textContent = `${myName}!`;    
  }
  
  function showTime() {
    let date  = new Date();
    let year  = date.getFullYear();
    let day   = date.getDay();
    let hours = date.getHours();
    let min   = date.getMinutes();
    let sec   = date.getSeconds();
   
      switch(day){
        case 1:
              day = 'Pazartesi';
                break;
        case 2:
              day = 'Salı';
                break;
        case 3:
              day = 'Çarşamba';
                break;
        case 4:
              day = 'Perşembe';
                break;
        case 5:
              day = 'Cuma'
                break;
        case 6:
              day = 'Cumartesi'
                break;
        case 7:
              day = 'Pazar'
                break;        
    }
    hours = hours < 10 ? "0" + hours : hours;
    min   = min < 10 ? "0" + min : min;
    sec   = sec < 10 ? "0" + sec : sec;
    // Sayfada nasıl gösterileceği belirlendi
    let clock = hours + ":" + min + ":" + sec + " " + day + " " + year;
    document.querySelector("#myClock").textContent = clock;
     
  setTimeout(showTime, 1000);
  }
  showTime();