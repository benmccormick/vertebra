(function() {

    //just a global for now
    var VT = window.VT = {},
        modelRegistry = {},
        collectionRegistry = {};

    //register this view as a custom element
    VT.registerView = function (elementName, View) {
        var view,
            ProtoView = Object.create(HTMLElement.prototype);

        ProtoView.createdCallback = function() {
            var model,
                modelKey = this.getAttribute('model');
            if(modelKey) {
                model = VT.getModel(modelKey); 
            }
            view = new View({
                model: model,
                el: this
            });
        };

        ProtoView.attachedCallback = function() {
            view.render();
        };
        
        document.registerElement(elementName,{
            prototype:ProtoView
        });
    };

    //put this model into the model registry
    VT.registerModel = function (key, model) {
        modelRegistry[key] = model;
    };

    VT.getModel = function(key) {
        return modelRegistry[key]; 
    };

    //put this model into the model registry
    VT.registerCollection = function (key, model) {
        collectionRegistry[key] = model;
    };

    VT.getCollection = function(key) {
        return collectionRegistry[key]; 
    };

})();