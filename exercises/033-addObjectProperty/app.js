function addObjectProperty(obj1, key, obj2) {
  // Add your code after this line
  obj1[key] = obj2
  return obj1
}

console.log(addObjectProperty({id: 123},'fullName',{'firstName': 'Daniel','lastName': 'Dudek'}))