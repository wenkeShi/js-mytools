var tools = {
	bubbleSort : function (data,desc){
		for(let i=0;i<data.length-1;i++){
			for(let j=0;j<data.length-1-i;j++){
				let temp;
				if(desc){
					 data[j+1]>data[j]?(temp=data[j+1],data[j+1]=data[j],data[j]=temp):0;
				}else{
					data[j+1]<data[j]?(temp=data[j+1],data[j+1]=data[j],data[j]=temp):0;
				}	
			}
		}
		return data;
	},
	//实现对象深复制
	deepClone : function deepClone(obj){   
		var cloneObj=obj instanceof Array?[]:{};
		if(typeof obj !== 'object'){
			 cloneObj=obj;
		} else{
			for(var attr in obj){
				cloneObj[attr]=deepClone(obj[attr]);
			}
		}
		return cloneObj;
	},
	//计算一个月的天数
	getDaysOfMonth: function(primalDate) {
		var date = new Date(primalDate);  //要新建一个对象，因为会改变date
		var month = date.getMonth();
		var time = date.getTime();        //计算思路主要是month+1,相减除一天的毫秒数
		var newTime = date.setMonth(month + 1);
		return Math.ceil((newTime - time) / (24 * 60 * 60 * 1000));
	},
}