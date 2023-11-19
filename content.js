
// TODO: This script is meant to be clicking the Text-Only link on google cache page.
// Well it does Notification. Fix it.
document.addEventListener('DOMContentLoaded', function() {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        if (links[i].href.endsWith('src=0')) {
            links[i].click();
            break;
        }
    }
});
