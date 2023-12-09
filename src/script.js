// var rotate = function(matrix) {
//     let arrayId=2;
//     let mid=matrix[1][1];
//     let valId=-1
//     let length= matrix.length;

//     for(let i=0; i<length-1; i++)
//     {
//         valId++
//         arrayId--
//         for(let j=1; j<length; )
//         {
//             if(matrix[i][j]===mid)
//             {
//                 j++
//             }
//             else{
//                 let temp=matrix[i][j];
//                 matrix[i][j]=matrix[arrayId][valId]
//                 matrix[arrayId][valId]=temp;
//                 arrayId++
//                 j++

//             }
//         }
//     }

//     for(let n=0; n<length; n++)
//     {
       
//        matrix[n].reverse()
//     }
//   return matrix
// };
// let matrix= [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]``
// console.log(rotate(matrix))


