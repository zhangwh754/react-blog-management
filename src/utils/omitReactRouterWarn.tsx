const _console_warn = console.warn

console.warn = function (...args) {
  const message = args.join(' ')
  if (typeof message === 'string' && message.includes('React Router Future Flag Warning')) {
    return
  }

  _console_warn.apply(console, args)
}
