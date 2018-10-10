
$('.switch2').click(function(){
    $('.picture1').attr('src','static/images/coding_avatar_home.png'),
    $('.picture2').attr('src','static/images/coding_avatar_classroom.png'),
    $('.picture3').attr('src','static/images/coding_avatar_shop.png'),
    $('.project_info').hide()
    $('.project2_info').show()

}),
$('.switch').click(function(){
    $('.picture1').attr('src','static/images/momentum_home.png'),
    $('.picture2').attr('src','static/images/momentum_exercises.png'),
    $('.picture3').attr('src','static/images/momentum_stats.png'),
    $('.project_info').show()
    $('.project2_info').hide()
})

