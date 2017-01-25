function identityMiddleware() {
  return function(next){
    return function(action) {
      next(action)
    }
  }
}

typeof exports === 'object' && typeof module !== 'undefined' 
  ? (module.exports = identityMiddleware)
  : (global.identityMiddleware = identityMiddleware) 

