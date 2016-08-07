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
 * 判斷作業系統，下載 WeiDingServer 音效包時跳出訊息視窗
 * @param {String} filename 檔名
 */
function ResourcePack(filename) {
	android = (navigator.userAgent.indexOf("Android",0) != -1)?1:0;
	iphone = (navigator.userAgent.indexOf("iPhone",0) != -1)?1:0;
	ipad = (navigator.userAgent.indexOf("iPad",0) != -1)?1:0;
	ipod = (navigator.userAgent.indexOf("iPod",0) != -1)?1:0;
	if (android) {
		if(confirm("「" + filename + "」為電腦版 Minecraft 使用之音效包，您確定要在手機端下載嗎？")) {
			if(confirm("您將開始下載「" + filename + "」音效包，套用此音效包在 魏丁都不蔚汀伺服器 內將會樂趣加倍！(適用於 Minecraft 1.8.3)")) {
				location.href = '/download/' + filename;
			}
		}
	} else if (iphone) {
		if(confirm("「" + filename + "」為電腦版 Minecraft 使用之音效包，您確定要在手機端下載嗎？")) {
			if(confirm("您將開始下載「" + filename + "」音效包，套用此音效包在 魏丁都不蔚汀伺服器 內將會樂趣加倍！(適用於 Minecraft 1.8.3)")) {
				location.href = '/download/' + filename;
			}
		}
	} else if (ipad) {
		if(confirm("「" + filename + "」為電腦版 Minecraft 使用之音效包，您確定要在手機端下載嗎？")) {
			if(confirm("您將開始下載「" + filename + "」音效包，套用此音效包在 魏丁都不蔚汀伺服器 內將會樂趣加倍！(適用於 Minecraft 1.8.3)")) {
				location.href = '/download/' + filename;
			}
		}
	} else if (ipod) {
		if(confirm("「" + filename + "」為電腦版 Minecraft 使用之音效包，您確定要在手機端下載嗎？")) {
			if(confirm("您將開始下載「" + filename + "」音效包，套用此音效包在 魏丁都不蔚汀伺服器 內將會樂趣加倍！(適用於 Minecraft 1.8.3)")) {
				location.href = '/download/' + filename;
			}
		}
	} else {
		if(confirm("您將開始下載「" + filename + "」音效包，套用此音效包在 魏丁都不蔚汀伺服器 內將會樂趣加倍！(適用於 Minecraft 1.8.3)")) {
			location.href = '/download/' + filename;
		}
	}
}