myApp = angular.module('myApp', []);
var ctx = document.getElementById("cv").getContext("2d");
var cvs = document.getElementById("cv");



myApp.controller('myCtrl', function($scope){
  $scope.name = "Dj Name";
  $scope.size = 16;
  $scope.cw = 800;
  $scope.ch = 600;
  
  $scope.fontList = [
    {
      name:"Montserrat"
    },{
      name:"Permanent Marker"
    },{
      name:"Rock Salt"
    },{
      name:"Sniglet"
    },{
      name:"Press Start 2P"
    },{
      name:"Monoton"
    },{
      name:"Audiowide"
    },{
      name:"Sacramento"
    },{
      name:"Great Vibes"
    },{
      name:"Dancing Script"
    },{
      name:"Oleo Script"
    },{
      name:"Lobster Two"
    },{
      name:"Homemade Apple"
    },{
      //日本語
      name:"---以下日本語---"
    },{
      //日本語
      name:"Noto Sans JP"
    },{
      name:"Rounded Mplus 1c"
    },{
      name:"Hannari"
    },{
      name:"Nico Moji"
   
    }
  ];

  $scope.font = $scope.fontList[7].name;
 
  $scope.txt =$scope.name; //描画する文字
  var italic = "";
  var bold = "";
  var bg = 0;
  var countup = function(){
    
    cvs.setAttribute("width", $scope.cw);
    cvs.setAttribute("height", $scope.ch);
    
    
    
    
    
    
    if($scope.italic == true){
      italic ="italic ";
    }else{
      italic = "";
    };
    if($scope.bold == true){
      bold ="bold ";
    }else{
      bold = "";
    };
    if($scope.bg == true){
      bg = 0;
    }else{
      bg = 1;
    };
    ctx.font = bold + italic + $scope.size +"0px '"+ $scope.font+"'";
    ctx.clearRect(0, 0, $scope.cw, $scope.ch);
    ctx.fillStyle = 'rgba(0, 0, 0, '+ bg +')';
    ctx.rect(0, 0, $scope.cw, $scope.ch);
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText($scope.name,$scope.cw/2, $scope.ch/2 + ($scope.size * 3)); 
    chgImg();
  } 
  setInterval(countup, 50);
});
//canvasデータを画像に変換にする関数
function chgImg()
{
  var png = cvs.toDataURL();
  document.getElementById("newImg").src = png;
}