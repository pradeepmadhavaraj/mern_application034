function boilWater(callback) {
  console.log("Boiling water...");
  setTimeout(() => {
    console.log("Water boiled");
    callback();  
  }, 1000);
}

function addTeaLeaves(callback) {
  console.log("Adding tea leaves...");
  setTimeout(() => {
    console.log("Tea leaves added");
    callback(); 
  }, 1000);
}

function steepTea(callback) {
  console.log("Steeping tea...");
  setTimeout(() => {
    console.log("Tea steeped");
    callback(); 
  }, 1000);
}

function pourTea() {
  console.log("Pouring tea into a cup...");
}

boilWater(() => {
  addTeaLeaves(() => {
    steepTea(() => {
      pourTea();
    });
  });
});
