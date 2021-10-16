const rewire = require("rewire")
const actions = rewire("./actions")
const init = actions.__get__("init")
const axiosRequest = actions.__get__("axiosRequest")
const axiosResponse = actions.__get__("axiosResponse")
// @ponicode
describe("init", () => {
    test("0", () => {
        let callFunction = () => {
            init()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("axiosRequest", () => {
    test("0", () => {
        let callFunction = () => {
            axiosRequest("http://base.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            axiosRequest("https://croplands.org/app/a/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            axiosRequest("ponicode.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            axiosRequest("https://croplands.org/app/a/reset?token=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            axiosRequest("https://api.telegram.org/bot")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            axiosRequest(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("axiosResponse", () => {
    test("0", () => {
        let callFunction = () => {
            axiosResponse("https://")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            axiosResponse("https://twitter.com/path?abc")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            axiosResponse("http://base.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            axiosResponse("http://www.croplands.org/account/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            axiosResponse("http://www.example.com/route/123?foo=bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            axiosResponse(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
