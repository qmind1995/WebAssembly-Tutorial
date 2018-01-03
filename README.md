# WebAssembly-Tutorial
# This tutorial is implemented on Window 10. I'll do it on Linux later.
#INSTALL:
1: Download Emsdk from this link.
http://kripken.github.io/emscripten-site/docs/getting_started/downloads.html
2: clone my tutorial inside Emsdk's folder.
3: open emcmdprompt.bat to compile *.cpp file: 
run : emcc ./tutorial/helloWASM/helloWASM.cpp -o ./tutorial/helloWASM/hello.out.js
