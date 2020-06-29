import $ from 'jquery'
import './app4.css'
const html=`
<section id="app4">
        <div class="circle"></div>
    </section>
`
let $element=$(html).appendTo($('body>.page'))

//链式操作
let $circle=$("#app4 .circle")
$circle.on("mouseenter",()=>{
    $circle.addClass('active')
}).on("mouseleave",()=>{
    $circle.removeClass('active')
})