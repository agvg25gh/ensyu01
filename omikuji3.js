
//**********************************************************************
//  getOmikuji() 
//	
//	引数　なし
//　　　　  
//	戻値　なし
//　　　　
//**********************************************************************
function getOmikuji() {
    var omikuji = ["大吉", "中吉", "小吉", "凶", "大凶"];
    // 0 - n
    // Math.floor(Math.random() * (n + 1))
    var result = Math.floor(Math.random() * omikuji.length);
    // alert(omikuji[result]);
    document.getElementById('result').innerHTML = omikuji[result];
    
}

//**********************************************************************
//  getOmikuji3() 
//	
//	引数　おみくじを表示するspan要素
//　　　　  
//	戻値　なし
//　　　　
//**********************************************************************
function getOmikuji3(aEle) {
    var omikuji = ["大吉", "中吉", "小吉", "凶", "大凶"];
    // 0 - n
    // Math.floor(Math.random() * (n + 1))
    var result = Math.floor(Math.random() * omikuji.length);
    // alert(omikuji[result]);
    //document.getElementById('result').innerHTML = omikuji[result];
    aEle.innerHTML = omikuji[result];
}
