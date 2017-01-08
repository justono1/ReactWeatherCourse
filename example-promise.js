// function getTempCallback(loction, callback) {
//   callback(undefined, 78);
//   callback('City Not Found');
// }
//
// getTempCallback('Traverse City', function(err, temp) {
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     resolve(79);
//     reject('Country Not Found');
//   });
// }
//
// getTempPromise('Traverse City').then(function(temp) {
//   console.log('Promise Succes', temp)
// }, function(err) {
//   console.log('erre', err);
// });


function addPromise(a,b) {
  return new Promise(function(resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      var msg;
      if(typeof a !== 'number' && typeof b !== 'number') {
        msg = "Parameter 1 and 2 not numbers";
      } else if(typeof a !== 'number') {
        msg = "Parameter 1 not a number";
      } else {
        msg = "Parameter 2 not a number";
      }
      reject(msg);
    }
  });
}

addPromise(1,2).then(function(val) {
  console.log('success', val);
}, function(err) {
  console.log('error', err);
});

addPromise('hello',2).then(function(val) {
  console.log('success', val);
}, function(err) {
  console.log('error', err);
});

addPromise(2, 'world').then(function(val) {
  console.log('success', val);
}, function(err) {
  console.log('error', err);
});

addPromise('hello','world').then(function(val) {
  console.log('success', val);
}, function(err) {
  console.log('error', err);
});
