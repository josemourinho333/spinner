const spinnerParts = ['|', '/', '-', '\\', '|', '\n'];
let interval = 100;

for (const part of spinnerParts) {
  setTimeout(() => {
    process.stdout.write('\r' + part);
  }, interval);
  interval += 200;
};