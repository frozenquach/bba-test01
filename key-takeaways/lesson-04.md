nodeJS
Tạo hàm:
 function tenHam(){
    //coding
}
tenHam()

function tenHamCoParam(Param1,Param2){
    //coding
}
tenHamCoParam(Param1,Param2)

return trong hàm: Trả kết quả trong hàm
function sum(a,b){
    return a+b
}
sum(4,5)

Mảng (Array)
let arr=[1,2,3,4]
arr.length //chiều dài array
arr.push(5) //thêm 5 vào array arr[1,2,3,4,5]
arr.pop //xóa phần tử cuối arr[1,2,3,4]
arr.unshift(0) //thêm phần tử vào đầu arr[0,1,2,3,4]
arr.shift() //xóa phần tử đầu arr[1,2,3,4]

Vòng lặp (for)
for(let i=0;i<arr.length;i++){

}
for(let i of arr){
    console.log(i) // 1 2 3 4
}
arr.forEach(function(value,index){
    console.log(`${index} ${value}` )
})

Object
let person={
    name: 'Duc',
    age: 30
}
Truy xuất Object
console.log(person.name) //Duc
console.log(person.age) //30

Gán giá trị
person.name=Duc1
console.log(person.name) //Duc1

Thêm thuộc tính
person['gender']="Nam"
console.log(person.gender) //Nam