let inFrame

try {
  inFrame = window !== top
} catch (e) {
  inFrame = true
}

if (!inFrame && !navigator.userAgent.includes('Firefox')) {
  const popup = open('about:blank', '_blank')
  if (!popup || popup.closed) alert('Please allow popups and redirects.')
  else {
    const doc = popup.document
    const iframe = doc.createElement('iframe')
    const style = iframe.style
    const link = doc.createElement('link')

    const name = localStorage.getItem('name') || 'Google'
    const icon = localStorage.getItem('icon') || 'https://i0.wp.com/www.elitehrlogistics.com/wp-content/uploads/2020/07/google-g-2015-logo-png-transparent.png?fit=2400%2C2404&ssl=1'

    doc.title = name
    link.rel = 'icon'
    link.href = icon

    iframe.src = location.href
    style.position = 'fixed'
    style.top = style.bottom = style.left = style.right = 0
    style.border = style.outline = 'none'
    style.width = style.height = '100%'

    doc.head.appendChild(link)
    doc.body.appendChild(iframe)
    location.replace(localStorage.getItem('panicLink') || 'https://www.google.com/')
  }
}

window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden')
    document.body.insertAdjacentHTML(
      'beforeend',
      `<iframe src="/a/hvtrs8%2F-gmoelg.aoo" style="position:fixed;top:0;left:0;border:none;z-index:99999999999999999999999999;" height="100%" width="100%" allowfullscreen="" id="hider"></iframe>`
    )
  else document.querySelector('#hider')?.remove()
})