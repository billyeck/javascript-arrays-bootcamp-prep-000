var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToEndOfArray(ary, ele){

  return [...ary, ele]
}

function destructivelyAddElementToEndOfArray(ary, ele){
  ary.push(ele)
  return ary
}

function addElementToBeginningOfArray(ary, ele){
return [ele, ...ary]
}

function destructivelyAddElementToBeginningOfArray(ary, ele){
  ary.unshift(ele)
  return ary
}
