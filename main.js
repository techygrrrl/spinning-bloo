import './style.css'

function animateFerris() {
  const params = new URLSearchParams(location.search)
  const speed = parseInt(params.get('speed') || '10')

  const css = `.rotating {
    -webkit-animation: rotating ${speed}s linear infinite;
    -moz-animation: rotating ${speed}s linear infinite;
    -ms-animation: rotating ${speed}s linear infinite;
    -o-animation: rotating ${speed}s linear infinite;
    animation: rotating ${speed}s linear infinite;
  }`

  const styleElement = document.createElement('style')
  styleElement.innerHTML = css

  document.head.appendChild(styleElement)
}

document.addEventListener('DOMContentLoaded', () => {
  animateFerris()
})