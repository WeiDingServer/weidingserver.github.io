/**
 * 進入語音群
 * @param {Number} sid 群ID
 */
function goChannel(sid) {
    location.href = 'rctw://enterServer/?sid=' + sid;
}