

function _drawClock() {
  let currenttime = new Date()
  let hours = currenttime.getHours()
  let minutes = currenttime.getMinutes()
  let seconds = currenttime.getSeconds()
  // @ts-ignore
  minutes = minutes < 10 ? "0" + minutes : minutes
  // @ts-ignore
  seconds = seconds < 10 ? "0" + seconds : seconds
  let truehours = (hours == 0) ? 12 : ((hours > 12) ? (hours - 12) : hours)
  let part = (hours == 0) ? "AM" : ((hours > 12) ? "PM" : "AM")
  document.getElementById("clock").innerHTML = `<div class="card opac">
  <div class="card-body">
    <h4 class="card-title notopac">${truehours}:${minutes}<small>:${seconds} </small> ${part}</h4>
  </div>
</div >`
}

export default class ClockController {
  constructor() {
    setInterval(function () { _drawClock() }, 1000)
  }
}