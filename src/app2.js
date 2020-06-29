import $ from 'jquery'
import './app2.css'
const html=`
<section id="app2">
        <ol class="tab-bar">
            <li>1</li>
            <li>2</li>
        </ol>
        <ol class="tab-content">
            <li>内容1</li>
            <li>内容2</li>
        </ol>
    </section>
`
const $element=$(html).appendTo($('body>.page'))
let $tabBar=$('#app2 .tab-bar')
let $tabContent=$('#app2 .tab-content')
let index=localStorage.getItem('app2.index') || 0

$tabBar.on("click","li",(e)=>{
    let $li=$(e.currentTarget)
    let index=$li.index()
    localStorage.setItem('app2.index',index)
    $tabContent.children()
    .eq(index).addClass('active')
    .siblings().removeClass('active')
})
$tabBar.children().eq(index).trigger('click')