function findAccountById(accounts, id) {
return accounts.find(account => account.id === id)
}

function sortAccountsByLastName(accounts) {

return accounts.sort((nameA, nameB) => nameA.name.last.toUpperCase() > nameB.name.last.toUpperCase() ? 1 : -1)
}

// this can definitely be less complicated..
function getTotalNumberOfBorrows({ id }, books) {
  
return books.reduce((borrowCount, book) => borrowCount + book.borrows.filter((borrow) => borrow.id === id).length, 0)


}

// Q: Implement DRY by saving filter in a variable? (Lines 23 & 25)
// Q: How can I do this without a for of loop or return variable?

function getBooksPossessedByAccount({id}, books, authors) {
  
  const checkedOutBooks = books.filter(book => {
    return book.borrows.find(record => (record.id === id && !record.returned))
  })
  
 return checkedOutBooks.map(book => {
        book.author = authors.find(author => author.id === book.authorId)
        book.borrows = book.borrows.filter(record => (record.id === id && !record.returned))
        return book
  } )
//   const checkedOutBooks = books.borrows.filter(record => (record.id === id && !record.returned))
  
//     let checkedOutById = [] // define output array
    
//   for (let book of books) { // go through books array
//       if (book.borrows.filter(record => (record.id === id && !record.returned)).length > 0) {
//         book.author = authors.find(author => author.id === book.authorId)
//         book.borrows = book.borrows.filter(record => (record.id === id && !record.returned))
//         checkedOut.push(book)
    
//   }

//   console.log(checkedOut)
//   return checkedOut
  
  
  
  // Q: Why is checkedOut undefined?
  
//   return books.reduce((checkedOut, book) => {
//     const checkedOutById = book.borrows.filter(record => (record.id === id && !record.returned))
// //     if (book.borrows.filter(record => (record.id === id && !record.returned)).length > 0)

//         book.author = authors.find(author => author.id === book.authorId)
//         book.borrows = checkedOutById

//         checkedOut.push(book) // checkedOut is 'undefined'
//   }, [])
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};