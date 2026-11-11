class MinStack {
    constructor() {
       this.minstack=[];
       this.stack=[];
    }

    push(val) {
     
     
     if(this.minstack.length == 0 || 
     val <= this.minstack[this.minstack.length-1] 
     ){
        this.minstack.push(val);
     }
     this.stack.push(val);
    }

    pop() {
      if(this.top() == this.getMin()){
          this.minstack.pop();
      }
      this.stack.pop()
    }

    top() {
    //    console.log(this.stack,"Stack")
       return this.stack[this.stack.length-1];
    }

    getMin() {
        return this.minstack[this.minstack.length-1]
    }
}
