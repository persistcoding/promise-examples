
function callback1(id,cb){
  if(id ==1) {
    cb({id:1,age:20,gender:'male', name:'jack'})
  } else if(id ==0) {
    cb({id:0,age:15,gender:'female', name:'candy'})
  } else if(id==2) {
    cb({id:2,age:25,gender:'female', name:'kevin'})
  } else {
    cb({id:-1,age:-1,gender:'none', name:'sunny'})
  }
}

function callback2(info,cb) {
  if(!info) {
     cb(null);
     return;
  }
  if(info.age >= 18 ) {
    cb('adult');
    return;
  } else {
    cb('minor');
    return;
  }
}


function startCallback(id, cb){

  callback1(id,function(info){

    if(info.gender=='female') {

      callback2(info,function(status){

        if(status == 'adult') {
          if(cb) {
            cb(`${info.name}: 是成年女性`);
            return
          }
          console.log(`${info.name}: 是成年女性`)
        } else {
          if(cb) {
            cb(`${info.name}: 是未成年女性`);
            return
          }
          console.log(`${info.name}: 是未成年女性`)
        }

      })

    } else {

      if(cb) {
        cb(`${info.name}: 是男性`);
        return
      }

      console.log(`${info.name}: 是男性`)

    }

  })
}


// module.exports = startCallback
exports.startCallback = startCallback
