//"use strict"
/////////////////////定数定義/////////////////////
const teamName = "古知野健康倶楽部";
const ekidenName = "江南市民駅伝競走大会";
const topURL = "http://kochiken.starfree.jp/";

//var htmlNumber;
const htmlList = [
				  //[ファイル名, タイトル名, 内容関数]
					["index.html", teamName, index()],
					["home.html", teamName, home()],
					["result.html", ekidenName + "結果", result()],
					["photo.html", ekidenName + "写真", photo()]
				];
/////////////////////関数（外部用）///////////////
//head
function head(htmlNumber){
	var st = "";
	if(htmlNumber==0){
		st += "<meta name=\"google-site-verification\" content=\"jjVCQ0SlR6T4c2Mgrg3g31JOoj5oxeuY2oLSlJ0xcWM\" />";
		st += "<meta http-equiv=\"refresh\" content=\"0; URL='home.html'\">";
	}
	st += "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js\"></script>";							//jQuery
	st += "<link rel=\"stylesheet\" type=\"text/css\" href=\"http://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css\">";			//jQuery(slick)
	st += "<link rel=\"stylesheet\" type=\"text/css\" href=\"http://cdn.jsdelivr.net/jquery.slick/1.6.0/slick-theme.css\">";	//jQuery(slick)
	st += "<script type=\"text/javascript\" src=\"http://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js\"></script>";			//jQuery(slick)
//	st += "<script src=\"jquery.min.js\"></script>";								//jQuery
//	st += "<link rel=\"stylesheet\" type=\"text/css\" href=\"slick.css\">";			//jQuery(slick)
//	st += "<link rel=\"stylesheet\" type=\"text/css\" href=\"slick-theme.css\">";	//jQuery(slick)
//	st += "<script type=\"text/javascript\" src=\"slick.min.js\"></script>";		//jQuery(slick)
	
	st += "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">";
	st += "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=11\">";
	st += "<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">";

	st += "<title>" + htmlList[htmlNumber][1] + "</title>";
	write(st);
}
//body
function body(htmlNumber){
	var st = "";
	st +=  htmlList[htmlNumber][2];
	write(st);
}
//HTMLの出力
function write(st){
	document.open();
	document.write(st);
	document.close();
}
/////////////////////index.html///////////////////
function index(){
	var st = "";
	st += "自動でページを移動します。";
	st += br();
	st += "移動しない場合は下記のボタンを押してください。";
	st += br();
	st += linkButton("home.html", "ホームへ");
	return st;
}
/////////////////////home.html////////////////////
function home(){	
	//変数と定数の定義
	const linkNumber = 6;	//リンクの数
	const colNumber = 2;	//行の数
	//リンク配列の定義(二次元配列)
	var linkList = new Array(linkNumber);
	for(var i = 0; i < linkNumber; i++) linkList[i] = new Array(2);
	//リンク配列の初期化
	for(var i = 0; i < linkNumber; i++) linkList[i] = ["home.html", ""];
	//リンク配列の設定
	linkList[0] = ["result.html", "記録"];
	linkList[1] = ["photo.html", "写真"];
	linkList[2] = ["history.htm", "大会"];
	//HTML記述
	var st = "";
	st += br();
	st += header(teamName);
	st += "<table id=\"navi\">";
	st += "<tr>";
	for(var i = 0; i < linkNumber; i++){
		st += td(a(linkList[i][0], br() + linkList[i][1]));
		if(i % colNumber == 1 && i != linkNumber - 1){
			st += "</tr>";
			st += "<tr>";
		}
	}
	st += "</tr>";
	st += "</table>";
	return st;
}
/////////////////////photo.html///////////////////
function photo(){
	//変数と定数の定義
	const imgNumber = 2;	//イメージの数
	//イメージ配列の定義(二次元配列)
	var imgList = new Array(imgNumber);
	for(var i = 0; i < imgNumber; i++) imgList[i] = new Array(3);
	//イメージ配列の初期化
	for(var i = 0; i < imgNumber; i++) imgList[i] = ["NoImage.jpg", "NoImage", "NoImageTitle"];
	//イメージ配列の設定
	imgList[0] = ["20180211_shimin.jpg", "2018年2月11日第52回江南市民駅伝競走大会", "2018年2月11日　第52回" + ekidenName];
	imgList[1] = ["littleworld.jpg", "2018年12月16日第1回世界一周マラソン", "2018年12月16日　第1回世界一周マラソン"];
	//HTML記述
	var st = "";
	st += header("写真");
	st += homeButton();
	st += "<ul class=\"slide_item\">";
	for(var i = 0; i < imgNumber; i++){
		st += "<li>";
		st += img(imgList[i][0], imgList[i][1]);
		st += h1(imgList[i][2]);
		st += "</li>";
	}
	st += "</ul>";
	st += slide_item();
	return st;
}
/////////////////////result.html//////////////////
function result(){
	var st = "";
	st += header(ekidenName + "結果");
	st += homeButton();
	st += h1("第50回" + ekidenName);
	st += p("19位");
	st += br();
	st += h1("第51回" + ekidenName);
	st += p("8位");
	st += br();
	st += h1(a_blank("52_result.pdf", "第52回" + ekidenName));
	st += "<table><tr>";
	st += th("Ａチーム");
	st += th("Ｂチーム");
	st += "</tr><tr>";
	st += td("5位");
	st += td("30位");
	st += "</tr></table>";
	return st;
}
/////////////////////関数（内部）/////////////////
//ホームボタン
function homeButton(){
	var st = "";
	st += "<table id=\"homeButton\"><tr>";
	st += td(a("home.html", br() + "ホームへ"));
	st += "</tr></table>";
	return st;
}
//リンクボタン
function linkButton(linkURL, buttonName){
	var st = "";
	st += "<button onclick = ";
	st += "\"location.href = '";
	st += linkURL;
	st += "'\">";
	st += buttonName;
	st += "</button>";
	return st;
}
//リンク
function a(href, name){
	var st = "";
	st += "<a href=";
	st += href;
	st += ">";
	st += name;
	st += "</a>";
	return st;
}
//リンク（別ウィンドウ）
function a_blank(href, name){
	var st = "";
	st += "<a href=";
	st += href;
	st += " target=\"_blank\">";
	st += name;
	st += "</a>";
	return st;
}
//改行
function br(){
	return "<br>"
}
//ヘッダー
function header(headerName){
	var st = "";
	st += "<header>";
	st += h1(headerName);
	st += "</header>";
	return st;
}
//フッター
function footer(footerName){
	var st = "";
	st += "<footer>";
	st += h1(footerName);
	st += "</footer>";
	return st;
}
//画像
function img(src, imageName){
	var st = "";
	st += "<a href=\"";
	st += src;
	st += "\" target=\"_blank\">";
	st += "<img src=\"";
	st += src;
	st += "\" alt=\"";
	st += imageName;
	st += "\">";
	st += "</a>";
	return st;
}
//<h1>
function h1(h1Name){
	var st = "";
	st += "<h1>";
	st += h1Name;
	st += "</h1>";
	return st;
}
//<h2>
function h2(h2Name){
	var st = "";
	st += "<h2>";
	st += h2Name;
	st += "</h2>";
	return st;
}
//<h3>
function h3(h3Name){
	var st = "";
	st += "<h3>";
	st += h3Name;
	st += "</h3>";
	return st;
}
//<h4>
function h4(h4Name){
	var st = "";
	st += "<h4>";
	st += h4Name;
	st += "</h4>";
	return st;
}
//<h5>
function h5(h5Name){
	var st = "";
	st += "<h5>";
	st += h5Name;
	st += "</h5>";
	return st;
}
//<h6>
function h6(h6Name){
	var st = "";
	st += "<h6>";
	st += h6Name;
	st += "</h6>";
	return st;
}
//<th>
function th(thName){
	var st = "";
	st += "<th>";
	st += thName;
	st += "</th>";
	return st;
}
//<td>
function td(tdName){
	var st = "";
	st += "<td>";
	st += tdName;
	st += "</td>";
	return st;
}
//<p>
function p(pName){
	var st = "";
	st += "<p>";
	st += pName;
	st += "</p>";
	return st;
}
//html
function html(htmlNumber){
	write(htmlList[htmlNumber][2]);
}
//slide_item
function slide_item(){
	var st = "";
	st += "<script>$(\".slide_item\").slick({ accessibility: false, autoplay: true, autoplaySpeed: 10000, dots: true, fade: true, arrows: false});</script>";
	st += "<style>.slide_item{width:100%; margin:auto; padding:0;} .slide_item img{width:100%; margin:auto; padding:0;}</style>";
	return st;
}