export { i18n } from './i18n'
export { isBlockedByCloudflare } from './parse'
export { getUserscriptManager } from './user-manager'
export { uuid } from './uuid'
export { initMenu, getPosition } from './menu'

export function getWebsite() {
  if (location.hostname.includes('.google.'))
    return configRequestImmediately('google')

  switch (location.hostname) {
    case 'www.bing.com':
    case 'cn.bing.com':
      return configRequestImmediately('bing')
    case 'www.baidu.com':
      return configRequestImmediately('baidu')
    case 'duckduckgo.com':
      return configRequestImmediately('duckduckgo')
    case 'www.deepl.com':
      return configRequestAfterClickButton('deepl')
    case 'www.golem.de':
      return configRequestAfterClickButton('golem')
    default:
      throw new Error(`unknown website: ${location.hostname}`)
  }

  function configRequestImmediately(name: string) {
    return {
      name,
      type: 'immediately',
    }
  }

  function configRequestAfterClickButton(name: string) {
    return {
      name,
      type: 'after-click-button',
    }
  }
}

export function getQuestion() {

}

