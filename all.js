$(document).ready(function(){
    $('.rectangle-item').on('click',function(e){
        $(this).tab('show');
        // console.log(this,'this');
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $('#loginModalCenter').modal({
        keyboard: false
      })
    
  
    
})

function goNext() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(
    { 
        event: 'success-link',
        name: 'xxx', 
        phone: 0912345678,
        id: 'test-12345' 
    })

    window.location.href='finish.html'
}