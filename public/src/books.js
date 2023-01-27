function findAuthorById(authors, id) {
  return authors.find(author => author.id === id)
}

function findBookById(books, id) {
  return books.find(book => book.id === id)
}


// Refactor
// Less variables?
function partitionBooksByBorrowedStatus(books) {
  
const checkedOutBooks = books.filter(book => {
    return book.borrows.find(record => (!record.returned))
  })

const checkedInBooks = books.filter(book => {
    return book.borrows[0].returned
})
  return [checkedOutBooks, checkedInBooks]
}

function getBorrowersForBook(book, accounts) {
  return accounts.filter(account => { // filter through accounts
    return book.borrows.some(record => record.id === account.id) // based on finding a matching id
}).slice(0,10) // cut off after first ten on list
    .map(account => {
   account.returned = book.borrows.find(record => (record.id === account.id)).returned // assign returned property based on status on record
    return account
  })
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
