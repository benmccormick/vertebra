var model = new Backbone.Model({
    text: 'Hello World',
    title: 'Just a Test of VertebraJS'
});

var TestView = Backbone.View.extend({
    render: function() {
        this.$el.append('<h1>'+this.model.get('title')+'</h1>');
        this.$el.append('<p>'+this.model.get('text')+'</p>');
    }
});

VT.registerModel('test',model);
VT.registerView('v-app',TestView);