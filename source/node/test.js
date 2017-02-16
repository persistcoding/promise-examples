var app = require('./index.js')

var startCallback = app.startCallback


describe("callback", function(){
  describe("id:0",function(){
    it("should show 'candy: 是未成年女性1'", function(done) {
      startCallback(0,function(str){
        str.should.equal('candy: 是未成年女性1');
        done()
      })
    })
  })
})
