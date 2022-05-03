### Fundamentals of Socket.io
    create normal controller to handle the operation:
    function Handler() {
        this.messages = []
        function MessageService(data) {
            this.app = app
        }
        MessageService.prototype.find = () => {
            return Q(this.messages)
        }
        MessageService.prototype.create = data => {
            this.message = {
                id: this.messages.length,
                text: data.text
            }
            this.messages.push(this.message)
            return Q(this.message)

        }
        return new MessageService()
    }

    create an event: app.use('messages', new Handler())

    created event is exposed as:
    app.service('messages')

    call controller as: 

    const main = () => {
    const
     firstPromise = app.service('messages').create({text: 'First, hello!'}),
     secondPromise = app.service('messages').create({text: 'Hello, Again!'}),
     thirdPromise = app.service('messages').find()
    return Q.all([app.service('messages').create({text: 'First, hello!'}), app.service('messages').create({text: 'First, hello!'}), app.service('messages').find()])
        .spread((createdMessage, createdMessage2, allMessages) => {})
    }
    main()

    //feathers automatically exposes:
    app.service('messages').on('created', message => {
    console.log('A new message has been created', message)
})