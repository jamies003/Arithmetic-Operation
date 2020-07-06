function getCount(objects) {
  let counter = 0;
  for (let i = 0; i < objects.length; i++) {
      let current_object = objects[i];
      if (current_object.x == current_object.y) {
          counter += 1;
      }
  }
  return counter;
}


function main() {
  const n = +(readLine());
  let objects = [];
  
  for (let i = 0; i < n; i++) {
      const [a, b] = readLine().split(' ');
      
      objects.push({x: +(a), y: +(b)});
  }
  
  console.log(getCount(objects));
}