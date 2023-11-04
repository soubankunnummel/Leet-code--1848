// var getMinDistance = function(nums, target, start) {
   
//     for (let i = 0; i < nums.length ; i++){
//         if (target === nums[i]){
            
             
//             return Math.abs( result = i - start)
//         }

//     }
   
    
// };

// const nums =  [1,1,1,1,1,1,1,1,1,1] 
// const  target = 1
// const start = 9

// console.log(getMinDistance(nums,target,start))


// var getMinDistance = function(nums, target, start) {
//     for (let i = 0; i < nums.length; i++) {
//         // console.log(i)
//         if (nums[i] === target) {
//             return Math.abs(i - start);
//         }
//     }
// }

// const nums = [1,1,1,1,1,1,1,1,1,1] 
// const target = 1;
// const start = 9;

// console.log(getMinDistance(nums, target, start)); 


var getMinDistance = function(nums, target, start) {
    let minDistance = Number.MAX_VALUE;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            minDistance = Math.min(minDistance, Math.abs(i - start));
        }
    }

    return minDistance;
};

const nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const target = 1;
const start = 9;

console.log(getMinDistance(nums, target, start)); 
