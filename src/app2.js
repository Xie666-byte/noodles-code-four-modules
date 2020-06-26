import $ from 'jquery'
import './app2.css'
let $tabBar=$('#app2 .tab-bar')
let $tabContent=$('#app2 .tab-content')

$tabBar.on("click","li",(e)=>{
    let $li=$(e.currentTarget)
    let index=$li.index()
    $tabContent.children()
    .eq(index).addClass('active')
    .siblings().removeClass('active')
})
$tabBar.children().eq(0).trigger('click')