export function greet() {
  console.log('ohayo')
}

export const sth = true

export function init(width,height) {
  let can = document.createElement('canvas')
  can.style.border = '3px black solid'
  can.width = width
  can.height = height
  document.body.appendChild(can)
}
