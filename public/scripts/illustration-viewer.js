/* Shared, same-page image viewer for portfolio routes and standalone case studies. */
(() => {
  const id = 'workflow-illustration-viewer'
  if (document.getElementById(id)) return
  const dialog = document.createElement('dialog')
  dialog.id = id
  dialog.className = 'illustration-viewer'
  dialog.setAttribute('aria-labelledby', `${id}-title`)
  dialog.setAttribute('data-lenis-prevent', '')
  dialog.innerHTML = `
    <header class="illustration-viewer__toolbar">
      <h2 id="${id}-title" class="illustration-viewer__title">Workflow illustration</h2>
      <div class="illustration-viewer__controls" role="group" aria-label="Image controls">
        <button type="button" data-action="out" aria-label="Zoom out">-</button>
        <output class="illustration-viewer__zoom" aria-live="polite">Fit</output>
        <button type="button" data-action="in" aria-label="Zoom in">+</button>
        <button type="button" data-action="fit">Fit</button>
        <button type="button" data-action="close" aria-label="Close illustration" autofocus>Close</button>
      </div>
    </header>
    <p class="illustration-viewer__hint">Use + to zoom in. Scroll or drag to explore the image.</p>
    <div class="illustration-viewer__stage" tabindex="0" role="region" aria-label="Illustration. Zoom in and scroll to explore.">
      <div class="illustration-viewer__canvas"><img class="illustration-viewer__image" alt="" draggable="false" /></div>
    </div>`
  document.body.append(dialog)
  const stage = dialog.querySelector('.illustration-viewer__stage')
  const canvas = dialog.querySelector('.illustration-viewer__canvas')
  const image = dialog.querySelector('img')
  const title = dialog.querySelector('h2')
  const output = dialog.querySelector('output')
  const out = dialog.querySelector('[data-action="out"]')
  const into = dialog.querySelector('[data-action="in"]')
  const close = dialog.querySelector('[data-action="close"]')
  let opener = null
  let zoom = 1
  let previousOverflow = ''
  let drag = null

  function render() {
    if (!dialog.open || !image.naturalWidth) return
    const centerX = (stage.scrollLeft + stage.clientWidth / 2) / Math.max(1, canvas.offsetWidth)
    const centerY = (stage.scrollTop + stage.clientHeight / 2) / Math.max(1, canvas.offsetHeight)
    const ratio = image.naturalWidth / image.naturalHeight
    const fit = Math.min(stage.clientWidth - 32, (stage.clientHeight - 32) * ratio, image.naturalWidth)
    const width = Math.max(1, fit * zoom)
    image.style.width = `${width}px`
    canvas.style.width = `${Math.max(stage.clientWidth, width + 32)}px`
    canvas.style.height = `${Math.max(stage.clientHeight, width / ratio + 32)}px`
    stage.scrollLeft = zoom === 1 ? 0 : centerX * canvas.offsetWidth - stage.clientWidth / 2
    stage.scrollTop = zoom === 1 ? 0 : centerY * canvas.offsetHeight - stage.clientHeight / 2
    canvas.style.cursor = zoom > 1 ? 'grab' : 'default'
    output.textContent = zoom === 1 ? 'Fit' : `${Math.round(zoom * 100)}%`
    out.disabled = zoom <= 1
    into.disabled = zoom >= 6
  }

  const observer = new MutationObserver(() => {
    if (dialog.open && opener && !opener.isConnected) dialog.close()
  })
  image.addEventListener('load', render)
  close.addEventListener('click', () => dialog.close())
  dialog.querySelector('[data-action="fit"]').addEventListener('click', () => { zoom = 1; render() })
  out.addEventListener('click', () => { zoom = Math.max(1, zoom / 1.5); render() })
  into.addEventListener('click', () => { zoom = Math.min(6, zoom * 1.5); render() })
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      const box = dialog.getBoundingClientRect()
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close()
    }
  })
  dialog.addEventListener('close', () => {
    observer.disconnect()
    document.documentElement.style.overflow = previousOverflow
    if (opener?.isConnected) opener.focus({ preventScroll: true })
    opener = null
    drag = null
  })
  window.addEventListener('resize', render)
  window.addEventListener('popstate', () => { if (dialog.open) dialog.close() })
  stage.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'mouse' || event.button !== 0 || zoom <= 1) return
    drag = { x: event.clientX, y: event.clientY, left: stage.scrollLeft, top: stage.scrollTop }
    stage.setPointerCapture(event.pointerId)
    canvas.style.cursor = 'grabbing'
    event.preventDefault()
  })
  stage.addEventListener('pointermove', (event) => {
    if (!drag) return
    stage.scrollLeft = drag.left - (event.clientX - drag.x)
    stage.scrollTop = drag.top - (event.clientY - drag.y)
  })
  const endDrag = () => { drag = null; canvas.style.cursor = zoom > 1 ? 'grab' : 'default' }
  stage.addEventListener('pointerup', endDrag)
  stage.addEventListener('pointercancel', endDrag)
  document.addEventListener('click', (event) => {
    const button = event.target instanceof Element ? event.target.closest('button.workflow-illustration__frame') : null
    if (!button || dialog.open) return
    const original = button.querySelector('img')
    if (!original) return
    opener = button
    zoom = 1
    title.textContent = original.alt.replace('Client-friendly workflow overview for ', '')
    image.alt = original.alt
    image.src = original.currentSrc || original.src
    previousOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    dialog.showModal()
    close.focus({ preventScroll: true })
    observer.observe(document.body, { childList: true, subtree: true })
    render()
  })
})()
