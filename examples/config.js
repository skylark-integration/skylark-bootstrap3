requirejs.config({
    paths: {
  //      "skylark-ui-swt": "../dist/js/uncompressed/skylark-ui-swt"
    },
      packages: [
         {
           name : "skylark-langx",
           location : "../node_modules/skylark-langx/dist/uncompressed/skylark-langx",
            main: 'main'
         },
         {
           name : "skylark-utils-dom" ,
           location : "../node_modules/skylark-utils-dom/dist/uncompressed/skylark-utils-dom",
            main: 'main'
         },
         {
            name: 'skylark-bootstrap3',
//            location: '../dist/js/uncompressed/skylark-ui-swt',
            location: '../src',
            main: 'main'
          }
      ],      

});
 
// require(["module/name", ...], function(params){ ... });
require(["skylark-langx/langx","skylark-utils-dom"], function (slangx,sdom) {
    require(["skylark-bootstrap3"], function () {
        //loaded();
        var $ = sdom.query;
        if (window.initPage) {
            window.initPage($,sdom,slangx);
        }
    });
});