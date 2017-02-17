const app = require('./index.js')
const invokeType = app.invokeType
const staticResolve = app.staticResolve
const staticReject = app.staticReject

describe("simple test:", function(){

  describe("invokeType():", ()=>{
    it("should say '失败'", (done) => {
      invokeType().then(undefined, (err) =>{
        err.message.should.equal('失败');
        done()
      })
    })
  })

  describe("invokeType(1):", function(){
    it("should say '成功'", function(done) {
      invokeType(1).then(function(result){
        result.should.equal('成功')
        done()
      })
    })
  })

  describe("invokeType(2):", () => {
    it("should say '失败'", done => {
      invokeType(2).then(undefined, err => {
        err.message.should.equal('失败')
        done()
      })
    })
  })

  describe("staticResolve(): ", () => {
    it("should say: 100", done => {
      staticResolve().then(result => {
        result.should.equal(100);
        done()
      })
    })
  })

  describe("staticReject() ", () => {
    it("should say: 'you are long'", done => {
      staticReject().then(undefined, err => {
        err.message.should.equal('you are long')
        done()
      })
    })
  })
})
