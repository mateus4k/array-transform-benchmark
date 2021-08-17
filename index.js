const Benchmark = require('benchmark');
const { content } = require('./trash.json');

const init = () => {
  const arr = [];

  for (let i = 0; i < 50; i++) {
    arr.push({
      filename: `${i}-filename`,
      content: `${i}-${content}`,
    });
  }

  return arr;
};

const suite = new Benchmark.Suite();

suite
  .add('map + delete', function () {
    const arr = init();

    arr.map((item) => {
      delete item.content;
    });
  })
  .add('map + content null', function () {
    const arr = init();

    arr.map((item) => ({
      ...item,
      content: null,
    }));
  })
  .add('reduce + push', function () {
    const arr = init();

    arr.reduce((acc, item) => {
      acc.push({
        filename: item.filename,
      });
      return acc;
    }, []);
  })
  .add('reduce + content null', function () {
    const arr = init();

    arr.reduce((acc, item) => {
      return {
        ...item,
        content: null,
      };
    }, []);
  })
  .add('forOf + delete', function () {
    const arr = init();

    for (const item of arr) {
      delete item.content;
    }
  })
  .add('forOf + push', function () {
    const arr = init();

    const newArr = [];

    for (const item of arr) {
      newArr.push({
        filename: item.filename,
      });
    }
  })
  .add('forEach + push', function () {
    const arr = init();

    const newArr = [];

    arr.forEach((item) => {
      newArr.push({
        filename: item.filename,
      });
    });
  })
  .add('forEach + delete', function () {
    const arr = init();

    arr.forEach((item) => {
      delete item.filename;
    });
  })
  .add('for + delete', function () {
    const arr = init();

    for (let i = 0; i < arr.length; i++) {
      delete arr[i].content;
    }
  })
  .add('for + push', function () {
    const arr = init();

    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
      newArr.push({
        filename: arr[i].filename,
      });
    }
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ async: true });
