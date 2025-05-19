export function playSound(url) {
  const audio = new Audio(url)
  audio.play()
}

export function notify(title, options = {}) {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(title, options)
  }
}