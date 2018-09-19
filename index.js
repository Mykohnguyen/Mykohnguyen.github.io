
$('.switch2').click(function(){
    $('.picture1').attr('src','coding_avatar_home.png'),
    $('.picture2').attr('src','coding_avatar_classroom.png'),
    $('.picture3').attr('src','coding_avatar_shop.png'),
    $('.project_info').hide()
    $('.project2_info').show()

}),
$('.switch').click(function(){
    $('.picture1').attr('src','momentum_home.png'),
    $('.picture2').attr('src','momentum_exercises.png'),
    $('.picture3').attr('src','momentum_stats.png'),
    $('.project_info').show()
    $('.project2_info').hide()
})

