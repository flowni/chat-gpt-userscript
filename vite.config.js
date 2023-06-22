import { defineConfig } from 'vite'
import monkey, { cdn } from 'vite-plugin-monkey'
import vue from '@vitejs/plugin-vue'
import { version } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        icon: 'https://github.com/zhengbangbo/oss/raw/main/logo/chat-gpt-userscript.png',
        name: {
          '': 'ChatGPT Search',
          'zh-CN': 'ChatGPT 搜索',
          'zh-SG': 'ChatGPT 搜索',
          'zh-TW': 'ChatGPT 搜索',
          'zh-HK': 'ChatGPT 搜索',
        },
        version,
        description: {
          '': 'ChatGPT answers displayed in sidebar after search (Google, Bing, Baidu, DuckDuckGo and DeepL)',
          'zh-CN': '侧栏显示 ChatGPT 回答（Google、Bing、百度、DuckDuckGo和DeepL）',
          'zh-SG': '侧栏显示 ChatGPT 回答（Google、Bing、百度、DuckDuckGo和DeepL）',
          'zh-TW': '側欄顯示 ChatGPT 回答（Google、Bing、百度、DuckDuckGo和DeepL）',
          'zh-HK': '側欄顯示 ChatGPT 回答（Google、Bing、百度、DuckDuckGo和DeepL）',
        },
        author: 'Zheng Bang-Bo(https://github.com/zhengbangbo)',
        match: [
          'https://www.golem.de/news/*',
        ],
        grant: [
          'GM_xmlhttpRequest',
          'GM_setValue',
          'GM_getValue',
          'GM_deleteValue',
          'GM_addStyle',
          'GM_registerMenuCommand',
          'GM_unregisterMenuCommand',
        ],
        namespace: 'https://greasyfork.org/scripts/456077',
        updateURL: 'https://greasyfork.org/scripts/456077-chat-gpt-search-sidebar/code/chat-gpt-search-sidebar.user.js',
        downloadURL: 'https://greasyfork.org/scripts/456077-chat-gpt-search-sidebar/code/chat-gpt-search-sidebar.user.js',
        connect: 'chat.openai.com',
        license: 'MIT',
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
        },
      },
    }),
  ],
})
