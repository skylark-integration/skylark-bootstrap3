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
            location: '../src',
            main: 'main'
          }
      ],      
    map: {
        "*": {
            "jquery": "skylark-utils-dom/query"
        }
    },      

});
 
// require(["module/name", ...], function(params){ ... });
require(["skylark-utils-dom"], function (sutils) {
    require(["skylark-bootstrap3"], function ($) {
        if (window.initPage) {
            window.initPage($,sutils);
        }
    });
});