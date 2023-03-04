// // ほぼconst
// // const変更不可だけどオブジェクトと配列は変更可能だしpushメソッドで追加もできる！

// const func1 = (str) => {
//   return str;
// };
// console.log(func1("aiueo"));

// const func2 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func2(10, 10));

// // 一列だと省略できる
// const func3 = (num1, num2) => num1 * num2;
// console.log(func3(10, 100));

// //オブジェクトプロパティがあってれば順番関係なし
// const myProfile = {
//   name: "ueno",
//   age: 28,
// };

// // 分割代入することでいちいちmyProfile.nameと書かなくても良くなる
// const { name, age } = myProfile;
// const message1 = `名前は${name}です！年齢は${age}さいです。`;
// console.log(message1);

// // 配列順番重視
// const myProfile2 = ["ueno", 28];

// const message2 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です！`;
// console.log(message2);

// // デフォルト値,引数

// const sayHello = (name = "名無し") => {
//   console.log(`やあ！${name}さん！`);
// };
// sayHello("上野");
// // デフォルト値でナナシと入れているため名無しさんと入る
// sayHello();

// スプレッド構文
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// // 配列をコピーしてくれてる
// console.log(...arr1);

// const sumFunc = (num1, num2) => {
//   console.log(num1 + num2);
// };
// sumFunc(arr1[0], arr1[1]);
// // 結果は一緒
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...num3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(...arr2);

// const arr3 = [10, 20];
// const arr4 = [30, 40];
// // 配列コピー！
// const arr5 = [...arr3];
// console.log(arr5);

// const arr6 = [...arr3, ...arr4];
// console.log(arr6);
// // false↓
// console.log(arr3 === arr5);

// mapやfilterを使った配列の処理 for文はあんまり使われなくなった

// const nameArr = ["田中", "山田", "上野", "追加名前"];

// // const nameArr2 = nameArr.map((name) => {
// //   return name;
// // });
// // console.log(nameArr2);

// // 番号付き
// // nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// // // filterは配列から必要なものだけ参照できる↓

// // const numArr = [1, 2, 3, 4, 5];
// // const newNumArr = numArr.filter((num) => {
// //   return num % 2 === 0;
// // });

// // // 偶数だけ参照できる
// // console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   // if (name === "上野") {
//   //   return name;
//   // } else {
//   //   return `${name}さん`;
//   // }
//   {
//     return name === "上野" ? name : `${name}さん`;
//   }
// });

// console.log(newNameArr);

// 三項演算子
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100超えてるよ" : "100以下です許容範囲です";
// };

// console.log(checkSum(100, 50));
// console.log(checkSum(10, 50));

//  ||は左側がfalseになる時右側を返す
const num = 100;
const fee = num || "金額未設定です";
console.log(fee); //100が返る

// 　&&は左がtrueなら右側を返す
const num2 = 0;
const num3 = 100;
const fee2 = num2 && "trueだよ";
const fee3 = num3 && "trueだよ";
console.log(fee2); //0はfalseなのでそのままの値が返る
console.log(fee3); //trueなので右側を返す
