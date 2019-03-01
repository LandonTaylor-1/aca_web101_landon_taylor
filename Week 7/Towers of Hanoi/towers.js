$(document).ready(function() {
    let $block = null;
    
    $('[row]').click(function() {
      if ($block) {
        $(this).append($block);
        $block = null;
      } else {
        $block = $(this).children().last().detach();
      }
    })
});