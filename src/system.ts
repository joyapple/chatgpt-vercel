export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `
- 如果本项目对你有所帮助，可以给我的小狗辣条 [买点零食](https://github.com/joyapple/chatgpt-vercel/blob/main/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230318102528.png?raw=true)，但不接受任何付费功能请求。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof setting

export const resetContinuousDialogue = false
