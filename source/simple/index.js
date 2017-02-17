const Promise = require('bluebird')

function invokeType(type){
  return new Promise(function(resolve, reject){
    if(type && type == true) {
      resolve('成功');
    } else {
      const err = new Error('失败')
      reject(err)
    }
  })
}


function staticResolve(){
  return Promise.resolve(100)
}

function staticReject() {
  return Promise.reject(new Error('you are long'))
}

exports.invokeType = invokeType
exports.staticResolve = staticResolve
exports.staticReject = staticReject
