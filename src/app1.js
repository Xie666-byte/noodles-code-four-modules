import './app1.css'
import $ from 'jquery'
//html初始化
let html=`
<section id="app1">
        <div class="output">
            <span id="number">100</span>
        </div>
        <div class="actions">
            <button id="add1">+1</button>
            <button id="minus1">-1</button>
            <button id="mul2">*2</button>
            <button id="divide2">÷2</button>
        </div>
</section>
`
const $element=$(html).appendTo($('body>.page'))
//获取元素
let $button1=$('#add1')
let $button2=$('#minus1')
let $button3=$('#mul2')
let $button4=$('#divide2')
let $number=$('#number')
//数据初始化
let n=localStorage.getItem("n")
//数据渲染到页面
$number.text(n||100)
//绑定点击事件
$button1.on('click',()=>{
    let n=parseInt($number.text())
    n+=1
    localStorage.setItem("n",n)
    $number.text(n)
})
$button2.on('click',()=>{
    let n=parseInt($number.text())
    n-=1
    //将n存到本地
    localStorage.setItem("n",n)
    $number.text(n)
})
$button3.on('click',()=>{
    let n=parseInt($number.text())
    n*=2
    localStorage.setItem("n",n)
    $number.text(n)
})
$button4.on('click',()=>{
    let n=parseInt($number.text())
    n/=2
    localStorage.setItem("n",n)
    $number.text(n)
})