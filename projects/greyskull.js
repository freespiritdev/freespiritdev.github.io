$('#main-link').on('click', function(event){
    event.preventDefault();
    window.location.href = "http://placebear.com";
});

let herStories = ["For the honor of Grayskull, I am She-Ra!"];

$(".sub-stories").on("click", ".sub-story", function() {
        let $clone = $(this).clone();
        let parent = $(this).parent();
        $(this).remove();
        $clone.find("p").text(herStories[Math.round(Math.random() * herStories.length)]);
        $clone.appendTo(parent);
})


$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});


