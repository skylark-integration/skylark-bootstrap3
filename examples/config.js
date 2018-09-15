requirejs.config({
    paths: {
        "skylark-utils" : "http://registry.skylarkjs.org/dev/utils/skylark-utils/uncompressed/skylark-utils-all"
  //      "skylark-ui-swt": "../dist/js/uncompressed/skylark-ui-swt"
    },
      packages: [
         {
            name: 'skylark-bootstrap3',
//            location: '../dist/js/uncompressed/skylark-ui-swt',
            location: '../src',
            main: 'main'
          }
      ],      
          // shim�I�v�V�����̐ݒ�B���W���[���Ԃ̈ˑ��֌W���`���܂��B
    shim: {
        "skylark-bootstrap3": {
            deps: ["skylark-utils"]
        }
    }
});
 
// require(["module/name", ...], function(params){ ... });
require(["skylark-utils"], function (sutils) {
    require(["skylark-bootstrap3"], function ($) {
        if (window.initPage) {
            window.initPage($,sutils);
        }
    });
});