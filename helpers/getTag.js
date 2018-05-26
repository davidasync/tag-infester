arr = [];
counter = 1;

try{
  while(true) {
    const obj = {
      text: $('.column-name')[counter].querySelector('strong a').text,
      slug: $('.column-slug')[counter].textContent
    }
  
    if (!obj.text) {
      break;
    }
    arr.push(obj);
  
    counter += 1;
  };
} catch (e) {
  console.log(JSON.stringify(arr, null, 2))
}
