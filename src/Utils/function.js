import { AiFillStar } from "react-icons/ai";

export const productListGenerator = (data) => {
  let obj = {};
  let arr = [];
  if (data) {
    const x = data.map((el) => el.brand);
    for (let i = 0; i < x.length; i++) {
      if (obj[x[i]] === undefined) {
        obj[x[i]] = x[i];
      }
    }
    for (let i in obj) {
      arr.push(i);
    }
    return arr;
  }
};

export function convertor(num) {
  let str1 = "";
  let str2 = "";
  if (num <= 999) {
    return num.toString();
  }
  if (num >= 1000 && num <= 99999) {
    return fun1(num);
  }
  if (num >= 100000 && num <= 9999999) {
    let temp = num.toString();
    let x = "";
    let y = "";

    for (let i = 0; i < temp.length - 5; i++) {
      x = x + temp[i];
    }
    for (let i = temp.length - 5; i < temp.length; i++) {
      y = y + temp[i];
    }
    const z = fun1(y);
    return `${x},${z}`;
  }
  function fun1(num) {
    let x = num.toString();
    for (let i = x.length - 3; i < x.length; i++) {
      str1 = str1 + x[i];
    }
    for (let i = 0; i < x.length - 3; i++) {
      str2 = str2 + x[i];
    }
    return `${str2},${str1}`;
  }
}

export function starGenderator(val) {
  if (val === 1) {
    return <AiFillStar />;
  }
  if (val === 2) {
    return (
      <>
        <AiFillStar />
        <AiFillStar />
      </>
    );
  }
  if (val === 3) {
    return (
      <>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </>
    );
  }
  if (val === 4) {
    return (
      <>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </>
    );
  }
  if (val === 5) {
    return (
      <>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </>
    );
  }
}
