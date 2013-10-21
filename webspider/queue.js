function queue(){
	this.queue=[];
	
};


queue.prototype={
	push:function(z){
		this.queue.push(z);
	},
	
	shift:function(z){
		if(this.queue.isEmpty())return undefined;
		this.queue.shift(z);
	
	}
};


module.exports = queue;
