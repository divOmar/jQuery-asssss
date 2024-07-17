$(".item h5").on("click",function(e){
    $(".item div").slideUp(100)
    $(e.target).next().slideDown(100)
})



$(".openIcon").click(function(){
    $(".sideNav").css("left","0")
})



$(".closeNav").click(function(){
    $(".sideNav").css("left","-270px")
})




let x= setInterval(function(){
    let countDownDate = new Date("Jan 5, 2030 15:37:25").getTime()
let now = new Date().getTime();
let distance = countDownDate - now
let days = Math.floor(distance / (1000 * 60 * 60 * 24))
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
$(".dateDays").html(`${days}d`)
$(".dateHours").html(`${hours}h`)
$(".dateMinutes").html(`${minutes}m`)
$(".dateScoends").html(`${seconds}s`)

})




$("textarea").keyup(function(){
    let myLenth=$(this).val().length
   
    $(".num").text(
        100-myLenth <=0 ? "no ava char":100-myLenth
    )
})




