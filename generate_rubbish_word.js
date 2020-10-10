function taskGenerator(array) {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

function phraseGenerate(array) {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

function generateRubbishWord(option) {
  // 1. define necessary variables
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // define dummy data
  // const option = 'entrepreneur'

  // 2. create a collection to store things user picked
  let collection = []
  if (option === 'engineer') {
    collection = task.engineer
    // console.log('collection:', collection)
  } else if (option === 'designer') {
    collection = task.designer
    // console.log('collection:', collection)
  } else {
    collection = task.entrepreneur
    // console.log('collection:', collection)
  }

  // 3. generate rubbish word and return result
  if (option === 'engineer') {
    return `身為一個工程師，${taskGenerator(collection)}，${phraseGenerate(phrase)}吧！`
  } else if (option === 'designer') {
    return `身為一個設計師，${taskGenerator(collection)}，${phraseGenerate(phrase)}吧！`
  } else {
    return `身為一個企業家，${taskGenerator(collection)}，${phraseGenerate(phrase)}吧！`
  }
}

// export generate_password to other file
module.exports = generateRubbishWord
