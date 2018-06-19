import { createBrowserHistory, createHashHistory } from 'history'

const modes = {
  hash: createHashHistory,
  history: createBrowserHistory
}
let history

export default function getHistory (mode) {
  if (history === undefined) {
    history = (modes[mode] || modes.hash)()
  }
  return history
}
