$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $("section")
    var fades = $(".text-parallax")

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i]

        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible")
            for (var i = 0; i < fades.length; i++) {
                var fade = fades[i]
                $(fade).addClass("fade-in")
                if (fade.classList.contains("fade-out")) {
                    $(fade).removeClass("fade-out")
                }
            }
        } else {
            $(tag).removeClass("visible")
            for (var i = 0; i < fades.length; i++) {
                var fade = fades[i]
                if (fade.classList.contains("fade-in")) {
                    $(fade).addClass("fade-out")
                    $(fade).removeClass("fade-in")
                }
            }
        }
    }
})