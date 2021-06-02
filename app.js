function randomIntegerBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// console.log(randomIntegerBetween(5, 10));

function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let priceCategory = 'cheap';
  if (productPrice > 20) {
    priceCategory = 'fairly priced';
  }
  // return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
  return { name: productName, price: productPrice };
}
const prodName = 'JavaScript Course';
const prodPrice = 29.99;
const productOutput = productDescription`This product (${prodName})'s ${prodPrice}.`;
console.log(productOutput);
console.clear();

// const regex = /hello/;
// console.log(regex.test('hi there, Hello!'));
// const regex = /(h|H)ello/;
// console.log(regex.test('hi there,jhello!'));
// const regex = /.ello/;
// console.log(regex.test(' ello'));
// const regex = /.ello/;
// console.log(regex.exec(' jello'));
// console.log(' jello'.match(regex));
// const text = 'Hello there!';
// // const regex = new RegExp('ll');
// const regex = /ll/;
// console.log(regex.test(text));
// console.log(regex.exec(text));
// console.log(text.match(regex));
// console.log(text.search(regex));
// const text = "Hello, hello there, it'll be awesome! ello";
// const regex = /(H|h)?.ello/gi;
// console.log(regex.test(text));
// console.log(text.match(regex));
// const text = `
// test@test.com
// test-server1@test.com
// test.server-farm@test.com
// test_server-farm@test.com
// test-server1@test-solution1989.com
// test-server1@test.solution.com

// test-server.@test.com
// .test-server1@test.com
// `;
// const text2 = `test@test.com`;
// const regex =
//   /[a-zA-Z0-9!#$&_*?^{}~-]+(\.[a-zA-Z0-9!#$&_*?^{}~-]+)*@([a-zA-Z0-9!#$&_*?^{}~-]+([a-z0-9-]*)\.)+[a-zA-Z]+/g;
// const regex2 =
//   /^[a-zA-Z0-9!#$&_*?^{}~-]+(\.[a-zA-Z0-9!#$&_*?^{}~-]+)*@([a-zA-Z0-9]+([a-z0-9-]*)\.)+[a-zA-Z]+$/g;
// console.log(regex.test(text));
// console.log(text.match(regex));

const text = `
hgT1h1!?s

test
qqqweqwewqeq
2423432443243
`;
const regex =
  /(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!?#&])[a-zA-Z0-9&#?!]{8,}/g;
console.log(regex.test(text));
console.log(text.match(regex));
