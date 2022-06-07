var id_list = ["muzi", "frodo", "apeach", "neo"];
var report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
var k = 2;

let a;

for (let i = 0; i < report.length; i++) {
  a += report[i];
}

console.log(a);
