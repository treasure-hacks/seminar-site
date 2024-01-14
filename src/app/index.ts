'use client'

window.addEventListener('load',  () => {
  const ref = new URL(location.href).searchParams.get('ref')
  if (!ref) return

  document.querySelectorAll<HTMLAnchorElement>('a[href$="/register/"]')
    .forEach(a => { a.href += '?ref=' + encodeURIComponent(ref) })
})
