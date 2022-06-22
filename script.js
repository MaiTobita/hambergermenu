// 何度も出てくる要素は変数として取得しておく（varに代入）
// 頭に$を付けておくと分かりやすい

var $btnIcon = $('#btn i')

$('#btn').on('click', function () {
    $('body').toggleClass('open')

    // console.log($('body').hasClass('open'))

    if ($('body').hasClass('open')) {
        $btnIcon
            .removeClass('ri-menu-line')
            .addClass('ri-close-line')
    } else {
        $btnIcon
            .removeClass('ri-close-line')
            .addClass('ri-menu-line')
    }

})