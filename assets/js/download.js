/**
 * 下載檔案時跳出訊息視窗
 * @param {String} filename 檔名
 */
function Download(filename) {
	if(confirm("您是否要下載「" + filename + "」？")) {
		location.href = '/download/' + filename;
	}
}

/**
 * 下載 WeiDingServer 音效包時跳出訊息視窗
 * @param {String} filename 檔名
 */
function ResourcePack(filename) {
	if(confirm("您將開始下載「" + filename + "」音效包，套用此音效包在 魏丁都不蔚汀伺服器 內將會樂趣加倍！(適用於 Minecraft 1.8.3)")) {
		location.href = '/download/' + filename;
	}
}