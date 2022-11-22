const typeWriter = (sentence, index) => {

  if (index < sentence.length) {
    setTimeout(() => {
      if (index < sentence.length - 1) {
        process.stdout.write(sentence[index]);
      } else {
        process.stdout.write(sentence[index] + '\n');
      }
      index++;
      typeWriter(sentence, index);
    }, 100);
  }
};

// const sentence1 = "hello there from lighthouse labs";
// typeWriter(sentence1, 0);

const sentence2 = "hello from the future!";
typeWriter(sentence2, 0);