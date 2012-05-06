var database = require('../../lib/database')
var jasmine = require('jasmine-node')

describe('database', function() {
  // How to add a callback into the finish function?
  //console.log(this.queue.env.currentSuite.finish)

  beforeEach(function() {
    database.init('moodradiator-test')
  })

  afterEach(function() {
    database.dropAll()
    database.disconnect()
  })

  it('allows persisting users', function() {
    var UserModel = database.model('User')
    var user = new UserModel({nick: 'Wolfy'})
    user.save()
  })

})
