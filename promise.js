function Promise(ex){
    let self = this
    self.status = 'pending'
    self.value = null
    self.reason = null
    self.onFulfilledCallbacks = []
    self.onRejectedCallbacks = []

    function resolve(vale){
        if(self.status === 'pending'){
            self.vale = value
            self.status = 'fulfilled'
            self.onFulfilledCallbacks.forEach(item=>item())
        }
    }

    function reject(reason){
        if(self.status === 'pending'){
            self.vale = reason
            self.status = 'rejected'
            self.onRejectedCallbacks.forEach(item=>item())
        }
    }

    try{
        ex(resolve,reject)
    }catch(err){
        reject(err)
    }

}


Promise.prototype.then = function(onfulfilled,onRejected){
    onfulfilled = typeof onfulfilled === 'function' ? onfulfilled : function(data){resolve(data)}
    onRejected = typeof onRejected === 'function' ? onRejected : function(err){throw err}
    let self = this

    if(self.status === 'fulfilled'){
        return new Promise((resolve,reject)=>{
            try{
                let x = onfulfilled(self.vale)
                if(x instanceof Promise){
                    x.then(resolve,reject)
                }else{
                    resolve(x)
                }
            }catch(err){
                reject(err)
            }
        })
    }
    if(self.status === 'rejected'){
        return new Promise((resolve,reject)=>{
            try{
                let x = onRejected(self.reason)
                if(x instanceof Promise){
                    x.then(resolve,reject)
                }else{
                    resolve(x)
                }
            }catch(err){
                reject(err)
            }
        })
    }
    if(self.status === 'pending'){
        return new Promise((resolve,reject)=>{
            self.onFulfilledCallbacks.push(()=>{
                let x = onfulfilled(self.value)
                if(x instanceof Promise){
                    x.then(resolve,reject)
                }else{
                    resolve(x)
                }
            })
        })
        self.onRejectedCallbacks.push(()=>{
            let x = onRejected(self.reason)
            if(x instanceof Promise){
                x.then(resolve,reject)
            }else{
                resolve(x)
            }
        })
    }
}

Promise.prototype.catch = function(fn){
    return this.then(null,fn)
}