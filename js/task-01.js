const mainList = document.querySelectorAll("#categories > li.item");

console.log('Number of categories :', mainList.length);
console.log('');

const totalCategories = mainList.forEach(element => {
   const subcategoryTitle = element.firstElementChild.textContent;
   console.log('Category:', subcategoryTitle);
   const subcategoryLength = element.lastElementChild.children.length;
   console.log('Elements:', subcategoryLength);
   console.log('');
});