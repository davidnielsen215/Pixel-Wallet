import React, {Component } from "react"
import axios from "axios"

const AppContext = React.createContext()
const financeAxios = axios.create()

financeAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export class AppContextProvider extends Component {
    constructor() {
        super()
        this.state = {
            incomes: [],
            expenses: [],
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ""
        }
    }

    signup = (userInfo) => {
        return financeAxios.post("/auth/signup", userInfo)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({
                    user,
                    token
                });
                return response
            })
    }

    login = (credentials) => {
        return financeAxios.post("/auth/login", credentials)
            .then(response => {
                const { token, user } = response.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({
                    user,
                    token
                });
                
 
                return response
            })
    }

    logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        this.setState({
            incomes: [],
            expenses: [],
            user: {},
            token: "",
            
        })
    }

    componentDidMount() {
        this.getFinances()
    }

    getFinances = () => {
        return financeAxios.get("/api/finance/")
            .then(response => {
                this.setState({ 
                    incomes: response.data.filter(money => money.type === 'income'),
                    expenses: response.data.filter(money => money.type === 'expense'),
                 }) 
                return response
            })
    }



    addIncome = (newIncome) => {
        return financeAxios.post("/api/finance/", newIncome)
            .then(response => {
                this.setState(prevState => {
                    return { incomes: [...prevState.incomes, response.data] }
                });
                return response;
            })
    }

    addExpense = (newExpense) => {
        return financeAxios.post("/api/finance/", newExpense)
            .then(response => {
                this.setState(prevState => {
                    return { expenses: [...prevState.expenses, response.data] }
                });
                return response;
            })
    }

    editIncome = (incomeId, income) => {
        return financeAxios.put(`/api/finance/${incomeId}`, income)
            .then(response => {
                this.setState(prevState => {
                    const updatedIncomes = prevState.incomes.map(income => {
                        return income._id === response.data._id ? response.data : income
                    })
                    return { incomes: updatedIncomes }
                })
                return response;
            })
    }
    editExpense = (expenseId, expense) => {
        return financeAxios.put(`/api/finance/${expense}`, expense)
            .then(response => {
                this.setState(prevState => {
                    const updatedExpenses = prevState.expenses.map(expense => {
                        return expense._id === response.data._id ? response.data : expense
                    })
                    return { expenses: updatedExpenses }
                })
                return response;
            })
    }

    deleteIncome = (incomeId) => {
        return financeAxios.delete(`/api/finance/${incomeId}`)
            .then(response => {
                this.setState(prevState => {
                    const updatedIncomes = prevState.incomes.filter(income => {
                        return income._id !== incomeId
                    })
                    return { incomes: updatedIncomes }
                })
                return response
            })
    }

    deleteExpense = (expenseId) => {
        return financeAxios.delete(`/api/finance/${expenseId}`)
            .then(response => {
                this.setState(prevState => {
                    const updatedExpenses = prevState.expenses.filter(expense => {
                        return expense._id !== expenseId
                    })
                    return { expenses: updatedExpenses }
                })
                return response
            })
    }

    render(){
        return(
            <AppContext.Provider 
                value={{
                    login: this.login,
                    signup: this.signup,
                    logout: this.logout,
                    addIncome: this.addIncome,
                    addExpense: this.addExpense,
                    editIncome: this.editIncome,
                    editExpense: this.editExpense,
                    deleteIncome: this.deleteIncome,
                    deleteExpense: this.deleteExpense,
                    ...this.state
                }}
            >

                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export const withContext = Component => {
    return props => {
        return (
            <AppContext.Consumer>
                {
                    globalState => {
                        return(
                            <Component
                                {...globalState}
                                {...props}
                            />
                        )
                    }
                }
            </AppContext.Consumer>
        )
    }
}