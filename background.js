/**
 * Created by janindua on 5/7/15.
 */
chrome.app.runtime.onLaunched.addListener(function(){
    chrome.app.window.create('window.html', {
        'bounds': {
            'height': 500,
            'width': 400
        }
    });

});
