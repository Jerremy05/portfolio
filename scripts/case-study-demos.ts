import { readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import type { Plugin } from 'vite'
import { withWorkflowIllustration, WORKFLOW_STYLESHEET_PATH } from '../src/content/workflow-illustrations.ts'

/** Serve and publish the canonical case-study documents at their original demo URLs.
 * The portfolio imports the same files as lazy raw modules, so copy edits have one source.
 */
export function caseStudyDemos(): Plugin {
  const directory = new URL('../src/content/case-studies/', import.meta.url)
  const files = readdirSync(directory).filter((file) => /^site-\d+\.html$/.test(file))
  const stylesheet = new URL('../src/features/case-study/workflow-illustration.css', import.meta.url)
  const read = (file: string) => withWorkflowIllustration(readFileSync(new URL(file, directory), 'utf8'), file.replace(/\.html$/, ''))
  return {
    name: 'case-study-demos',
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        const path = new URL(request.url ?? '/', 'http://localhost').pathname
        if (path === WORKFLOW_STYLESHEET_PATH) {
          response.setHeader('Content-Type', 'text/css; charset=utf-8')
          return response.end(readFileSync(stylesheet, 'utf8'))
        }
        const file = /^\/demos\/sites\/(site-\d+\.html)$/.exec(path)?.[1]
        if (!file || !files.includes(file)) return next()
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        response.end(read(file))
      })
    },
    buildStart() {
      this.addWatchFile(fileURLToPath(stylesheet))
      files.forEach((file) => this.addWatchFile(fileURLToPath(new URL(file, directory))))
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: WORKFLOW_STYLESHEET_PATH.slice(1), source: readFileSync(stylesheet, 'utf8') })
      files.forEach((file) => this.emitFile({ type: 'asset', fileName: `demos/sites/${file}`, source: read(file) }))
    },
  }
}
