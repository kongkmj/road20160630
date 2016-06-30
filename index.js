var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose  = require('mongoose');
var querystring = require('querystring');

var data_1,data_2,data_3,data_4,data_5;
var r11,r21,r31,r41,r51;
var noti1,noti2,noti3,noti4,noti5;
var parse;
var alaram="";

// TCP
var net = require('net');

var server = net.createServer(function (socket) {


  console.log(socket.address().address+"connected");


  rule1.find({}).sort('-createdAt').exec(function (err, r1) {

      r11=r1[0];
      if(r11==undefined){
      r11={rule1:"100",range1:"매우민감"};
      }
      rule2.find({}).sort('-createdAt').exec(function (err, r2) {

          r21=r2[0];
          if(r21==undefined){
          r21={rule2:"100",range2:"매우민감"};
          }
          rule3.find({}).sort('-createdAt').exec(function (err, r3) {

              r31=r3[0];
              if(r31==undefined){
              r31={rule3:"100",range3:"매우민감"};
              }
              rule4.find({}).sort('-createdAt').exec(function (err, r4) {

                  r41=r4[0];
                  if(r41==undefined){
                  r41={rule4:"100",range4:"매우민감"};
                  }
                  rule5.find({}).sort('-createdAt').exec(function (err, r5) {

                      r51=r5[0];
                      if(r51==undefined){
                      r51={rule5:"100",range5:"매우민감"};
                      }
                    });
                });
            });
        });
    });




  //client로 부터 오는 data 출력
  socket.on('data',function (data) {
  //문자열로 변환
  var recieveData   = ""+data;
  var recieveArray  = recieveData.split(',');
  data_1=recieveArray[0];
  data_2=recieveArray[1];
  data_3=recieveArray[2];
  data_4=recieveArray[3];
  data_5=recieveArray[4];









// 데이터 확인 로그

//  console.log(recieveArray);
  //console.log("1번 데이터: "+recieveArray[0]);
  //console.log("2번 데이터: "+recieveArray[1]);
  //console.log("3번 데이터: "+recieveArray[2]);
  //console.log("4번 데이터: "+recieveArray[3]);
//  console.log("5번 데이터: "+recieveArray[4]);

//console.log(r11);
//console.log(r21);
//console.log(r31);
//console.log(r41);
//console.log(r51);


if(r11.range1=="매우민감"){
  parse1=1000;
}
if(r11.range1=="민감"){
  parse1=2000;
}
if(r11.range1=="보통"){
  parse1=4000;
}
if(r11.range1=="둔감"){
  parse1=8000;
}
if(r11.range1=="매우둔감"){
  parse1=16000;
}
//2
if(r21.range2=="매우민감"){
  parse2=1000;
}
if(r21.range2=="민감"){
  parse2=2000;
}
if(r21.range2=="보통"){
  parse2=4000;
}
if(r21.range2=="둔감"){
  parse2=8000;
}
if(r21.range2=="매우둔감"){
  parse2=16000;
}
//3
if(r31.range3=="매우민감"){
  parse3=1000;
}
if(r31.range3=="민감"){
  parse3=2000;
}
if(r31.range3=="보통"){
  parse3=4000;
}
if(r31.range3=="둔감"){
  parse3=8000;
}
if(r31.range3=="매우둔감"){
  parse3=16000;
}
//4
if(r41.range4=="매우민감"){
  parse4=1000;
}
if(r41.range4=="민감"){
  parse4=2000;
}
if(r41.range4=="보통"){
  parse4=4000;
}
if(r41.range4=="둔감"){
  parse4=8000;
}
if(r41.range4=="매우둔감"){
  parse4=16000;
}
//5
if(r51.range5=="매우민감"){
  parse5=1000;
}
if(r51.range5=="민감"){
  parse5=2000;
}
if(r51.range5=="보통"){
  parse5=4000;
}
if(r51.range5=="둔감"){
  parse5=8000;
}
if(r51.range5=="매우둔감"){
  parse5=16000;
}

//1 연산
var plus1 =parseInt(r11.rule1)+parse1;
var minus1 =parseInt(r11.rule1)-parse1;
//console.log(plus1);
//console.log(minus1);
if((recieveArray[0]>plus1)||(recieveArray[0]<minus1)){
  noti1=1;
}
if((recieveArray[0]<=plus1)&&(recieveArray[0]>=minus1)){
  noti1=0;
}
//console.log("noti1 :"+noti1);
//2 연산
var plus2 =parseInt(r21.rule2)+parse2;
var minus2 =parseInt(r21.rule2)-parse2;

if((recieveArray[1]>plus2)||(recieveArray[1]<minus2)){
  noti2=1;
}
if((recieveArray[1]<=plus2)&&(recieveArray[1]>=minus2)){
  noti2=0;
}
//console.log("noti2 :"+noti2);
//3연산
var plus3 =parseInt(r31.rule3)+parse3;
var minus3 =parseInt(r31.rule3)-parse3;

if((recieveArray[2]>plus3)||(recieveArray[2]<minus3)){
  noti3=1;
}
if((recieveArray[2]<=plus3)&&(recieveArray[2]>=minus3)){
  noti3=0;
}
//console.log("noti3 :"+noti3);
//4연산
var plus4 =parseInt(r41.rule4)+parse4;
var minus4 =parseInt(r41.rule4)-parse4;

if((recieveArray[3]>plus4)||(recieveArray[3]<minus4)){
  noti4=1;
}
if((recieveArray[3]<=plus4)&&(recieveArray[3]>=minus4)){
  noti4=0;
}
//console.log("noti4 :"+noti4);
//5연산
var plus5 =parseInt(r51.rule5)+parse5;
var minus5 =parseInt(r51.rule5)-parse5;

if((recieveArray[4]>plus5)||(recieveArray[4]<minus5)){
  noti5=1;
}
if((recieveArray[4]<=plus5)&&(recieveArray[4]>=minus5)){
  noti5=0;
}
//console.log("noti5 :"+noti5);

//알람 배열
var notiarr=[noti1,noti2,noti3,noti4,noti5];
//console.log("notiarr: "+notiarr);
  alaram="";
  for(var i=0;i<5;i++){

    if(notiarr[i]==1){
      alaram+=1+i+"번 ";
    }
  }

  console.log("알람: "+alaram);



//alaram DB저장
  var alaramsave = new alaram1({
        id:1,
        alaram:alaram
      });
    //  console.log("알람저장");

    alaramsave.save(function (err,alaramsave) {
      //  console.log(alaramsave);
  });



// 1 알림
if(noti1==1){
  var log1 = new beacon1({
      bnum:1,
      gnum:1,
      status:"경고",
      beacon:recieveArray[0]

    });
    console.log("1번 비콘 경고 받음");

  log1.save(function (err,log1) {
    //  console.log(log1);
  });
}
//2 알림
if(noti2==1){
  var log2 = new beacon2({
      bnum:2,
      gnum:1,
      status:"경고",
      beacon:recieveArray[1]

    });
    console.log("2번 비콘 경고 받음");

  log2.save(function (err,log2) {
      console.log(log2);
  });
}
//3 알림
if(noti3==1){
  var log3 = new beacon3({
      bnum:3,
      gnum:1,
      status:"경고",
      beacon:recieveArray[2]

    });
    console.log("3번 비콘 경고 받음");

  log3.save(function (err,log3) {
      //console.log(log3);
  });
}
//4 알림
if(noti4==1){
  var log4 = new beacon4({
      bnum:4,
      gnum:1,
      status:"경고",
      beacon:recieveArray[3]

    });
    console.log("4번 비콘 경고 받음");

  log4.save(function (err,log4) {
      //console.log(log4);
  });
}
// 5 알림
if(noti5==1){
  var log5 = new beacon5({
      bnum:5,
      gnum:1,
      status:"경고",
      beacon:recieveArray[4]

    });
    console.log("5번 비콘 경고 받음");

  log5.save(function (err,log5) {
      //console.log(log5);
  });
}

/*
console.log("앞에");
  socket.on("request",function (data) {
    console.log("접속됨");
      var DB_data;
      var nullArray=[];
        if(data=="DBdata"){
              alaram1.findOne({id:1}).sort('-createdAt').exec(function (err,a) {
                  console.log(a);
                    DB_data=a;
                    io.emit("chatmessage",nullArray,a);
              });
        }
  });
*/
  io.emit('chat message',recieveArray,alaram);
  });

  //client와 접속이 끊겻을때
  socket.on('close',function () {
    console.log('client disconnected');
  });
  //client 가 접속 했을때
  socket.write('welcome to TCP server');

});




// 에러처리
server.on('error',function (err) {
  console.log('err'+err);
});



//port 11111로 연결 대기
server.listen(11111,function () {
  console.log('TCP listening on 11111');
});



//http server
var http = require('http').Server(app);
var io = require('socket.io')(http);

mongoose.connect("#");
var db = mongoose.connection;
db.once("open",function () {
  console.log("DB connected");
});
db.on("error",function (err) {
  console.log("DB ERROR: ",err);
});



//model setting
var beacon1Schema =require('./model/beacon1');
var beacon1 = mongoose.model('bc1',beacon1Schema);

var beacon2Schema =require('./model/beacon2');
var beacon2 = mongoose.model('bc2',beacon2Schema);

var beacon3Schema =require('./model/beacon3');
var beacon3 = mongoose.model('bc3',beacon3Schema);

var beacon4Schema =require('./model/beacon4');
var beacon4 = mongoose.model('bc4',beacon4Schema);

var beacon5Schema =require('./model/beacon5');
var beacon5 = mongoose.model('bc5',beacon5Schema);

var rule1Schema = require('./model/rule1');
var rule1 = mongoose.model('r1',rule1Schema);

var rule2Schema = require('./model/rule2');
var rule2 = mongoose.model('r2',rule2Schema);

var rule3Schema = require('./model/rule3');
var rule3 = mongoose.model('r3',rule3Schema);

var rule4Schema = require('./model/rule4');
var rule4 = mongoose.model('r4',rule4Schema);

var rule5Schema = require('./model/rule5');
var rule5 = mongoose.model('r5',rule5Schema);

var alaramSchema = require('./model/alaram');
var alaram1 = mongoose.model('a',alaramSchema);
// view engine setup
app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.get('/',function (req,res) {
  res.render('index');

});

app.get('/input',function (req,res) {
  rule1.find({}).sort('-createdAt').exec(function (err, r1) {

      //r11=r1[0];
      rule2.find({}).sort('-createdAt').exec(function (err, r2) {

          //r21=r2[0];
          rule3.find({}).sort('-createdAt').exec(function (err, r3) {

            //  r31=r3[0];
              rule4.find({}).sort('-createdAt').exec(function (err, r4) {

                //  r41=r4[0];
                  rule5.find({}).sort('-createdAt').exec(function (err, r5) {
                    r11=r1[0];
                    r21=r2[0];
                    r31=r3[0];
                    r41=r4[0];
                    r51=r5[0];
                    if(r11==undefined){
                    r11={rule1:"100",range1:"매우민감"};
                    }
                    if(r21==undefined){
                    r21={rule2:"100",range2:"매우민감"};
                    }
                    if(r31==undefined){
                    r31={rule3:"100",range3:"매우민감"};
                    }
                    if(r41==undefined){
                    r41={rule4:"100",range4:"매우민감"};
                    }
                    if(r51==undefined){
                    r51={rule5:"100",range5:"매우민감"};
                    }

                          res.render("input",{data:r11,data_2:r21,data_3:r31,data_4:r41,data_5:r51});
                    });
                });
            });
        });
    });

});
// 1


app.post('/input1',function (req,res) {
  var ruledata;
  var rangedata;
  if(req.body.ruleid1=="on"){
    ruledata = data_1;
  }
  else{
    ruledata=r11.rule1;
  }

  if(req.body.range1==undefined){

    rangedata= r11.range1;
  }
  else{
    rangedata=req.body.range1;
  }
  var log = new rule1({
    rule1:ruledata,
    range1:rangedata
  });

  log.save(function (err,log) {
  //  console.log("전송");
    //  console.log(log);
  });

  res.redirect('/input');

});

//2
app.post('/input2',function (req,res) {
  var ruledata;
  var rangedata;
  if(req.body.ruleid2=="on"){
    ruledata = data_2;
  }
  else{
    ruledata=r21.rule2;
  }

  if(req.body.range2==undefined){

    rangedata= r21.range2;
  }
  else{
    rangedata=req.body.range2;
  }
  var log2 = new rule2({
    rule2:ruledata,
    range2:rangedata
  });

  log2.save(function (err,log2) {
  //  console.log("전송");
      //console.log(log2);
  });

  res.redirect('/input');

});
//3
app.post('/input3',function (req,res) {
  var ruledata;
  var rangedata;
  if(req.body.ruleid3=="on"){
    ruledata = data_3;
  }
  else{
    ruledata=r31.rule3;
  }

  if(req.body.range3==undefined){

    rangedata= r31.range3;
  }
  else{
    rangedata=req.body.range3;
  }
  var log3 = new rule3({
    rule3:ruledata,
    range3:rangedata
  });

  log3.save(function (err,log3) {
  //  console.log("전송");
    //  console.log(log3);
  });

  res.redirect('/input');

});
//4
app.post('/input4',function (req,res) {
  var ruledata;
  var rangedata;
  if(req.body.ruleid4=="on"){
    ruledata = data_4;
  }
  else{
    ruledata=r41.rule4;
  }

  if(req.body.range4==undefined){

    rangedata= r41.range4;
  }
  else{
    rangedata=req.body.range4;
  }
  var log4 = new rule4({
    rule4:ruledata,
    range4:rangedata
  });

  log4.save(function (err,log4) {
  //  console.log("전송");
      //console.log(log4);
  });

  res.redirect('/input');

});

//5
app.post('/input5',function (req,res) {
  var ruledata;
  var rangedata;
  if(req.body.ruleid5=="on"){
    ruledata = data_5;
  }
  else{
    ruledata=r51.rule5;
  }

  if(req.body.range5==undefined){

    rangedata= r51.range5;
  }
  else{
    rangedata=req.body.range5;
  }
  var log5 = new rule5({
    rule5:ruledata,
    range5:rangedata
  });

  log5.save(function (err,log5) {
  //  console.log("전송");
    //  console.log(log5);
  });

  res.redirect('/input');

});

/*
app.get('/realtimechart-1',function (req,res) {

  console.log(r11);


    rule1.find({}).sort('-createdAt').exec(function (err, r1) {
          r11=r1[0];
          beacon1.find({}).sort('-createdAt').exec(function (err, bc1) {
                if (err) return res.json({success: false, message: err});
                  res.render("realtimechart-1", {data:bc1,data2:r11});
              });
        });

});
*/
io.on('connection',function (socket) {
//  console.log("connection");
  socket.emit('news',alaram);
});
app.get('/realtimechart-1',function (req,res) {

  //console.log(r11);



  alaram1.findOne({id:1}).sort('-createdAt').exec(function (err,a) {

      rule1.find({}).sort('-createdAt').exec(function (err, r1) {
          r11=r1[0];
          if(r11==undefined){
            r11={rule1:"100",range1:"매우민감"};
          }
          beacon1.find({}).sort('-createdAt').exec(function (err, bc1) {
                if (err) return res.json({success: false, message: err});
                  res.render("realtimechart-1", {data:bc1,data2:r11,data3:a});
              });
        });
  });
});





app.get('/realtimechart-2',function (req,res) {
  //console.log(r21);

  rule2.find({}).sort('-createdAt').exec(function (err, r2) {
      r21=r2[0];
      if(r21==undefined){
        r21={rule2:"100",range2:"매우민감"};
      }
      beacon2.find({}).sort('-createdAt').exec(function (err, bc2) {
            if (err) return res.json({success: false, message: err});
              res.render("realtimechart-2", {data:bc2,data2:r21});
          });

});
});
app.get('/realtimechart-3',function (req,res) {
  //console.log(r31);

  rule3.find({}).sort('-createdAt').exec(function (err, r3) {
      r31=r3[0];
      if(r31==undefined){
        r31={rule3:"100",range3:"매우민감"};
      }
      beacon3.find({}).sort('-createdAt').exec(function (err, bc3) {
            if (err) return res.json({success: false, message: err});
              res.render("realtimechart-3", {data:bc3,data2:r31});
          });

});
});
app.get('/realtimechart-4',function (req,res) {
  //console.log(r41);

  rule4.find({}).sort('-createdAt').exec(function (err, r4) {
      r41=r4[0];
      if(r41==undefined){
        r41={rule4:"100",range4:"매우민감"};
      }
      beacon4.find({}).sort('-createdAt').exec(function (err, bc4) {
            if (err) return res.json({success: false, message: err});
              res.render("realtimechart-4", {data:bc4,data2:r41});
          });

});
});
app.get('/realtimechart-5',function (req,res) {
  //console.log(r51);
  rule5.find({}).sort('-createdAt').exec(function (err, r5) {
      r51=r5[0];
      if(r51==undefined){
        r51={rule5:"100",range5:"매우민감"};
      }
      beacon5.find({}).sort('-createdAt').exec(function (err, bc5) {
            if (err) return res.json({success: false, message: err});
              res.render("realtimechart-5", {data:bc5,data2:r51});
          });
});

});


http.listen(80,function(){
    console.log('listening at 80');
});
