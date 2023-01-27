function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  return books.filter(book => book.borrows.find(record => !record.returned)).length
}

function helperSort(obj) {
  const keys = Object.keys(obj)
  
  return keys.sort((firstKey, secondKey) => {
    if (obj[firstKey] > obj[secondKey]) {
      return -1
    } else if (obj[firstKey] < obj[secondKey]) {
      return 1
    } else {
      return 0
    }
  })
}

function getMostCommonGenres(books) {
  let count = books.reduce((index, {genre}) => {
    if (index[genre]) {
      index[genre] += 1
    }  else {
      index[genre] = 1
    }

    return index
  }, {})
  let sortedCount = helperSort(count)

  return sortedCount.map((name) =>( {
    name, count: count[name]
  })).slice(0,5)
}


function getMostPopularBooks(books) {
    let count = books.reduce((index, {title, borrows}) => {
    index[title] = borrows.length
      console.log(index)
    return index
  }, {})
  let sortedCount = helperSort(count)
  return sortedCount.map((name) =>( {
    name, count: count[name]
  })).slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  let count = books.reduce((index, {authorId, borrows}) => {
      let authorName = `${authors.find(author => author.id === authorId).name.first} ${authors.find(author => author.id === authorId).name.last}`
   
      console.log(authorName)
    if (index[authorName]) {
      index[authorName] += borrows.length
    }  else {
      index[authorName] = borrows.length
    }

    return index
  }, {})
    let sortedCount = helperSort(count)
  return sortedCount.map((name) => 
    (  {
   name, count: count[name]
    }
  )).slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
