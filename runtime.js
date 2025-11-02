// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class
cr.plugins_.YandexSDK = function(runtime)
{
    this.runtime = runtime;
};

(function ()
    {
        /////////////////////////////////////
        var pluginProto = cr.plugins_.YandexSDK.prototype;

        /////////////////////////////////////
        // Object type class
        pluginProto.Type = function(plugin)
        {
            this.plugin = plugin;
            this.runtime = plugin.runtime;
        };

        var typeProto = pluginProto.Type.prototype;

        // called on startup for each object type
        typeProto.onCreate = function()
        {
        };

        /////////////////////////////////////
        // Instance class
        pluginProto.Instance = function(type)
        {
            this.type = type;
            this.runtime = type.runtime;
        };

        var instanceProto = pluginProto.Instance.prototype;

        // called whenever an instance is created
        instanceProto.onCreate = function()
        {
        };

        instanceProto.onDestroy = function ()
        {
        };

        function Acts(){;}
        Acts.prototype.ShowAds = function()
        {
            window.ysdk.adv.showFullscreenAdv();
        };

        pluginProto.acts = new Acts();
    }());
