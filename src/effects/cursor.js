// Modern, performant, neutral custom cursor using requestAnimationFrame
// Not themed to Reiki or any specific style
export default function initCustomCursor() {
  // Remove any existing custom cursor
  const old = document.getElementById('custom-cursor')
  if (old) old.remove()

  // Create cursor element
  const cursor = document.createElement('div')
  cursor.id = 'custom-cursor'
  Object.assign(cursor.style, {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    background: 'rgba(80,180,255,0.7)',
    boxShadow: '0 0 16px 4px rgba(80,180,255,0.3)',
    pointerEvents: 'none',
    zIndex: 99999,
    transform: 'translate(-50%, -50%)',
    transition: 'background 0.2s, box-shadow 0.2s',
    mixBlendMode: 'lighten',
    willChange: 'transform',
  })
  document.body.appendChild(cursor)

  let mouseX = window.innerWidth/2, mouseY = window.innerHeight/2
  let animX = mouseX, animY = mouseY
  let running = true

  function onMove(e) {
    mouseX = e.clientX
    mouseY = e.clientY
  }
  document.addEventListener('mousemove', onMove)

  function animate() {
    animX += (mouseX - animX) * 0.18
    animY += (mouseY - animY) * 0.18
    cursor.style.left = animX + 'px'
    cursor.style.top = animY + 'px'
    if (running) requestAnimationFrame(animate)
  }
  animate()

  // Optional: cursor click feedback
  function onDown() {
    cursor.style.background = 'rgba(80,180,255,1)'
    cursor.style.boxShadow = '0 0 32px 8px rgba(80,180,255,0.5)'
  }
  function onUp() {
    cursor.style.background = 'rgba(80,180,255,0.7)'
    cursor.style.boxShadow = '0 0 16px 4px rgba(80,180,255,0.3)'
  }
  document.addEventListener('mousedown', onDown)
  document.addEventListener('mouseup', onUp)

  // Hide on mobile/touch
  function onTouch() { cursor.style.display = 'none' }
  function onMouse() { cursor.style.display = '' }
  document.addEventListener('touchstart', onTouch)
  document.addEventListener('mousemove', onMouse)

  // Cleanup
  return () => {
    running = false
    cursor.remove()
    document.removeEventListener('mousemove', onMove)
    document.removeEventListener('mousedown', onDown)
    document.removeEventListener('mouseup', onUp)
    document.removeEventListener('touchstart', onTouch)
    document.removeEventListener('mousemove', onMouse)
  }
}
