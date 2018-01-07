include('index.js');

function call_AddnumCppFunc(){

	const arrayDataToPass = [1,2,3,4,5]
	let buffer
	let error
	let result

	try {
	    // Init the typed array with the same length as the number of items in the array parameter
	    const typedArray = new Float32Array(arrayDataToPass.length)

	    // Populate the array with the values
	    for (let i=0; i<arrayDataToPass.length; i++) {
	        typedArray[i] = arrayDataToPass[i]
	    }

	    // Allocate some space in the heap for the data (making sure to use the appropriate memory size of the elements)
	    buffer = Module._malloc(typedArray.length * typedArray.BYTES_PER_ELEMENT)

	    // Assign the data to the heap - Keep in mind bytes per element
	    Module.HEAPF32.set(typedArray, buffer >> 2)

	    // Finally, call the function with "number" parameter type for the array (the pointer), and an extra length parameter
	    result = Module.__Z7addNumsPfi(buffer, arrayDataToPass.length);

	} catch (e) {
	    error = e
	} finally {
	    // To avoid memory leaks we need to always clear out the allocated heap data
	    // This needs to happen in the finally block, otherwise thrown errors will stop code execution before this happens
	    Module._free(buffer)
	}

	// Finally, throw any errors so that we know when something goes wrong
	if (error) throw error

	return result;
}
