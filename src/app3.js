import $ from 'jquery'
import './app3.css'

let $square=$('#app3 .square')
$square.on('click',()=>{
    $square.toggleClass('active')
})