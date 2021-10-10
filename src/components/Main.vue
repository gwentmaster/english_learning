<template>
  <div class="main">

    <van-dropdown-menu active-color="#EE0A24">
      <van-dropdown-item v-model="level" disabled :options="levelOption" />
      <van-dropdown-item @change="onUnitChanged" v-model="unit" :options="unitOption" />
      <van-dropdown-item v-model="mode" :options="modeOption" />
    </van-dropdown-menu>

    <div v-if="mode == 0">
      <div @click="onRememberCardClicked" v-for="word in wordToRemember">
        <van-cell center :title="word.english" :label="'/' + word.phonogram + '/'" :value="word.chinese" />
        <audio :src="'https://dict.youdao.com/dictvoice?audio=' + word.english + '&type=2'" :id="word.english"></audio>
      </div>
    </div>

    <div v-if="mode == 1"><van-notice-bar text="功能开发中, 敬请期待." /></div>

  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      level: '3I',
      mode: 0,
      unit: 'U1',
      levelOption: [
        {text: '3年级上册', value: "3I"}
      ],
      unitOption: [],
      unitData: {
        '3I': [
          {text: 'Unit 1', value: 'U1'},
          {text: 'Unit 2', value: 'U2'},
          {text: 'Unit 3', value: 'U3'},
          {text: 'Unit 4', value: 'U4'},
          {text: 'Unit 5', value: 'U5'},
          {text: 'Unit 6', value: 'U6'},
          {text: 'Unit 7', value: 'U7'},
          {text: 'Unit 8', value: 'U8'},
          {text: 'Unit 9', value: 'U9'}
        ]
      },
      modeOption: [
        {text: '记单词', value: 0},
        {text: '背单词', value: 1}
      ],
      wordData: {
        '3I': {
          'U1': [
            {english: 'hi', phonogram: 'haɪ', chinese: 'int. 嗨'},
            {english: 'hello', phonogram: 'həˈləʊ', chinese: 'int. 哈罗，你好'},
            {english: 'I', phonogram: 'aɪ', chinese: 'pron. 我'},
            {english: 'nice', phonogram: 'naɪs', chinese: 'adj. 令人愉快的，美好的'},
            {english: 'to', phonogram: 'tə; tu; tuː', chinese: 'prep. 朝；位于……；到某处'},
            {english: 'meet', phonogram: 'miːt', chinese: 'v. 结识，被引见（给某人）；（与……）见面，碰头'},
            {english: 'you', phonogram: 'juː; jə', chinese: 'pron. 你；你们'},
            {english: 'too', phonogram: 'tuː', chinese: 'adv. 太；也；很；还；非常；过度'},
            {english: 'Ms', phonogram: 'mɪz', chinese: 'abbr. 女士（冠于已婚或未婚女子姓或姓名前的称呼'},
            {english: 'what', phonogram: 'wʌt', chinese: 'det. 什么；多么；多少'},
            {english: 'be', phonogram: 'bi; biː', chinese: 'aux. 被（用于被动语态）；正；正在（用于进行时）'},
            {english: 'am', phonogram: 'əm; æm', chinese: 'v. 是（be 的第一人称单数现在时）'},
            {english: 'is', phonogram: 'ɪz', chinese: 'v. 是（be 的第三人称单数）'},
            {english: 'are', phonogram: 'ər; ɑːr; er', chinese: 'v. 是（be的第二人称单复数现在式）'},
            {english: 'your', phonogram: 'jʊr; jər', chinese: 'det. 你的，你们的'},
            {english: 'name', phonogram: 'neɪm', chinese: 'n. 名称，名字；姓名；名誉'},
            {english: 'this', phonogram: 'ðɪs', chinese: 'pron. 这，这个；这样；今，本；……的这个；有个'},
            {english: 'is', phonogram: 'ɪz', chinese: 'v. 是（be 的第三人称单数）'},
            {english: 'pen', phonogram: 'pen', chinese: 'n. 钢笔；作家；围栏'},
            {english: 'book', phonogram: 'bʊk', chinese: 'n. 书籍；卷；账簿；名册；工作簿'},
            {english: 'bag', phonogram: 'bæɡ', chinese: 'n. 包；袋；猎获物；（俚）一瓶啤酒'},
            {english: 'pencil', phonogram: 'ˈpensl', chinese: 'n. 铅笔；笔状物'},
            {english: 'goodbye', phonogram: 'ˌɡʊdˈbaɪ', chinese: 'int. 再见；告别'},
            {english: 'bye', phonogram: 'baɪ', chinese: 'int. 再见'},
            {english: 'a', phonogram: 'ə; eɪ', chinese: 'art. 一；任一；每一'},
            {english: 'an', phonogram: 'ən; æn', chinese: 'det. 一个（用于元音前）'}
          ],
          'U2': [
            {english: 'how', phonogram: 'haʊ', chinese: 'adv. 怎样，如何'},
            {english: 'fine', phonogram: 'faɪn', chinese: 'adj. 令人满意的；健康的；出色的；晴朗的；'},
            {english: 'thank', phonogram: 'θæŋk', chinese: 'vt. 感谢'},
            {english: 'let', phonogram: 'let', chinese: 'vt. 让'},
            {english: 'us', phonogram: 'əs; ʌs', chinese: 'pron. 我们'},
            {english: 'play', phonogram: 'pleɪ', chinese: 'vt. 游戏；扮演；演奏；播放；同…比赛'},
            {english: 'game', phonogram: 'ɡeɪm', chinese: 'n. 游戏；比赛'},
            {english: 'touch', phonogram: 'tʌtʃ', chinese: 'v. 接触'},
            {english: 'nose', phonogram: 'noʊz', chinese: 'n. 鼻子'},
            {english: 'mouth', phonogram: 'maʊθ', chinese: 'n. 嘴'},
            {english: 'eye', phonogram: 'aɪ', chinese: 'n. 眼睛'},
            {english: 'ear', phonogram: 'ɪr', chinese: 'n. 耳朵'},
            {english: 'look', phonogram: 'lʊk', chinese: 'vt. 看'},
            {english: 'good', phonogram: 'ɡʊd', chinese: 'adj. 好的；优良的'},
            {english: 'morning', phonogram: 'ˈmɔːrnɪŋ', chinese: 'n. 早晨'},
            {english: 'class', phonogram: 'klæs', chinese: 'n. 班级；种类；等级'}
          ],
          'U3': [
            {english: 'in', phonogram: 'ɪn', chinese: 'prep. 在……内'},
            {english: 'guess', phonogram: 'ɡes', chinese: 'v. 猜测，估计'},
            {english: 'toy', phonogram: 'tɔɪ', chinese: 'n. 玩具'},
            {english: 'turtle', phonogram: 'ˈtɜːrtl', chinese: 'n. 龟，甲鱼；海龟'},
            {english: 'no', phonogram: 'noʊ', chinese: 'adv. 不'},
            {english: 'have', phonogram: 'həv; əv; hæv', chinese: 'v. 拥有；有（想法、主意、观点等）'},
            {english: 'big', phonogram: 'bɪɡ', chinese: 'adj. 大的'},
            {english: 'panda', phonogram: 'ˈpændə', chinese: 'n. 熊猫；猫熊'},
            {english: 'long', phonogram: 'lɔːŋ', chinese: 'adj. 长的'},
            {english: 'arm', phonogram: 'ɑːrm', chinese: 'n. 手臂；武器'},
            {english: 'and', phonogram: 'ənd; ən; n; ænd', chinese: 'conj. 和，与'},
            {english: 'leg', phonogram: 'leɡ', chinese: 'n. 腿'},
            {english: 'monkey', phonogram: 'ˈmʌŋki', chinese: 'n. 猴子'},
            {english: 'yes', phonogram: 'jes', chinese: 'adv. 是, 是的'},
            {english: 'dad', phonogram: 'dæd', chinese: 'n. 爸爸；爹爹'},
            {english: 'head', phonogram: 'hed', chinese: 'n. 头'},
            {english: 'small', phonogram: 'smɔːl', chinese: 'adj. 小的'}
          ],
          'U4': [],
          'U5': [],
          'U6': [],
          'U7': [],
          'U8': [],
          'U9': []
        }
      },
      wordToRemember: []
    }
  },
  created: function () {
    this.unitOption = this.unitData['3I']
    this.wordToRemember = this.wordData['3I']['U1']
  },
  methods: {

    // 课本单元切换
    onUnitChanged: function(unit) {
      this.wordToRemember = this.wordData[this.level][this.unit]
    },

    // 记单词模式下单词被点击时播放单词发音
    onRememberCardClicked: function(event) {
      event.currentTarget.querySelector("audio").play()
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
