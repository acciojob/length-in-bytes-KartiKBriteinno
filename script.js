const byteSize = (str) => {
  // Create a Blob object from the string
  const blob = new Blob([str], { type: 'text/plain' });

  // Return the size of the Blob in bytes
  return blob.size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
