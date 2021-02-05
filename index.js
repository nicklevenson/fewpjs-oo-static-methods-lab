class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    let regex = /[a-zA-Z-'\s]/
    return str.split("").filter(e => {
      return regex.test(e)
    }).join('')
  }

  static titleize(str) {
    const lowerCaseWords = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const words = str.split(" ")
    const filteredWords = []
    filteredWords.push(words[0].charAt(0).toUpperCase() + words[0].slice(1)) 

    for (let i = 1; i < words.length; i++) {
      if (lowerCaseWords.includes(words[i])) {
        filteredWords.push(words[i])
      }else{
        filteredWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1))
      }
    }
    return filteredWords.join(" ")
  }
}