function fetchAndInstantiate(url, importObject) {
  return fetch(url).then(response =>
    response.arrayBuffer()
  ).then(bytes =>
    WebAssembly.instantiate(bytes, importObject)
  ).then(results =>
    results.instance
  );
}

fetchAndInstantiate("pass_param.wasm")
	.then(function(instance) {
        let ins = instance;
    });