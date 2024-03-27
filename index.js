const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

    let input = rl("nums=");
    var nums=input.split(",");
    var target=prompt("Target=");
    for(i=0;i<nums.length;i++){
        for(j=0;j<=i;j++){
        var sum=nums[i] + nums[j];
        if(sum==target){
            var number=[nums.indexOf(i),nums.indexOf(j)];
            console.log(number);
            break;
        }
        else {
            continue;
        }

        }
    }

