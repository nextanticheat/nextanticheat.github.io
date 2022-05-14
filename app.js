let launchDate = new Date("May 30, 2022 12:00:00").getTime();
let timer = setInterval(tick, 1000);

function tick () {
  let now = new Date().getTime();
  let t = launchDate - now;

  if (t > 0) {
    // Calculate the Days
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    if (days < 10) { 
        days = "0" + days; 
    }
    
    // Calculate the Hours
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) { 
        hours = "0" + hours; 
    }

    // Calculate the Minutes
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if (mins < 10) { 
        mins = "0" + mins; 
    }

    // Calculate the Seconds
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    if (secs < 10) {
        secs = "0" + secs; 
    }

    let time = `${days} : ${hours} : ${mins} : ${secs}`;
    document.querySelector('.countdown').innerText = time;
  }
}